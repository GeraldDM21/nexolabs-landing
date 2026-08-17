"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/* ------------------------------------------------------------------ */
/*  Red de nodos: representa el agente conectado a sistemas del negocio */
/*  En pantallas chicas se reduce la densidad para no cargar el celular */
/* ------------------------------------------------------------------ */

const RADIUS = 3.6;

function useNetwork(nodeCount: number, linkDistance: number) {
  return useMemo(() => {
    const positions = new Float32Array(nodeCount * 3);
    const seeds = new Float32Array(nodeCount);
    const pts: THREE.Vector3[] = [];

    // distribucion tipo fibonacci sphere, mas pareja que random
    for (let i = 0; i < nodeCount; i++) {
      const y = 1 - (i / (nodeCount - 1)) * 2;
      const r = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = Math.PI * (3 - Math.sqrt(5)) * i;
      const jitter = 0.82 + Math.random() * 0.3;

      const v = new THREE.Vector3(
        Math.cos(theta) * r,
        y,
        Math.sin(theta) * r,
      ).multiplyScalar(RADIUS * jitter);

      pts.push(v);
      positions[i * 3] = v.x;
      positions[i * 3 + 1] = v.y;
      positions[i * 3 + 2] = v.z;
      seeds[i] = Math.random() * Math.PI * 2;
    }

    // aristas entre nodos cercanos
    const linkPairs: number[] = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        if (pts[i].distanceTo(pts[j]) < linkDistance) linkPairs.push(i, j);
      }
    }

    return { positions, seeds, linkPairs, basePts: pts };
  }, [nodeCount, linkDistance]);
}

function Network({
  nodeCount,
  linkDistance,
}: {
  nodeCount: number;
  linkDistance: number;
}) {
  const group = useRef<THREE.Group>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const { positions, seeds, linkPairs, basePts } = useNetwork(
    nodeCount,
    linkDistance,
  );
  const { viewport } = useThree();

  const linePositions = useMemo(
    () => new Float32Array(linkPairs.length * 3),
    [linkPairs.length],
  );

  const pointGeo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions.slice(), 3));
    return g;
  }, [positions]);

  const lineGeo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    return g;
  }, [linePositions]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const mx = (state.pointer.x * viewport.width) / 90;
    const my = (state.pointer.y * viewport.height) / 90;

    if (group.current) {
      group.current.rotation.y = t * 0.075;
      group.current.rotation.x = Math.sin(t * 0.22) * 0.12;
      group.current.position.x += (mx - group.current.position.x) * 0.045;
      group.current.position.y += (my - group.current.position.y) * 0.045;
    }

    // respiracion de los nodos
    const pos = pointGeo.attributes.position.array as Float32Array;
    for (let i = 0; i < nodeCount; i++) {
      const base = basePts[i];
      const breathe = 1 + Math.sin(t * 0.85 + seeds[i]) * 0.045;
      pos[i * 3] = base.x * breathe;
      pos[i * 3 + 1] = base.y * breathe;
      pos[i * 3 + 2] = base.z * breathe;
    }
    pointGeo.attributes.position.needsUpdate = true;

    // aristas siguen a los nodos
    const lp = lineGeo.attributes.position.array as Float32Array;
    for (let k = 0; k < linkPairs.length; k++) {
      const idx = linkPairs[k];
      lp[k * 3] = pos[idx * 3];
      lp[k * 3 + 1] = pos[idx * 3 + 1];
      lp[k * 3 + 2] = pos[idx * 3 + 2];
    }
    lineGeo.attributes.position.needsUpdate = true;

    if (linesRef.current) {
      const m = linesRef.current.material as THREE.LineBasicMaterial;
      m.opacity = 0.16 + Math.sin(t * 0.6) * 0.05;
    }
  });

  return (
    <group ref={group}>
      <lineSegments ref={linesRef} geometry={lineGeo}>
        <lineBasicMaterial
          color="#38bdf8"
          transparent
          opacity={0.18}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      <points geometry={pointGeo}>
        <pointsMaterial
          color="#7dd3fc"
          size={0.075}
          transparent
          opacity={0.95}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

/* --------------------- nucleo central pulsante --------------------- */

function Core() {
  const mesh = useRef<THREE.Mesh>(null);
  const halo = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (mesh.current) {
      mesh.current.rotation.x = t * 0.28;
      mesh.current.rotation.y = t * 0.36;
    }
    if (halo.current) {
      const s = 1 + Math.sin(t * 1.1) * 0.08;
      halo.current.scale.setScalar(s);
      const m = halo.current.material as THREE.MeshBasicMaterial;
      m.opacity = 0.09 + Math.sin(t * 1.1) * 0.035;
    }
  });

  return (
    <group>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[0.92, 1]} />
        <meshBasicMaterial color="#6366f1" wireframe transparent opacity={0.5} />
      </mesh>
      <mesh ref={halo}>
        <sphereGeometry args={[1.35, 32, 32]} />
        <meshBasicMaterial
          color="#38bdf8"
          transparent
          opacity={0.1}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

/* --------------------------- anillos orbitales --------------------- */

function Rings({ segments }: { segments: number }) {
  const g = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (g.current) {
      g.current.rotation.z = t * 0.14;
      g.current.rotation.x = Math.PI / 2.6 + Math.sin(t * 0.3) * 0.08;
    }
  });

  return (
    <group ref={g}>
      {[2.4, 3.2, 4.1].map((r, i) => (
        <mesh key={r} rotation={[0, 0, (i * Math.PI) / 5]}>
          <torusGeometry args={[r, 0.006, 8, segments]} />
          <meshBasicMaterial
            color={i === 1 ? "#818cf8" : "#38bdf8"}
            transparent
            opacity={0.22 - i * 0.04}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}

/* ------------------------------ export ----------------------------- */

export default function Scene() {
  const [profile, setProfile] = useState<"mobile" | "desktop" | null>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setProfile(window.innerWidth < 900 ? "mobile" : "desktop");
    setReduced(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  // En movil y con movimiento reducido no montamos WebGL:
  // el costo de fillrate hace que el scroll se trabe.
  if (profile === null || reduced || profile === "mobile") return null;

  return (
    <Canvas
      camera={{ position: [0, 0, 9.5], fov: 46 }}
      dpr={[1, 1.75]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      style={{ pointerEvents: "none" }}
    >
      <Network nodeCount={90} linkDistance={1.45} />
      <Core />
      <Rings segments={128} />
    </Canvas>
  );
}
