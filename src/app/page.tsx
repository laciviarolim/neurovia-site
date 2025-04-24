'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const vias = [
  { name: 'educacao', label: 'Educação', emoji: '🎓', color: 'from-yellow-400 to-yellow-600', top: 'top-[20%]', left: 'left-[10%]' },
  { name: 'automacao', label: 'Automação', emoji: '🤖', color: 'from-cyan-400 to-cyan-600', top: 'top-[35%]', left: 'left-[5%]' },
  { name: 'saude', label: 'Saúde', emoji: '➕', color: 'from-red-400 to-red-600', top: 'top-[60%]', left: 'left-[15%]' },
  { name: 'energia', label: 'Energia', emoji: '🔆', color: 'from-purple-500 to-purple-700', top: 'top-[20%]', right: 'right-[10%]' },
  { name: 'assistiva', label: 'Assistiva', emoji: '🤝', color: 'from-pink-400 to-pink-600', top: 'top-[35%]', right: 'right-[5%]' },
  { name: 'pesquisa', label: 'P&D', emoji: '🧪', color: 'from-green-400 to-green-600', top: 'top-[60%]', right: 'right-[15%]' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white font-sans relative overflow-hidden">
      <section className="min-h-screen flex items-center justify-center">
        <div className="relative w-[400px] h-[400px]">
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 to-blue-800 shadow-2xl"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            <div className="text-center text-4xl font-bold text-white pt-[40%] drop-shadow-md">🧠</div>
          </motion.div>

          {vias.map((via, index) => (
            <Link key={index} href={`/vias/${via.name}`} className="absolute">
              <motion.div
                className={`absolute ${via.top || ''} ${via.left || ''} ${via.right || ''} text-center`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.3 }}
              >
                <div className={`w-[2px] h-[70px] bg-gradient-to-b ${via.color} mx-auto animate-pulse`}></div>
                <div className="mt-1 text-sm text-cyan-200 hover:underline">
                  {via.emoji} {via.label}
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="text-center text-sm p-4 text-gray-400">
        &copy; {new Date().getFullYear()} Neurovia. Todos os direitos reservados.
      </footer>
    </main>
  );
}

