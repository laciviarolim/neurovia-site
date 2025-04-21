// Template interativo da homepage da Neurovia com animações e trilhas clicáveis

'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0,255,255,0.3)' }}
      whileTap={{ scale: 0.98 }}
      className="p-6 bg-black border border-white/10 rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer"
    >
      <h4 className="text-xl font-bold text-cyan-300 mb-2">{title}</h4>
      <p className="text-sm text-gray-300">{description}</p>
    </motion.div>
  );
};

const Home: React.FC = () => {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <header className="p-6 flex justify-between items-center border-b border-white/10 sticky top-0 z-50 bg-black/80 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <motion.div animate={{ rotate: [0, 2, -2, 0] }} transition={{ repeat: Infinity, duration: 4 }}>
            <Image src="/brain-logo.png" alt="Neurovia Logo" width={32} height={32} />
          </motion.div>
          <h1 className="text-3xl font-bold text-cyan-400">Neurovia</h1>
        </div>
        <nav className="space-x-6">
          <a href="#projetos" className="hover:text-cyan-300">Projetos</a>
          <a href="#sobre" className="hover:text-cyan-300">Sobre</a>
          <a href="#contato" className="hover:text-cyan-300">Contato</a>
        </nav>
      </header>

      <section className="relative flex flex-col items-center justify-center min-h-[100vh] bg-gradient-to-b from-black via-gray-900 to-gray-800 p-10 overflow-hidden">
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: [0.95, 1, 0.95] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="z-10 relative"
        >
          <Image src="/brain-logo.png" alt="Cérebro Neurovia" width={240} height={240} className="rounded-lg shadow-lg" />
        </motion.div>

        <div className="absolute z-20 top-[calc(50%-120px)] w-full h-full flex flex-wrap justify-center items-center gap-8 px-6 pointer-events-none">
          {[ 
            { label: 'Ecobots', href: '#projetos', x: -300, y: -50 },
            { label: 'Dispenser', href: '#projetos', x: 300, y: -50 },
            { label: 'Jogo Web', href: '#projetos', x: -200, y: 120 },
            { label: 'SmartHome', href: '#projetos', x: 200, y: 120 },
            { label: 'Solar VIA', href: '#projetos', x: 0, y: 220 },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="absolute bg-cyan-500 text-black font-bold text-xs rounded-full px-3 py-1 shadow-xl hover:bg-white hover:text-black cursor-pointer pointer-events-auto"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, x: item.x, y: item.y }}
              transition={{ delay: 0.5 + index * 0.3 }}
              whileHover={{ scale: 1.2 }}
            >
              <Link href={item.href}>{item.label}</Link>
            </motion.div>
          ))}
        </div>

        <motion.h2
          className="text-4xl font-bold text-cyan-300 mt-6 mb-2 z-10 relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Bem-vindo a Neurovia 🧠🚀
        </motion.h2>
        <motion.p
          className="text-lg max-w-2xl mx-auto text-center z-10 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Esta é a nova versão interativa do nosso site! A Neurovia conecta educação, saúde e sustentabilidade através da tecnologia.
        </motion.p>

        <motion.div
          className="absolute w-full h-full top-0 left-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
        >
          <Image src="/brain-network-bg.png" alt="Trilhas da Neurovia" fill className="object-cover" />
        </motion.div>
      </section>

      <section id="projetos" className="p-10 bg-gray-900">
        <h3 className="text-3xl text-cyan-400 font-semibold text-center mb-6">Projetos em Destaque</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard title="Ecobots" description="Robôs com e-lixo, gincanas sustentáveis e educação ambiental para jovens." />
          <ProjectCard title="Dispenser Automatizado" description="Controle de medicação para pacientes com dados em nuvem e IoT." />
          <ProjectCard title="Jogo Educacional Web" description="Game sobre saúde, meio ambiente e escolhas conscientes." />
          <ProjectCard title="SmartHome VIA" description="Soluções de automação residencial acessíveis e sustentáveis." />
          <ProjectCard title="Solar VIA" description="Manutenção preventiva inteligente para sistemas fotovoltaicos." />
        </div>
      </section>

      <section id="sobre" className="p-10 bg-black">
        <h3 className="text-3xl text-cyan-400 font-semibold text-center mb-6">Sobre a Neurovia</h3>
        <p className="max-w-3xl mx-auto text-center">
          Somos uma startup brasileira fundada por uma engenheira e um professor apaixonados por mudança. Criamos tecnologias com propósito, formação e impacto social, conectando dados, pessoas e soluções para um futuro melhor.
        </p>
      </section>

      <section id="contato" className="p-10 bg-gray-900 text-center">
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
