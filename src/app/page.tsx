'use client';

import React, { Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { useRef } from 'react';

const Brain = () => {
  const { scene } = useGLTF('/brain-3d.glb');
  return <primitive object={scene} scale={2.5} />;
};

const Trail = ({ from, to, color }: { from: [number, number, number]; to: [number, number, number]; color: string }) => {
  const ref = useRef<THREE.Line>(null);
  const points = [new THREE.Vector3(...from), new THREE.Vector3(...to)];
  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  useFrame(() => {
    if (ref.current) {
      ref.current.material.emissiveIntensity = Math.abs(Math.sin(Date.now() * 0.002)) * 1.5;
    }
  });

  return (
    <line ref={ref} geometry={geometry}>
      <lineBasicMaterial attach="material" color={color} linewidth={2} />
    </line>
  );
};

const ViaIcon = ({
  position,
  color,
  label,
  emoji,
}: {
  position: [number, number, number];
  color: string;
  label: string;
  emoji: string;
}) => {
  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} />
      </mesh>
      <Html center>
        <div className="text-white text-xs text-center animate-pulse">
          <div>{emoji}</div>
          <div>{label}</div>
        </div>
      </Html>
    </group>
  );
};

const Scene = () => {
  const center = [0, 0, 0];

  const vias = [
    { position: [-4, 2.5, 0], color: 'yellow', label: 'Educação', emoji: '🎓' },
    { position: [-4.5, -1, 0], color: 'green', label: 'P&D', emoji: '🧪' },
    { position: [-2.8, -2.8, 0], color: 'orange', label: 'Tecnologia Assistiva', emoji: '🤝' },
    { position: [2.8, -2.8, 0], color: 'red', label: 'Saúde', emoji: '➕' },
    { position: [4.5, -1, 0], color: 'cyan', label: 'Automação', emoji: '🤖' },
    { position: [4, 2.5, 0], color: 'purple', label: 'Energia', emoji: '🔆' },
  ];

  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 45 }} className="w-full h-screen">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Brain />
        {vias.map((via, i) => (
          <React.Fragment key={i}>
            <ViaIcon {...via} />
            <Trail from={center} to={via.position} color={via.color} />
          </React.Fragment>
        ))}
      </Suspense>
      <OrbitControls enableZoom={true} autoRotate />
    </Canvas>
  );
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <Scene />
    </main>
  );
}
