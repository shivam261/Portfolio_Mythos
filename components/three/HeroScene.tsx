"use client";

/**
 * 3D hero background: an abstract distributed-systems node graph.
 * - Nodes scattered in a loose sphere, connected to near neighbors
 * - Glowing "packets" travel along random edges (data in flight)
 * - Whole graph slowly rotates and tilts toward the mouse
 *
 * Rendered client-only via HeroCanvas (lazy, with graceful fallback).
 */
import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ACCENT = new THREE.Color("#38bdf8");

/** Seeded PRNG so the graph is deterministic (pure at render time). */
function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

interface GraphData {
  positions: Float32Array;
  edges: [number, number][];
  linePositions: Float32Array;
}

function buildGraph(nodeCount: number): GraphData {
  const rng = mulberry32(nodeCount * 7919 + 42);

  // Random spread inside a flattened ellipsoid
  const positions = new Float32Array(nodeCount * 3);
  for (let i = 0; i < nodeCount; i++) {
    const r = 4.2 * Math.cbrt(rng());
    const theta = rng() * Math.PI * 2;
    const phi = Math.acos(2 * rng() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta) * 1.4;
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.8;
    positions[i * 3 + 2] = r * Math.cos(phi);
  }

  // Connect nodes closer than a threshold
  const edges: [number, number][] = [];
  const a = new THREE.Vector3();
  const b = new THREE.Vector3();
  for (let i = 0; i < nodeCount; i++) {
    for (let j = i + 1; j < nodeCount; j++) {
      a.fromArray(positions, i * 3);
      b.fromArray(positions, j * 3);
      if (a.distanceTo(b) < 2.1) edges.push([i, j]);
    }
  }

  const linePositions = new Float32Array(edges.length * 6);
  edges.forEach(([i, j], e) => {
    linePositions.set(positions.slice(i * 3, i * 3 + 3), e * 6);
    linePositions.set(positions.slice(j * 3, j * 3 + 3), e * 6 + 3);
  });

  return { positions, edges, linePositions };
}

interface PacketState {
  edge: number;
  t: number;
  speed: number;
}

/** Glowing points that travel along graph edges. */
function Packets({ graph, count }: { graph: GraphData; count: number }) {
  const ref = useRef<THREE.Points>(null);
  // Mutable animation state lives in a ref, initialized on first frame
  const packetsRef = useRef<PacketState[] | null>(null);

  const initialBuffer = useMemo(() => new Float32Array(count * 3), [count]);

  useFrame((_, delta) => {
    const points = ref.current;
    if (!points || graph.edges.length === 0) return;

    packetsRef.current ??= Array.from({ length: count }, () => ({
      edge: Math.floor(Math.random() * graph.edges.length),
      t: Math.random(),
      speed: 0.25 + Math.random() * 0.5,
    }));

    const attr = points.geometry.attributes
      .position as THREE.BufferAttribute;
    const packets = packetsRef.current;
    for (let p = 0; p < packets.length; p++) {
      const pk = packets[p];
      pk.t += pk.speed * delta;
      if (pk.t >= 1) {
        pk.t = 0;
        pk.edge = Math.floor(Math.random() * graph.edges.length);
        pk.speed = 0.25 + Math.random() * 0.5;
      }
      const [i, j] = graph.edges[pk.edge];
      attr.setXYZ(
        p,
        THREE.MathUtils.lerp(graph.positions[i * 3], graph.positions[j * 3], pk.t),
        THREE.MathUtils.lerp(graph.positions[i * 3 + 1], graph.positions[j * 3 + 1], pk.t),
        THREE.MathUtils.lerp(graph.positions[i * 3 + 2], graph.positions[j * 3 + 2], pk.t)
      );
    }
    attr.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[initialBuffer, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={ACCENT}
        size={0.14}
        transparent
        opacity={0.95}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function NetworkGraph({ nodeCount }: { nodeCount: number }) {
  const group = useRef<THREE.Group>(null);
  const nodesRef = useRef<THREE.Points>(null);
  const graph = useMemo(() => buildGraph(nodeCount), [nodeCount]);

  useFrame((rootState, delta) => {
    if (!group.current) return;
    // Slow drift + ease toward pointer
    group.current.rotation.y += delta * 0.05;
    const targetX = rootState.pointer.y * 0.18;
    const targetZ = rootState.pointer.x * 0.12;
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      targetX,
      0.04
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      targetZ,
      0.04
    );
    // Gentle node "heartbeat"
    if (nodesRef.current) {
      const m = nodesRef.current.material as THREE.PointsMaterial;
      m.size = 0.09 + Math.sin(rootState.clock.elapsedTime * 1.6) * 0.015;
    }
  });

  return (
    <group ref={group}>
      <points ref={nodesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[graph.positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color={ACCENT}
          size={0.09}
          transparent
          opacity={0.85}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[graph.linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color={ACCENT}
          transparent
          opacity={0.12}
          depthWrite={false}
        />
      </lineSegments>
      <Packets graph={graph} count={Math.round(nodeCount / 6)} />
    </group>
  );
}

export default function HeroScene({ lowPower }: { lowPower: boolean }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 50 }}
      dpr={lowPower ? 1 : [1, 1.75]}
      gl={{ antialias: !lowPower, alpha: true, powerPreference: "low-power" }}
      style={{ background: "transparent" }}
    >
      <NetworkGraph nodeCount={lowPower ? 48 : 96} />
    </Canvas>
  );
}
