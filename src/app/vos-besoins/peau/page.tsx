'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Peau() {
  const besoins = [
    {
      titre: 'Rougeurs / Couperose / Vaisseaux apparents',
      description: 'Traitement des rougeurs diffuses et des vaisseaux visibles.',
      solutions: [
        'Laser vasculaire'
      ],
      details: 'Nos technologies laser de dernière génération ciblent précisément les vaisseaux sanguins responsables des rougeurs.'
    },
    {
      titre: 'Pores dilatés',
      description: 'Amélioration de la texture cutanée et réduction de la taille des pores.',
      solutions: [
        'Peeling',
        'Microneedling'
      ],
      details: 'Une approche combinée pour resserrer les pores et améliorer la qualité globale de la peau.'
    },
    {
      titre: 'Manque d\'éclat',
      description: 'Revitalisation de la peau pour un teint lumineux et uniforme.',
      solutions: [
        'Peeling doux',
        'Peeling'
      ],
      details: 'Des protocoles personnalisés pour retrouver une peau éclatante et repulpée.'
    },
    {
      titre: 'Pilosité excessive',
      description: 'Épilation durable adaptée à tous les types de peau.',
      solutions: [
        'Épilation laser'
      ],
      details: 'Une gamme complète de technologies pour une épilation efficace et sûre, adaptée à votre type de peau et de pilosité.'
    }
  ];

  const soinSlugMap: Record<string, string> = {
    'Laser vasculaire': '/nos-soins/laser-vasculaire',
    'Peeling': '/nos-soins/peelings',
    'Peeling doux': '/nos-soins/peelings',
    'Microneedling avec radiofréquence': '/nos-soins/microneedling-radiofrequence',
    'Épilation laser': '/nos-soins/epilation-laser'
  };

  const soinsDisponibles = [
    'Laser vasculaire',
    'Peeling',
    'Peeling doux',
    'Microneedling avec radiofréquence',
    'Épilation laser',
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/peau-glow.png"
            alt="Soins de la peau"
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
            Soins de la Peau
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Des solutions avancées pour une peau saine et rayonnante
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
                <p className="text-neutral-600 mb-4 text-lg">{besoin.description}</p>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-neutral-800 mb-2">Nos solutions :</p>
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
                  <p className="text-sm text-neutral-500 italic">{besoin.details}</p>
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