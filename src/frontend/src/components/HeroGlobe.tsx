import { useIsMobile } from "@/hooks/use-mobile";
import { Float, MeshDistortMaterial, Sphere, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import type * as THREE from "three";

function Globe() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.12;
      meshRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.08) * 0.08;
    }
  });
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} castShadow>
        <Sphere args={[1.6, 64, 64]}>
          <MeshDistortMaterial
            color="#2d6e3e"
            attach="material"
            distort={0.28}
            speed={1.2}
            roughness={0.15}
            metalness={0.5}
            envMapIntensity={0.8}
          />
        </Sphere>
      </mesh>
      <mesh>
        <Sphere args={[1.75, 32, 32]}>
          <meshStandardMaterial
            color="#5aad6e"
            transparent
            opacity={0.08}
            wireframe
          />
        </Sphere>
      </mesh>
    </Float>
  );
}

function OrbitalRing() {
  const ringRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });
  return (
    <mesh ref={ringRef} rotation={[Math.PI / 4, 0, 0]}>
      <torusGeometry args={[2.5, 0.018, 16, 120]} />
      <meshStandardMaterial color="#e6a23c" transparent opacity={0.5} />
    </mesh>
  );
}

export default function HeroGlobe() {
  const isMobile = useIsMobile();
  const prefersReducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  if (prefersReducedMotion) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-primary/70 to-primary/30 shadow-3d-lg" />
      </div>
    );
  }

  if (isMobile) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/70 to-accent/40 shadow-3d animate-glow-pulse" />
      </div>
    );
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 45 }}
      style={{ background: "transparent" }}
      shadows
      aria-label="3D animated globe representing InAmigos Foundation's global mission"
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 3]} intensity={1.4} castShadow />
      <pointLight position={[-3, 2, 2]} intensity={0.7} color="#e6a23c" />
      <pointLight position={[3, -2, 1]} intensity={0.4} color="#2d6e3e" />
      <Stars
        radius={80}
        depth={50}
        count={1200}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <Suspense fallback={null}>
        <Globe />
        <OrbitalRing />
      </Suspense>
    </Canvas>
  );
}
