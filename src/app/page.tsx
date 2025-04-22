'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Home: React.FC = () => {
  const [showVias, setShowVias] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowVias(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const vias = [
    { nome: 'educacao', cor: 'from-yellow-400 to-yellow-600', label: 'Educação', top: 'top-[10%]', left: 'left-[5%]' },
    { nome: 'saude', cor: 'from-cyan-400 to-cyan-600', label: 'Saúde', top: 'top-[30%]', left: 'left-[2%]' },
    { nome: 'energia', cor: 'from-purple-500 to-purple-700', label: 'Energia', top: 'top-[80%]', left: 'left-[10%]' },
    { nome: 'automacao', cor: 'from-orange-400 to-orange-600', label: 'Automação', top: 'top-[10%]', right: 'right-[5%]' },
    { nome: 'assistiva', cor: 'from-pink-400 to-pink-600', label: 'Assistiva', top: 'top-[30%]', right: 'right-[2%]' },
    { nome: 'pesquisa', cor: 'from-green-400 to-green-600', label: 'P&D', top: 'top-[80%]', right: 'right-[10%]' },
  ];

  return (
    <main className="relative w-full h-screen bg-black text-white overflow-hidden font-sans">
      {/* Logo ocupa 100% da tela */}
      <Link href="/" className="absolute inset-0 z-10 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2 }}
          className="relative w-full h-full"
        >
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute inset-0"
          >
            <Image
              src="/brain-logo.png"
              alt="Logo Cerebral da Neurovia"
              fill
              className="object-contain max-h-screen w-auto pointer-events-auto"
              priority
            />
          </motion.div>
        </motion.div>
      </Link>

      {/* Trilhas aparecendo depois de 2s */}
      {showVias && vias.map((via, index) => (
        <Link href={`/vias/${via.nome}`} key={index}>
          <motion.div
            className={`absolute ${via.top || ''} ${via.left || ''} ${via.right || ''} z-20 text-center cursor-pointer group`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 1.5 }}
              className={`w-[2px] h-[70px] bg-gradient-to-b ${via.cor} mx-auto group-hover:animate-pulse`}
            ></motion.div>
            <div className="mt-2 text-xs text-cyan-200 group-hover:underline">
              {via.label}
            </div>
          </motion.div>
        </Link>
      ))}
    </main>
  );
};

export default Home;

