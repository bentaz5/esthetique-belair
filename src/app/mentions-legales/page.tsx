'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container-custom px-4 md:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-center mb-6"
          >
            Mentions Légales
          </motion.h1>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container-custom px-4 md:px-6">
          <div className="max-w-3xl mx-auto prose prose-neutral">
            <h2 className="text-2xl font-serif mb-6">Éditeur du site</h2>
            <ul className="space-y-2">
              <li><strong>Nom de l'établissement :</strong> Centre Esthétique Bel-Air (marque détenue par la société DRHJL)</li>
              <li><strong>Adresse :</strong> 22 avenue du Bel-Air, 75012 Paris, France</li>
              <li><strong>Téléphone :</strong> 01 43 45 11 92</li>
              <li><strong>Adresse e-mail :</strong> <a href="mailto:contact@esthetique-belair.fr" className="text-primary hover:underline">contact@esthetique-belair.fr</a></li>
              <li><strong>Numéro de SIRET :</strong> 94929176900022</li>
              <li><strong>RCS :</strong> 949 291 769 R.C.S. Paris</li>
              <li><strong>Hébergement du site :</strong> Hostinger</li>
            </ul>
            
            <div className="my-10 border-t border-neutral-200"></div>
            
            <p className="text-sm text-neutral-500 mt-8">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 