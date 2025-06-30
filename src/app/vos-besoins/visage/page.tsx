'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Visage() {
  const besoins = [
    {
      titre: 'Rides d\'expression',
      description: 'Atténuation des rides du front, de la patte d\'oie et des rides du lion.',
      solutions: ['Injections de toxine botulique', 'Peeling', 'Microneedling avec radiofréquence', 'HIFU']
    },
    {
      titre: 'Cernes',
      description: 'Traitement des cernes creux et de la vallée des larmes.',
      solutions: ['Injections d\'acide hyaluronique']
    },
    {
      titre: 'Lèvres',
      description: 'Redéfinition du contour et augmentation du volume des lèvres.',
      solutions: ['Injections d\'acide hyaluronique']
    },
    {
      titre: 'Perte de volume',
      description: 'Restauration des volumes du visage pour un effet rajeunissant naturel.',
      solutions: ['Injections d\'acide hyaluronique', 'HIFU']
    },
    {
      titre: 'Nez bosselé ou tombant',
      description: 'Correction non chirurgicale du profil nasal.',
      solutions: ['Injections d\'acide hyaluronique']
    },
    {
      titre: 'Peau terne / Texture irrégulière',
      description: 'Amélioration de l\'éclat et de la texture cutanée.',
      solutions: ['Peeling', 'Microneedling avec radiofréquence']
    },
    {
      titre: 'Cicatrices d\'acné',
      description: 'Atténuation des cicatrices et amélioration de la texture cutanée.',
      solutions: ['Microneedling avec radiofréquence', 'Peeling', 'Laser fractionné']
    },
    {
      titre: 'Taches pigmentaires',
      description: 'Traitement des taches brunes et de l\'hyperpigmentation.',
      solutions: ['Peeling dépigmentant', 'Peeling']
    },
    {
      titre: 'Relâchement cutané',
      description: 'Raffermissement de la peau et amélioration de l\'ovale du visage.',
      solutions: ['HIFU']
    }
  ];

  const soinSlugMap: Record<string, string> = {
    'Injections de toxine botulique': '/nos-soins/botox',
    'Peeling': '/nos-soins/peelings',
    'Microneedling avec radiofréquence': '/nos-soins/microneedling-radiofrequence',
    'HIFU': '/nos-soins/hifu',
    'Injections d\'acide hyaluronique': '/nos-soins/acide-hyaluronique',
    'Laser fractionné': '/nos-soins/laser-fractionne',
    'Peeling dépigmentant': '/nos-soins/peelings'
  };

  const soinsDisponibles = [
    'Injections de toxine botulique',
    'Peeling',
    'Microneedling avec radiofréquence',
    'HIFU',
    'Injections d\'acide hyaluronique',
    'Peeling dépigmentant',
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/visage-glow.png"
            alt="Soins du visage"
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
            Soins du Visage
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Des solutions personnalisées pour sublimer votre visage et préserver votre jeunesse naturellement
          </motion.p>
        </div>
      </section>

      {/* Besoins Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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