'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Home = () => {
  const [showVias, setShowVias] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowVias(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const vias = [
    { nome: 'educacao', label: 'Educação', icon: '📚', top: 'top-[10%]', left: 'left-[50%] -translate-x-1/2' },
    { nome: 'saude', label: 'Saúde', icon: '🩺', top: 'top-[30%]', left: 'left-[10%]' },
    { nome: 'energia', label: 'Energia', icon: '💡', top: 'top-[80%]', left: 'left-[20%]' },
    { nome: 'automacao', label: 'Automação', icon: '🏠', top: 'top-[80%]', right: 'right-[20%]' },
    { nome: 'assistiva', label: 'Assistiva', icon: '🦾', top: 'top-[30%]', right: 'right-[10%]' },
    { nome: 'pesquisa', label: 'P&D', icon: '🔬', top: 'top-[10%]', left: 'left-[90%]' },
  ];

  return (
    <main className="relative min-h-screen w-full bg-black text-white font-sans overflow-hidden">
      {/* Versão do site para verificação */}
      <h1 className="text-center text-yellow-300 text-xl font-bold mt-6 z-50 relative">
        🧠 Última versão: SVG Realista ativada em 22/04/2025 - 20h
      </h1>

      {/* Cérebro Central (SVG animado) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <motion.svg
          viewBox="0 0 200 200"
          width={300}
          height={300}
          initial={{ scale: 0.9 }}
          animate={{ scale: [0.9, 1.05, 0.9] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-cyan-400 fill-current"
        >
          <path d="M100,30
                   a30,30 0 1,0 0.1,0
                   M70,30
                   a20,20 0 1,0 0.1,0
                   M130,30
                   a20,20 0 1,0 0.1,0
                   M85,100
                   a40,40 0 1,0 30,0
                   M70,130
                   a15,15 0 1,0 60,0" />
        </motion.svg>
      </div>

      {/* Trilhas com ícones */}
      {showVias && vias.map((via, index) => (
        <Link href={`/vias/${via.nome}`} key={index}>
          <motion.div
            className={`absolute ${via.top} ${via.left || ''} ${via.right || ''} text-center cursor-pointer group z-20`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.2 }}
          >
            <div className="text-3xl group-hover:animate-pulse">{via.icon}</div>
            <div className="text-xs text-cyan-200 mt-1 group-hover:underline">{via.label}</div>
          </motion.div>
        </Link>
      ))}
    </main>
  );
};

export default Home;
