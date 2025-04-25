'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html } from '@react-three/drei';
import React, { Suspense } from 'react';
import * as THREE from 'three';

// Importa o cérebro do novo arquivo .glb
const Brain = () => {
  const { scene } = useGLTF('/brainesse.glb');
  scene.scale.set(1.2, 1.2, 1.2); // Ajusta a escala para maior destaque
  return <primitive object={scene} />;
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
      {/* Linha */}
      <mesh position={[0, -1.2, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 2, 32]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
      </mesh>

      {/* Ícone */}
      <Html center>
        <div className="text-white text-center text-sm">
          <div className="text-2xl animate-pulse">{emoji}</div>
          <div className="font-semibold drop-shadow">{label}</div>
        </div>
      </Html>
    </group>
  );
};

const Scene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 50 }} className="w-full h-screen">
      <ambientLight intensity={0.7} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Brain />
        <ViaIcon position={[-4, 2.5, 0]} color="#FFD700" label="Educação" emoji="🎓" />
        <ViaIcon position={[-4.5, -1.5, 0]} color="#7FFF00" label="P&D" emoji="🧪" />
        <ViaIcon position={[-2.8, -3.2, 0]} color="#FFA500" label="Tecnologia Assistiva" emoji="🤝" />
        <ViaIcon position={[2.8, -3.2, 0]} color="#FF6347" label="Saúde" emoji="➕" />
        <ViaIcon position={[4.5, -1.5, 0]} color="#00CED1" label="Automação" emoji="🤖" />
        <ViaIcon position={[4, 2.5, 0]} color="#8A2BE2" label="Energia" emoji="🔆" />
      </Suspense>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
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

