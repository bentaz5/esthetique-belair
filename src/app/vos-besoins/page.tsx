'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function VosBesoins() {
  const categories = [
    {
      title: 'Visage',
      image: '/images/peau-glow.png',
      description: 'Solutions pour rajeunir, redensifier et harmoniser votre visage.',
      besoins: [
        { nom: 'Rides & vieillissement', description: 'Atténuation des rides et redensification de la peau' },
        { nom: 'Cicatrices d\'acné', description: 'Amélioration de la texture et de l\'aspect des cicatrices' },
        { nom: 'Taches pigmentaires', description: 'Uniformisation du teint et réduction des taches' },
        { nom: 'Perte de volume', description: 'Restructuration et redensification des zones affaissées' },
        { nom: 'Cernes', description: 'Atténuation des cernes et éclat du regard' }
      ],
      href: '/vos-besoins/visage'
    },
    {
      title: 'Corps',
      image: '/images/corps-mesure.png',
      description: 'Traitements pour sculpter, raffermir et harmoniser votre silhouette.',
      besoins: [
        { nom: 'Tonification', description: 'Raffermissement et tonification des zones relâchées' },
        { nom: 'Cellulite', description: 'Réduction de la cellulite et amélioration de la texture cutanée' },
        { nom: 'Transpiration excessive', description: 'Réduction de la transpiration excessive' },
        { nom: 'Incontinence urinaire', description: 'Renforcement du plancher pelvien' }
      ],
      href: '/vos-besoins/corps'
    },
    {
      title: 'Peau',
      image: '/images/visage-glow.png',
      description: 'Soins pour améliorer la texture, l\'éclat et la santé de votre peau.',
      besoins: [
        { nom: 'Relâchement cutané', description: 'Raffermissement et tonification de la peau' },
        { nom: 'Vaisseaux apparents', description: 'Réduction des vaisseaux dilatés et des rougeurs' },
        { nom: 'Acné', description: 'Traitement de l\'acné et prévention des récidives' },
        { nom: 'Peau sensible', description: 'Apaisement et renforcement de la barrière cutanée' }
      ],
      href: '/vos-besoins/peau'
    }
  ];

  return (
    <main className="min-h-screen bg-neutral-50">
      <Navigation />
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center mb-12">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/peau-glow.png"
            alt="Vos besoins esthétiques"
            fill
            className="object-cover object-center brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        </div>
        <div className="container-custom relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif mb-6"
          >
            Vos Besoins
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Chaque personne est unique, et vos besoins esthétiques le sont aussi. Découvrez nos solutions sur-mesure.
          </motion.p>
        </div>
      </section>
      {/* Cards Section */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="flex flex-col gap-12">
            {categories.map((cat, idx) => (
              <motion.a
                href={cat.href}
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-primary/40"
                style={{ minHeight: 320 }}
              >
                <div className="relative md:w-1/2 h-56 md:h-auto">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    quality={100}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
                <div className="flex-1 flex flex-col justify-center p-8 md:p-12">
                  <h2 className="text-3xl md:text-4xl font-serif mb-4 text-neutral-900 group-hover:text-primary transition-colors duration-300">
                    {cat.title}
                  </h2>
                  <p className="text-lg text-neutral-700 mb-6">{cat.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {cat.besoins.map((besoin, i) => (
                      <div key={i} className="bg-neutral-50 rounded-lg p-4 border border-neutral-200 hover:border-primary/30 transition-colors">
                        <div className="font-semibold text-neutral-900 mb-1">{besoin.nom}</div>
                        <div className="text-sm text-neutral-600">{besoin.description}</div>
                      </div>
                    ))}
                  </div>
                  <div>
                    <span className="inline-block text-primary font-medium text-base border-b-2 border-primary/30 pb-1 transition-all group-hover:border-primary group-hover:pl-2 group-hover:pr-2">
                      Découvrir
                      <span className="inline-block ml-2 align-middle transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
} 