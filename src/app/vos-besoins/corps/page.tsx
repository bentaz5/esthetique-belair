'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Corps() {
  const besoins = [
    {
      titre: 'Relâchement abdominal / fessier / cuisses',
      description: 'Raffermissement et tonification des zones relâchées.',
      solutions: [
        'EMSlim NEO avec radiofréquence'
      ]
    },
    {
      titre: 'Muscles peu toniques',
      description: 'Renforcement musculaire et amélioration de la silhouette.',
      solutions: [
        'EMSlim NEO avec radiofréquence - équivalent à 20,000 contractions en 30 minutes',
      ]
    },
    {
      titre: 'Incontinence urinaire légère',
      description: 'Renforcement du plancher pelvien pour une meilleure qualité de vie.',
      solutions: [
        'Coussin pelvien'
      ]
    },
    {
      titre: 'Transpiration excessive',
      description: 'Traitement de l\'hyperhidrose des aisselles, mains et pieds.',
      solutions: [
        'Botox pour transpiration excessive'
      ]
    }
  ];

  const soinSlugMap: Record<string, string> = {
    'EMSlim NEO avec radiofréquence': '/nos-soins/emslim-neo',
    'EMSlim NEO avec radiofréquence - équivalent à 20,000 contractions en 30 minutes': '/nos-soins/emslim-neo',
    'Coussin pelvien': '/nos-soins/coussin-pelvien',
    'Botox pour transpiration excessive': '/nos-soins/botox-hyperhidrose'
  };

  const soinsDisponibles = [
    'EMSlim NEO avec radiofréquence',
    'EMSlim NEO avec radiofréquence - équivalent à 20,000 contractions en 30 minutes',
    'Coussin pelvien',
    'Botox pour transpiration excessive',
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/corps-mesure.png"
            alt="Soins du corps"
            fill
            className="object-cover object-center brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
        </div>
        
        <div className="container-custom relative z-10 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif mb-6"
          >
            Soins du Corps
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Des traitements innovants pour sculpter et tonifier votre silhouette
          </motion.p>
        </div>
      </section>

      {/* Besoins Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {besoins.map((besoin, index) => (
              <motion.div
                key={besoin.titre}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-2xl font-serif mb-4 text-primary">{besoin.titre}</h3>
                <p className="text-neutral-600 mb-6 text-lg">{besoin.description}</p>
                <div className="space-y-3">
                  <p className="font-medium text-neutral-800">Nos solutions :</p>
                  <ul className="flex flex-wrap gap-2 mt-2">
                    {besoin.solutions.filter(solution => soinsDisponibles.includes(solution)).map((solution) => (
                      <li key={solution}>
                        <a
                          href={soinSlugMap[solution] || '#'}
                          className="inline-flex items-center px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg font-medium transition group"
                        >
                          {solution}
                          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 