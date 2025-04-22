'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const vias = [
  { nome: 'educacao', label: 'Educação', icon: '🎓', position: 'left-[10%] top-[20%]', cor: 'bg-yellow-400' },
  { nome: 'saude', label: 'Saúde', icon: '🏥', position: 'right-[10%] top-[20%]', cor: 'bg-cyan-500' },
  { nome: 'energia', label: 'Energia', icon: '⚡️', position: 'left-[5%] bottom-[20%]', cor: 'bg-purple-500' },
  { nome: 'automacao', label: 'Automação', icon: '🚧', position: 'right-[5%] bottom-[20%]', cor: 'bg-orange-500' },
  { nome: 'assistiva', label: 'Assistiva', icon: '🧠', position: 'left-[50%] top-[5%] translate-x-[-50%]', cor: 'bg-pink-500' },
  { nome: 'pesquisa', label: 'P&D', icon: '🤖', position: 'left-[50%] bottom-[5%] translate-x-[-50%]', cor: 'bg-green-500' },
];

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Cabeçalho */}
      <header className="p-6 flex justify-between items-center border-b border-white/10 sticky top-0 z-50 bg-black/80 backdrop-blur-md">
        <h1 className="text-2xl font-bold text-cyan-400">Neurovia</h1>
        <nav className="space-x-6">
          <a href="#projetos" className="hover:text-cyan-300">Projetos</a>
          <a href="#sobre" className="hover:text-cyan-300">Sobre</a>
          <a href="#contato" className="hover:text-cyan-300">Contato</a>
        </nav>
      </header>

      {/* Cérebro central */}
      <section className="relative w-full h-[100vh] flex items-center justify-center">
        <motion.div
          className="relative w-[300px] h-[300px] rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 shadow-2xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {/* Trilhas e ícones */}
          {vias.map((via, index) => (
            <Link key={index} href={`/vias/${via.nome}`}>
              <motion.div
                className={`absolute ${via.position} flex flex-col items-center cursor-pointer transition-transform`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 + index * 0.2 }}
                whileHover={{ scale: 1.2 }}
              >
                <div className={`w-[2px] h-[60px] ${via.cor} animate-pulse`} />
                <div className={`w-12 h-12 ${via.cor} rounded-full flex items-center justify-center text-xl shadow-lg mt-2`}>
                  {via.icon}
                </div>
                <span className="text-xs text-gray-300 mt-1">{via.label}</span>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </section>

      {/* Rodapé */}
      <footer className="text-center text-sm p-4 text-gray-500 bg-black">
        &copy; {new Date().getFullYear()} Neurovia. Todos os direitos reservados.
      </footer>
    </main>
  );
}
