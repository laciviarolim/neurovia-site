'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Home: React.FC = () => {
  const vias = [
    { nome: 'educacao', cor: 'from-yellow-400 to-yellow-600', label: 'Educação', top: 'top-[25%]', left: 'left-[10%]' },
    { nome: 'saude', cor: 'from-cyan-400 to-cyan-600', label: 'Saúde', top: 'top-[40%]', left: 'left-[5%]' },
    { nome: 'energia', cor: 'from-purple-500 to-purple-700', label: 'Energia', top: 'top-[60%]', left: 'left-[15%]' },
    { nome: 'automacao', cor: 'from-orange-400 to-orange-600', label: 'Automação', top: 'top-[25%]', right: 'right-[10%]' },
    { nome: 'assistiva', cor: 'from-pink-400 to-pink-600', label: 'Assistiva', top: 'top-[40%]', right: 'right-[5%]' },
    { nome: 'pesquisa', cor: 'from-green-400 to-green-600', label: 'P&D', top: 'top-[60%]', right: 'right-[15%]' },
  ];

  return (
    <main className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
      <header className="p-6 flex justify-between items-center border-b border-white/10 sticky top-0 z-50 bg-black/80 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <motion.div animate={{ rotate: [0, 2, -2, 0] }} transition={{ repeat: Infinity, duration: 4 }}>
            <Image src="/brain-logo.png" alt="Neurovia Logo" width={32} height={32} />
          </motion.div>
          <h1 className="text-3xl font-bold text-cyan-400">Neurovia</h1>
        </div>
        <nav className="space-x-6">
          <a href="#inicio" className="hover:text-cyan-300">Início</a>
          <a href="#sobre" className="hover:text-cyan-300">Sobre</a>
          <a href="#contato" className="hover:text-cyan-300">Contato</a>
        </nav>
      </header>

      <section id="inicio" className="min-h-screen flex items-center justify-center flex-col p-10 relative">
        <div className="relative w-[300px] h-[300px]">
          <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity }}>
            <Image
              src="/brain-logo.png"
              alt="Cérebro Neurovia"
              width={300}
              height={300}
              className="mx-auto z-10 relative"
            />
          </motion.div>
          {vias.map((via, index) => (
            <Link href={`/vias/${via.nome}`} key={index}>
              <motion.div
                className={`absolute ${via.top || ''} ${via.left || ''} ${via.right || ''} text-center cursor-pointer`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <div className={`w-[2px] h-[70px] bg-gradient-to-b ${via.cor} mx-auto animate-pulse`}></div>
                <div className="mt-2 text-xs text-cyan-200 hover:underline">
                  {via.label}
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
        <h2 className="text-4xl font-bold text-cyan-300 mt-6 text-center">Tecnologia que pensa com você</h2>
        <p className="text-gray-300 text-center max-w-xl mt-4">
          A Neurovia conecta educação, saúde e sustentabilidade através da tecnologia. Clique nas vias para explorar os projetos.
        </p>
      </section>

      <section id="sobre" className="p-10 bg-gray-900 text-center">
        <h3 className="text-3xl text-cyan-400 font-semibold mb-6">Sobre a Neurovia</h3>
        <p className="max-w-3xl mx-auto">
          Somos uma startup brasileira fundada por uma engenheira e um gestor educacional apaixonados por mudança. Criamos tecnologias com propósito, formação e impacto social, conectando dados, pessoas e soluções para um futuro melhor.
        </p>
      </section>

      <section id="contato" className="p-10 bg-black text-center">
        <h3 className="text-3xl text-cyan-400 font-semibold mb-4">Entre em Contato</h3>
        <p>Email: <a className="text-cyan-300 hover:underline" href="mailto:contato@neuroviasync.com.br">contato@neuroviasync.com.br</a></p>
        <p className="mt-2">Instagram: <a className="text-cyan-300 hover:underline" href="https://instagram.com/neurovia">@neurovia</a></p>
      </section>

      <footer className="text-center text-sm p-4 text-gray-500 bg-black">
        &copy; {new Date().getFullYear()} Neurovia. Todos os direitos reservados.
      </footer>
    </main>
  );
};

export default Home;
