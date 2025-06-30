'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RendezVousModal from '@/components/RendezVousModal';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import Metadata from '@/components/Metadata';

export default function LeCentre() {
  const [current, setCurrent] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const images = [
    '/images/centre-bel-air.png',
    '/images/centre-bel-air-2.png',
    '/images/centre-bel-air-3.png',
  ];

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const equipe = [
    {
      nom: 'Dr Jean Luc Haziza',
      role: 'Dermatologue',
      description: 'Spécialiste en dermatologie esthétique avec plus de 35 ans d\'expérience.'
    },
    {
      nom: 'Dr Joyce Sillam',
      role: 'Médecin généraliste',
      description: 'Spécialisée en nutrition, accompagnement personnalisé et suivi médical.'
    },
    {
      nom: 'Salome',
      role: 'Esthéticienne spécialisée laser',
      description: 'Experte en traitements laser esthétiques et soins de la peau.'
    }
  ];

  return (
    <main className="min-h-screen">
      <Metadata 
        title="Le Centre | Centre médical esthétique à Paris Nation"
        description="Découvrez notre centre de médecine esthétique à Paris Nation. Une équipe de professionnels qualifiés et des équipements de pointe pour vos soins esthétiques."
        image="https://www.esthetique-belair.fr/images/centre-bel-air.png"
        url="https://www.esthetique-belair.fr/le-centre"
      />
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-neutral-50">
          <div className="container-custom">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-serif text-center mb-12"
            >
              Le Centre Esthétique Bel-Air
            </motion.h1>
            
            <div className="max-w-5xl mx-auto text-center mb-16">
              <p className="text-lg text-neutral-600">
                Le Centre Esthétique Bel-Air réunit dermatologue, médecin esthétique et personnel qualifié 
                autour d'une mission : sublimer votre peau avec exigence et sécurité. Installé à Paris Nation, 
                notre centre vous reçoit dans un cadre médical équipé des dernières technologies.
              </p>
            </div>
            
            <div className="aspect-[100/65] relative rounded-lg overflow-hidden mb-16 max-w-5xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={images[current]}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[current]}
                    alt={`Centre Esthétique Bel-Air - intérieur ${current + 1}`}
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
              {/* Navigation boutons */}
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow z-10"
                aria-label="Image précédente"
              >
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow z-10"
                aria-label="Image suivante"
              >
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
              {/* Points de pagination */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${current === idx ? 'bg-primary w-6' : 'bg-primary/30'}`}
                    aria-label={`Aller à l'image ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Notre Approche */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-serif text-center mb-12">Notre Approche</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-neutral-50 p-8 rounded-lg"
              >
                <h3 className="text-xl font-serif mb-4">Expertise Médicale</h3>
                <p className="text-neutral-600">
                  Notre équipe est composée de professionnels de santé qualifiés, 
                  formés aux dernières techniques et technologies en médecine esthétique.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-neutral-50 p-8 rounded-lg"
              >
                <h3 className="text-xl font-serif mb-4">Personnalisation</h3>
                <p className="text-neutral-600">
                  Chaque traitement est adapté à vos besoins spécifiques, 
                  après une consultation approfondie et une analyse de votre peau.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-neutral-50 p-8 rounded-lg"
              >
                <h3 className="text-xl font-serif mb-4">Résultats Naturels</h3>
                <p className="text-neutral-600">
                  Notre objectif est d'obtenir des résultats naturels qui mettent en valeur 
                  votre beauté sans dénaturer vos traits.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Notre Équipe */}
        <section className="py-20 bg-neutral-50">
          <div className="container-custom">
            <h2 className="text-3xl font-serif text-center mb-12">Notre Équipe</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {equipe.map((membre, index) => (
                <motion.div
                  key={membre.nom}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-lg shadow-sm text-center"
                >
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-neutral-200 flex items-center justify-center">
                    <span className="text-neutral-400">Photo</span>
                  </div>
                  <h3 className="text-xl font-serif mb-1">{membre.nom}</h3>
                  <p className="text-primary mb-4">{membre.role}</p>
                  <p className="text-neutral-600">{membre.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Localisation */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-serif text-center mb-12">Notre Localisation</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-xl font-serif mb-4">Centre Esthétique Bel-Air</h3>
                <address className="not-italic mb-6">
                  <p>22 avenue du Bel-Air</p>
                  <p>75012 Paris</p>
                  <p className="mt-2">
                    <a href="tel:+33123456789" className="text-primary hover:underline">
                      +33 1 43 45 11 92
                    </a>
                  </p>
                  <p>
                    <a href="mailto:contact@centre-esthetique-belair.fr" className="text-primary hover:underline">
                      contact@centre-esthetique-belair.fr
                    </a>
                  </p>
                </address>
                
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Horaires d'ouverture :</h4>
                  <p>Lundi - Vendredi : 10h - 20h</p>
                  <p>Samedi : Fermé</p>
                  <p>Dimanche : Fermé</p>
                </div>
                <button
                  onClick={e => { console.log('click bouton centre', e.target); e.preventDefault(); e.stopPropagation(); setShowModal(true); }}
                  className="btn-primary inline-block"
                  aria-label="Prendre rendez-vous au centre esthétique Bel-Air"
                >
                  Prendre rendez-vous
                </button>
              </div>
              
              <div className="aspect-video bg-neutral-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.1563627754736!2d2.3949739!3d48.8469097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e673fae5e7962b%3A0xfd3e299ccf241850!2sCentre%20Esth%C3%A9tique%20Bel%20Air!5e0!3m2!1sfr!2sfr!4v1710351161099!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      {/* CTA Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Découvrez notre centre</h2>
            <p className="text-lg text-neutral-600 mb-8">
              Prenez rendez-vous pour une consultation personnalisée
            </p>
            <button
              onClick={e => { console.log('click bouton centre', e.target); e.preventDefault(); e.stopPropagation(); setShowModal(true); }}
              className="btn-primary text-base md:text-lg inline-flex items-center space-x-2 group relative overflow-hidden"
            >
              <CalendarDaysIcon className="h-5 w-5 md:h-6 md:w-6" />
              <span>Prendre rendez-vous</span>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-black/20 to-white/20 transition-all duration-500 ease-out group-hover:w-full" />
            </button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Modal */}
      <RendezVousModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </main>
  );
} 