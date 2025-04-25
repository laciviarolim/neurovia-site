'use client';

import React from 'react';

export default function HomePage() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-black">
      {/* 🎥 Vídeo de fundo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover z-0"
      >
        <source src="/neurovia.mp4" type="video/mp4" />
        Seu navegador não suporta vídeo HTML5.
      </video>

      {/* 🌟 Conteúdo sobreposto */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center p-6 backdrop-blur-sm bg-black/30">
        <h1 className="text-4xl md:text-6xl font-extrabold text-cyan-400 animate-pulse mb-6">
          Neurovia
        </h1>
        <p className="max-w-xl text-lg md:text-2xl text-gray-200 mb-8">
          Conectamos tecnologia, educação, saúde, automação e inovação para transformar o futuro.
        </p>
        <a
          href="#sobre"
          className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full transition text-lg font-semibold shadow-lg"
        >
          Saiba mais
        </a>
      </div>
    </main>
  );
}

