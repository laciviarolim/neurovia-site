// Template interativo da homepage da Neurovia

'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type ProjectCardProps = {
  title: string;
  description: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="p-6 bg-black border border-white/10 rounded-2xl shadow-md hover:shadow-xl transition"
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
          <motion.div
            className="w-10 h-10"
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            <Image src="/brain-logo.svg" alt="Neurovia" width={40} height={40} />
          </motion.div>
          <h1 className="text-3xl font-bold text-cyan-400">Neurovia</h1>
        </div>
        <nav className="space-x-6">
          <a href="#projetos" className="hover:text-cyan-300">Projetos</a>
          <a href="#sobre" className="hover:text-cyan-300">Sobre</a>
          <a href="#contato" className="hover:text-cyan-300">Contato</a>
        </nav>
      </header>

      <section className="p-10 text-center bg-gradient-to-b from-black via-gray-900 to-gray-800">
        <motion.h2 
          className="text-4xl font-bold text-cyan-300 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Tecnologia que pensa com você.
        </motion.h2>
        <motion.p 
          className="text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          A Neurovia conecta educação, saúde e sustentabilidade através da tecnologia. Nossos projetos impactam vidas com inovação, formação e ação concreta.
        </motion.p>
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
          Somos uma startup brasileira fundada por uma engenheira e um gestor educacional apaixonados por mudança. Criamos tecnologias com propósito, formação e impacto social, conectando dados, pessoas e soluções para um futuro melhor.
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
