// Homepage com cérebro 3D central e vias animadas ao redor

'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html } from '@react-three/drei';
import React, { Suspense } from 'react';
import * as THREE from 'three';

const Brain = () => {
  const { scene } = useGLTF('/brain-3d.glb');
  return <primitive object={scene} scale={2.5} position={[0, 0, 0]} />;
};

const ViaIcon = ({ position, color, label, emoji }: { position: [number, number, number], color: string, label: string, emoji: string }) => {
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
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 45 }} className="w-full h-screen">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Brain />

        {/* Vias ao redor do cérebro em posições circulares */}
        <ViaIcon position={[-4, 2, 0]} color="yellow" label="Educação" emoji="🎓" />
        <ViaIcon position={[-5, -1.5, 0]} color="green" label="P&D" emoji="🧪" />
        <ViaIcon position={[-3, -3.5, 0]} color="orange" label="Tecnologia Assistiva" emoji="🤝" />
        <ViaIcon position={[3, -3.5, 0]} color="red" label="Saúde" emoji="➕" />
        <ViaIcon position={[5, -1.5, 0]} color="cyan" label="Automação" emoji="🤖" />
        <ViaIcon position={[4, 2, 0]} color="purple" label="Energia" emoji="🔆" />
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

