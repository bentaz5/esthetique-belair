'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import clsx from 'clsx';
import RendezVousModal from '@/components/RendezVousModal';
import Metadata from '@/components/Metadata';

type Soin = {
  nom: string;
  image: string;
  tag?: string;
};

type Besoin = {
  titre: string;
  description: string;
  soins: Soin[];
};

// Ajout d'un utilitaire pour détecter le desktop
const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768;

export default function Home() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [dragStart, setDragStart] = React.useState(0);
  const [dragPosition, setDragPosition] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);
  const sliderRef = React.useRef<HTMLDivElement>(null);
  const [sliderWidth, setSliderWidth] = React.useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showCTA, setShowCTA] = useState(false);

  // Désactive le drag sur mobile
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDesktop) return;
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    setDragStart(clientX);
    setDragPosition(0);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDesktop || !isDragging) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const difference = clientX - dragStart;
    setDragPosition(difference);
  };

  const handleDragEnd = () => {
    if (!isDesktop || !isDragging) return;
    setIsDragging(false);
    if (Math.abs(dragPosition) > 100) {
      if (dragPosition > 0 && activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
      } else if (dragPosition < 0 && activeIndex < services.length - 1) {
        setActiveIndex(activeIndex + 1);
      }
    }
    setDragPosition(0);
  };

  React.useEffect(() => {
    const updateWidth = () => {
      if (sliderRef.current) {
        setSliderWidth(sliderRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const services = [
    {
      title: 'Soins du Visage',
      categories: [
        {
          subtitle: 'Peelings',
          items: [
            'Moyen / Superficiel : Peeling à l\'acide glycolique',
            'Moyen / Fort : Peeling TCA (acide trichloracétique)',
            'Dépigmentant : Peeling ciblé pour les taches pigmentaires',
          ]
        },
        {
          subtitle: 'Microneedling avec radiofréquence',
          items: [
            'Microneedling avec radiofréquence (stimulation optimale du collagène)'
          ]
        },
        {
          subtitle: 'Injections',
          items: [
            'Acide hyaluronique (lèvres, cernes, sillons, nez)',
            'Botox (front, rides du lion, pattes d\'oie, transpiration excessive)'
          ]
        },
        {
          subtitle: 'HIFU',
          items: [
            'Ultrasons focalisés pour le raffermissement'
          ]
        }
      ]
    },
    {
      title: 'Soins du Corps',
      categories: [
        {
          subtitle: 'Remodelage / Bien-être',
          items: [
            'EMSlim NEO avec radiofréquence : Tonification par ondes électromagnétiques',
            'Coussin pelvien : Renforcement du périnée et traitement des fuites urinaires'
          ]
        },
        {
          subtitle: 'Nutrition',
          items: [
            'Suivi personnalisé pour adultes, enfants, sportifs'
          ]
        }
      ]
    },
    {
      title: 'Soins au Laser',
      categories: [
        {
          subtitle: 'Épilation durable',
          items: [
            'Lasers : Diode, Alexandrite, YAG, Lumière pulsée'
          ]
        },
        {
          subtitle: 'Traitement vasculaire',
          items: [
            'Laser pour rougeurs et vaisseaux apparents'
          ]
        },
        {
          subtitle: 'Photoréjuvénation',
          items: [
            'Amélioration du grain et de l\'éclat de peau'
          ]
        }
      ]
    }
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % services.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    const timer = setTimeout(() => setShowCTA(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Section Vos besoins, notre expertise
  const besoinsExpertise: Besoin[] = [
    {
      titre: "Rides du front",
      description: "Lissez les rides d'expression du haut du visage.",
      soins: [
        {
          nom: "Botox",
          image: "/images/soins/botox.png",
          tag: "Injections"
        }
      ]
    },
    {
      titre: "Taches pigmentaires",
      description: "Unifiez le teint et réduisez les taches brunes.",
      soins: [
        {
          nom: "Peeling dépigmentant",
          image: "/images/soins/peeling-medical.png",
          tag: "Peeling"
        },
        {
          nom: "Laser pigmentaire",
          image: "/images/soins/laser-vasculaire.jpg",
          tag: "Laser"
        }
      ]
    },
    {
      titre: "Cernes",
      description: "Rafraîchissez votre regard et atténuez les zones sombres.",
      soins: [
        {
          nom: "Acide hyaluronique pour les cernes",
          image: "/images/soins/acide-hyaluronique.png",
          tag: "Injections"
        }
      ]
    },
    {
      titre: "Relâchement cutané visage",
      description: "Redessinez l'ovale du visage sans chirurgie.",
      soins: [
        {
          nom: "HIFU",
          image: "/images/soins/hifu.png",
          tag: "Technologie"
        },
        {
          nom: "Microneedling avec radiofréquence",
          image: "/images/soins/microneedling.png",
          tag: "Technologie"
        }
      ]
    },
    {
      titre: "Cicatrices d'acné",
      description: "Lissez le grain de peau et atténuez les marques visibles.",
      soins: [
        {
          nom: "Microneedling avec radiofréquence",
          image: "/images/soins/microneedling.png",
          tag: "Technologie"
        },
        {
          nom: "Peeling moyen",
          image: "/images/soins/peeling-medical.png",
          tag: "Peeling"
        }
      ]
    },
    {
      titre: "Transpiration excessive",
      description: "Retrouvez confort et confiance au quotidien.",
      soins: [
        {
          nom: "Botox hyperhidrose",
          image: "/images/soins/botox.png",
          tag: "Injections"
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen">
      <Metadata />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[90vh] md:h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-banner-visage.png"
            alt="Centre Esthétique Bel-Air"
            fill
            className="object-cover object-[80%_center]"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            quality={75}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/30" />
        </div>
        
        <div className="container-custom relative z-10 text-center text-white px-4 md:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif mb-4 md:mb-6 transition-opacity duration-700 opacity-100">
            La beauté est un art.<br />
            Nous maîtrisons sa science.
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 font-serif transition-opacity duration-700 opacity-100">
            Centre Esthétique Bel Air
          </p>
          
          <div className="relative inline-block">
            {showCTA && (
              <div className="mt-8 transition-opacity duration-700 opacity-100">
                <button
                  onClick={e => { console.log('click bouton accueil', e.target); e.preventDefault(); e.stopPropagation(); setShowModal(true); }}
                  className="btn-primary text-sm md:text-base inline-flex items-center space-x-2 group relative overflow-hidden"
                  aria-label="Prendre rendez-vous au centre esthétique Bel-Air"
                  style={{ zIndex: 1000, position: 'relative' }}
                >
                  <svg className="h-4 w-4 md:h-5 md:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10m-9 4h6m-7 8h8a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  <span>Prendre rendez-vous</span>
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-black/20 to-white/20 transition-all duration-500 ease-out group-hover:w-full" />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Vos Besoins Section */}
      <section className="py-12 md:py-20 bg-neutral-50">
        <div className="container-custom px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 text-neutral-900 transition-opacity duration-700 opacity-100">Vos Besoins</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* VISAGE */}
            <Link
              href="/vos-besoins/visage"
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-primary/40 flex flex-col"
              style={{ minHeight: 320 }}
            >
              <div className="relative w-full h-48">
                <Image
                  src="/images/peau-glow.png"
                  alt="Soins du visage"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              <div className="flex-1 flex flex-col justify-center p-8">
                <h2 className="text-3xl font-serif mb-4 text-neutral-900 group-hover:text-primary transition-colors duration-300">Visage</h2>
                <p className="text-lg text-neutral-700 mb-6">Des solutions pour rajeunir, redensifier et harmoniser votre visage.</p>
                <div className="grid grid-cols-1 gap-2 mb-6">
                  {['Rides d\'expression','Cernes','Lèvres','Perte de volume','Nez bosselé ou tombant','Peau terne / Texture irrégulière','Cicatrices d\'acné','Taches pigmentaires','Relâchement cutané'].map((item, i) => (
                    <div key={i} className="bg-neutral-50 rounded-lg p-3 border border-neutral-200 hover:border-primary/30 transition-colors text-sm text-neutral-800 font-medium">
                      {item}
                    </div>
                  ))}
                </div>
                <span className="inline-block text-primary font-medium text-base border-b-2 border-primary/30 pb-1 transition-all group-hover:border-primary group-hover:pl-2 group-hover:pr-2">
                  Découvrir
                  <span className="inline-block ml-2 align-middle transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
            {/* CORPS */}
            <Link
              href="/vos-besoins/corps"
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-primary/40 flex flex-col"
              style={{ minHeight: 320 }}
            >
              <div className="relative w-full h-48">
                <Image
                  src="/images/corps-mesure.png"
                  alt="Soins du corps"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              <div className="flex-1 flex flex-col justify-center p-8">
                <h2 className="text-3xl font-serif mb-4 text-neutral-900 group-hover:text-primary transition-colors duration-300">Corps</h2>
                <p className="text-lg text-neutral-700 mb-6">Traitements pour sculpter, raffermir et harmoniser votre silhouette.</p>
                <div className="grid grid-cols-1 gap-2 mb-6">
                  {['Relâchement abdominal / fessier / cuisses','Muscles peu toniques','Incontinence urinaire légère','Transpiration excessive (aisselles, mains, pieds)'].map((item, i) => (
                    <div key={i} className="bg-neutral-50 rounded-lg p-3 border border-neutral-200 hover:border-primary/30 transition-colors text-sm text-neutral-800 font-medium">
                      {item}
                    </div>
                  ))}
                </div>
                <span className="inline-block text-primary font-medium text-base border-b-2 border-primary/30 pb-1 transition-all group-hover:border-primary group-hover:pl-2 group-hover:pr-2">
                  Découvrir
                  <span className="inline-block ml-2 align-middle transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
            {/* PEAU */}
            <Link
              href="/vos-besoins/peau"
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-primary/40 flex flex-col"
              style={{ minHeight: 320 }}
            >
              <div className="relative w-full h-48">
                <Image
                  src="/images/visage-glow.png"
                  alt="Soins de la peau"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              <div className="flex-1 flex flex-col justify-center p-8">
                <h2 className="text-3xl font-serif mb-4 text-neutral-900 group-hover:text-primary transition-colors duration-300">Peau</h2>
                <p className="text-lg text-neutral-700 mb-6">Soins pour améliorer la texture, l'éclat et la santé de votre peau.</p>
                <div className="grid grid-cols-1 gap-2 mb-6">
                  {['Rougeurs / Couperose / Vaisseaux apparents','Pores dilatés','Manque d\'éclat','Pilosité excessive'].map((item, i) => (
                    <div key={i} className="bg-neutral-50 rounded-lg p-3 border border-neutral-200 hover:border-primary/30 transition-colors text-sm text-neutral-800 font-medium">
                      {item}
                    </div>
                  ))}
                </div>
                <span className="inline-block text-primary font-medium text-base border-b-2 border-primary/30 pb-1 transition-all group-hover:border-primary group-hover:pl-2 group-hover:pr-2">
                  Découvrir
                  <span className="inline-block ml-2 align-middle transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Nos Soins Section */}
      <section className="py-16 px-4 md:px-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 text-neutral-900 transition-opacity duration-700 opacity-100">Nos Soins</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Microneedling */}
            <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-primary/40">
              <Link href="/nos-soins/microneedling" className="block h-full">
                <div className="relative h-64">
                  <Image
                    src="/images/soins/microneedling.png"
                    alt="Microneedling avec radiofréquence"
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    quality={100}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10 opacity-80 group-hover:opacity-90 transition-opacity duration-700" />
                  <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                    <h3 className="text-2xl font-serif text-white mb-2">Microneedling avec radiofréquence</h3>
                    <p className="text-white/80 mb-4 text-sm">Stimulation optimale du collagène pour un effet raffermissant puissant.</p>
                    <span className="inline-block text-primary bg-white/80 rounded-full px-4 py-1 text-sm font-medium shadow hover:bg-white transition">Découvrir</span>
                  </div>
                </div>
              </Link>
            </div>
            {/* Botox */}
            <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-primary/40">
              <Link href="/nos-soins/botox" className="block h-full">
                <div className="relative h-64">
                  <Image
                    src="/images/soins/botox.png"
                    alt="Injection Botox"
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    quality={100}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10 opacity-80 group-hover:opacity-90 transition-opacity duration-700" />
                  <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                    <h3 className="text-2xl font-serif text-white mb-2">Botox</h3>
                    <p className="text-white/80 mb-4 text-sm">Traitement des rides du front, rides du lion, pattes d'oie et hyperhidrose.</p>
                    <span className="inline-block text-primary bg-white/80 rounded-full px-4 py-1 text-sm font-medium shadow hover:bg-white transition">Découvrir</span>
                  </div>
                </div>
              </Link>
            </div>
            {/* Peelings */}
            <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-primary/40">
              <Link href="/nos-soins/peelings" className="block h-full">
                <div className="relative h-64">
                  <Image
                    src="/images/soins/peeling-medical.png"
                    alt="Peelings médicaux"
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    quality={100}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10 opacity-80 group-hover:opacity-90 transition-opacity duration-700" />
                  <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                    <h3 className="text-2xl font-serif text-white mb-2">Peelings</h3>
                    <p className="text-white/80 mb-4 text-sm">Peelings adaptés à vos besoins : glycolique, TCA, dépigmentant.</p>
                    <span className="inline-block text-primary bg-white/80 rounded-full px-4 py-1 text-sm font-medium shadow hover:bg-white transition">Découvrir</span>
                  </div>
                </div>
              </Link>
            </div>
            {/* HIFU */}
            <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-primary/40">
              <Link href="/nos-soins/hifu" className="block h-full">
                <div className="relative h-64">
                  <Image
                    src="/images/soins/hifu.png"
                    alt="HIFU"
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    quality={100}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10 opacity-80 group-hover:opacity-90 transition-opacity duration-700" />
                  <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                    <h3 className="text-2xl font-serif text-white mb-2">HIFU</h3>
                    <p className="text-white/80 mb-4 text-sm">Raffermissement profond sans chirurgie, technologie de pointe non-invasive.</p>
                    <span className="inline-block text-primary bg-white/80 rounded-full px-4 py-1 text-sm font-medium shadow hover:bg-white transition">Découvrir</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <Link href="/nos-soins" className="btn-primary text-base md:text-lg inline-flex items-center space-x-2 group">
              <span>Découvrir plus de soins</span>
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Témoignages Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 text-neutral-900 transition-opacity duration-700 opacity-100">Témoignages</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                text: "J'avais toujours été complexée par mes lèvres fines. Grâce aux injections d'acide hyaluronique, j'ai enfin un sourire harmonieux sans que cela paraisse artificiel. Merci à toute l'équipe !",
                author: "Hanna D.",
                age: "34 ans",
                treatment: "Injections d'Acide Hyaluronique"
              },
              {
                text: "Transpiration excessive sous les bras depuis toujours… Le Botox a changé ma vie. Plus de gêne en réunion ou en été. Incroyable efficacité.",
                author: "Alexandre B.",
                age: "45 ans",
                treatment: "Injections de Botox"
              },
              {
                text: "J'ai retrouvé une peau lisse et éclatante grâce au microneedling avec radiofréquence. Une vraie cure de jouvence !",
                author: "Sophie L.",
                age: "32 ans",
                treatment: "Microneedling avec Radiofréquence"
              },
              {
                text: "Un effet lifting sans chirurgie ! Mes contours du visage sont plus fermes et le résultat s'améliore au fil des semaines.",
                author: "Valérie C.",
                age: "45 ans",
                treatment: "HIFU"
              },
              {
                text: "J'ai enfin réussi à tonifier mon ventre malgré les heures passées à la salle de sport. Le EMSlim NEO avec radiofréquence est un vrai coup de pouce.",
                author: "Lucie K.",
                age: "33 ans",
                treatment: "EMSlim NEO avec radiofréquence"
              },
              {
                text: "Après des années de rasage, j'ai enfin opté pour l'épilation laser. Ma peau est douce et les poils ne repoussent plus.",
                author: "Sabrina F.",
                age: "26 ans",
                treatment: "Épilation Laser"
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm"
              >
                <div className="text-primary font-medium mb-3">{testimonial.treatment}</div>
                <p className="text-neutral-600 mb-4">{testimonial.text}</p>
                <div className="text-sm text-neutral-500">
                  {testimonial.author}, {testimonial.age}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Le Centre Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-8 text-neutral-900 transition-opacity duration-700 opacity-100">Le Centre Esthétique Bel-Air</h2>
            <p className="text-lg text-neutral-600 mb-8">
              Le Centre Esthétique Bel-Air réunit dermatologue, médecin esthétique et personnel qualifié 
              autour d'une mission : sublimer votre peau avec exigence et sécurité. Installé à Paris Nation, 
              notre centre vous reçoit dans un cadre médical équipé des dernières technologies.
            </p>
            <a href="/le-centre" className="btn-secondary">
              En savoir plus
            </a>
          </div>
        </div>
      </section>

      {/* Notre Localisation */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-neutral-900 transition-opacity duration-700 opacity-100">Notre Localisation</h2>
              
              <div className="space-y-4 text-neutral-600">
                <p className="text-lg">
                  Idéalement situé à Paris Nation, notre centre vous accueille dans un cadre élégant et apaisant.
                </p>
                
                <address className="not-italic space-y-2">
                  <p className="font-medium text-neutral-900">Centre Esthétique Bel-Air</p>
                  <p>22 avenue du Bel-Air</p>
                  <p>75012 Paris</p>
                  <p className="mt-4">
                    <a href="tel:+33123456789" className="text-brand-violet hover:text-brand-pink transition-colors">
                      +33 1 43 45 11 92
                    </a>
                  </p>
                </address>
                
                <div className="mt-6">
                  <h3 className="font-medium text-neutral-900 mb-2">Horaires d'ouverture :</h3>
                  <p>Lundi - Vendredi : 10h - 20h</p>
                  <p>Samedi : Fermé</p>
                  <p>Dimanche : Fermé</p>
                </div>
                
                <div className="mt-8">
                  <button
                    onClick={e => { console.log('click bouton accueil', e.target); e.preventDefault(); e.stopPropagation(); setShowModal(true); }}
                    className="btn-primary inline-flex items-center space-x-2 group relative overflow-hidden"
                    aria-label="Prendre rendez-vous au centre esthétique Bel-Air"
                    style={{ zIndex: 1000, position: 'relative' }}
                  >
                    <CalendarDaysIcon className="h-5 w-5" />
                    <span>Prendre rendez-vous</span>
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-black/20 to-white/20 transition-all duration-500 ease-out group-hover:w-full" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="aspect-video bg-white rounded-lg overflow-hidden shadow-lg">
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

      <Footer />

      {/* Modal */}
      <RendezVousModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </main>
  );
}

// SerenitySlide component
type SerenitySlideProps = {
  besoinsExpertise: Besoin[];
};

const SerenitySlide = ({ besoinsExpertise }: SerenitySlideProps) => {
  // Prépare les groupes de 3
  const groupSize = 3;
  const groups = Array.from({ length: Math.ceil(besoinsExpertise.length / groupSize) }, (_, i) =>
    besoinsExpertise.slice(i * groupSize, (i + 1) * groupSize)
  );
  // Duplique pour la boucle visuelle
  const allGroups = [...groups, ...groups];

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex w-max"
        style={{ whiteSpace: 'nowrap' }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 120 // Défilement encore plus lent
        }}
      >
        {allGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="flex-shrink-0 px-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {group.map((besoin, idx) => (
                <motion.div
                  key={besoin.titre + idx}
                  className="relative rounded-xl overflow-hidden border border-transparent bg-gradient-to-r from-[#4169E1]/30 via-[#8A2BE2]/30 to-[#E066FF]/30 p-[1px]"
                  style={{
                    boxShadow: "0 4px 16px 0 rgba(65, 105, 225, 0.08)"
                  }}
                >
                  <div className="bg-white rounded-xl p-4 flex flex-col h-[308px]">
                    <div className="mb-3">
                      <h3 className="text-lg font-medium mb-1">{besoin.titre}</h3>
                      <p className="text-neutral-600 text-sm line-clamp-2">{besoin.description}</p>
                    </div>
                    <div className="space-y-2 mt-auto">
                      {besoin.soins.map((soin: Soin) => (
                        <div key={soin.nom} className="flex items-center gap-2 bg-neutral-50 rounded-lg p-2">
                          <div className="relative w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src={soin.image}
                              alt={soin.nom}
                              fill
                              className="object-cover object-center"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="font-medium text-neutral-900 text-sm truncate">{soin.nom}</div>
                            {soin.tag && (
                              <span className="inline-block text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-semibold">
                                {soin.tag}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// SectionTitle component
function SectionTitle({ children }: { children: React.ReactNode }) {
  const text = typeof children === 'string' ? children : String(children);
  return (
    <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 text-neutral-900">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {}
        }}
        className="inline-block"
      >
        {text.split('').map((letter, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={{
              hidden: { opacity: 0, y: 20, rotate: 20 },
              visible: {
                opacity: 1,
                y: 0,
                rotate: 0,
                transition: { type: 'spring', damping: 12, stiffness: 200 }
              }
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.div>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="h-0.5 w-24 bg-gradient-to-r from-[#4169E1] via-[#8A2BE2] to-[#E066FF] mx-auto mt-4"
        style={{ transformOrigin: 'left' }}
      />
    </h2>
  );
} 