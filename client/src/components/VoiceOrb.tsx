import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float, Stars, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<any>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Default rotation
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
      
      // Simulated gentle pulse
      const pulse = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
      const targetScale = 1.8 + pulse; // Larger scale for background
      
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.05);
      
      if (materialRef.current) {
        materialRef.current.distort = 0.3 + (pulse * 0.5);
      }
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere args={[1, 64, 64]} ref={meshRef}>
        <MeshDistortMaterial
          ref={materialRef}
          color="#C49BFF"
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.4}
          metalness={0.6}
          emissive="#C49BFF"
          emissiveIntensity={0.1}
          transparent
          opacity={0.6}
        />
      </Sphere>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#C49BFF" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00FFFF" />
      
      <AnimatedSphere />
      
      <Sparkles count={80} scale={8} size={3} speed={0.3} opacity={0.4} color="#C49BFF" />
      <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={0.5} />
    </>
  );
}

export default function VoiceOrb({ className }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Scene />
      </Canvas>
    </div>
  );
}
