// Homepage interativa da Neurovia com cérebro simulado em CSS e trilhas animadas

'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Brain, HeartPulse, Bolt, FlaskConical, GraduationCap, Home } from 'lucide-react';

const vias = [
  { nome: 'educacao', label: 'Educação', icone: <GraduationCap size={20} />, x: '-36', y: '24' },
  { nome: 'saude', label: 'Saúde', icone: <HeartPulse size={20} />, x: '-16', y: '40' },
  { nome: 'energia', label: 'Energia', icone: <Bolt size={20} />, x: '-52', y: '52' },
  { nome: 'automacao', label: 'Automação', icone: <Home size={20} />, x: '16', y: '40' },
  { nome: 'assistiva', label: 'Assistiva', icone: <Brain size={20} />, x: '36', y: '24' },
  { nome: 'pesquisa', label: 'P&D', icone: <FlaskConical size={20} />, x: '0', y: '60' },
];

const Home = () => {
  return (
    <main className="h-screen w-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      {/* Círculo central simulando o cérebro */}
      <motion.div 
        initial={{ scale: 0.8 }} 
        animate={{ scale: [1, 1.05, 1], boxShadow: ['0 0 20px cyan', '0 0 40px blue', '0 0 20px cyan'] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="relative w-[400px] h-[400px] rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-[0_0_60px_#00ffff50]"
      >
        <Brain size={80} className="text-white z-10 animate-pulse" />
        {/* Trilhas animadas */}
        {vias.map((via, i) => (
          <motion.div
            key={via.nome}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2 + i * 0.3, duration: 0.5 }}
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 translate-x-[${via.x}%] translate-y-[${via.y}%] flex flex-col items-center`}
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="w-10 h-10 rounded-full bg-cyan-500 text-black flex items-center justify-center shadow-lg border border-white"
            >
              <Link href={`/vias/${via.nome}`} className="hover:underline">
                {via.icone}
              </Link>
            </motion.div>
            <span className="text-xs mt-1 text-white">{via.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
};

export default Home;
