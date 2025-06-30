'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface SoinItem {
  name: string;
  description: string;
  detailItems?: { 
    title: string; 
    description: string; 
    intensity: string 
  }[];
  type?: string;
  slug?: string;
  image: string;
}

interface SoinCategory {
  subtitle: string;
  description: string;
  items: SoinItem[];
}

interface SoinSection {
  title: string;
  description: string;
  categories: SoinCategory[];
}

export default function NosSoins() {
  const services: SoinSection[] = [
    {
      title: 'Soins du Visage',
      description: 'Des solutions personnalisées pour sublimer votre visage et préserver votre jeunesse naturellement.',
      categories: [
        {
          subtitle: 'Microneedling',
          description: 'Stimulation naturelle du collagène',
          items: [
            {
              name: 'Microneedling avec radiofréquence',
              description: 'Stimulation optimale du collagène pour un effet raffermissant puissant',
              slug: 'microneedling-radiofrequence',
              image: '/images/soins/microneedling.png'
            }
          ]
        },
        {
          subtitle: 'Injections',
          description: 'Traitements ciblés pour des résultats naturels',
          items: [
            {
              name: 'Acide hyaluronique',
              description: 'Pour les lèvres, cernes, sillons nasogéniens et remodelage du nez',
              slug: 'acide-hyaluronique',
              image: '/images/soins/acide-hyaluronique.png'
            },
            {
              name: 'Botox',
              description: 'Traitement des rides du front, rides du lion, pattes d\'oie et hyperhidrose',
              slug: 'botox',
              image: '/images/soins/botox.png'
            }
          ]
        },
        {
          subtitle: 'HIFU',
          description: 'Technologie de pointe non-invasive',
          items: [
            {
              name: 'Ultrasons focalisés',
              description: 'Raffermissement profond sans chirurgie',
              slug: 'hifu',
              image: '/images/soins/hifu.png'
            }
          ]
        },
        {
          subtitle: 'Peelings',
          description: 'Différentes intensités pour répondre à vos besoins spécifiques',
          items: [
            {
              name: 'Peelings Médicaux',
              description: 'Une gamme complète de peelings adaptés à vos besoins :',
              detailItems: [
                { 
                  title: 'Acide glycolique', 
                  description: 'Amélioration texture et éclat', 
                  intensity: 'Moyen/Superficiel'
                },
                { 
                  title: 'TCA', 
                  description: 'Renouvellement cutané profond', 
                  intensity: 'Moyen/Fort'
                },
                { 
                  title: 'Dépigmentant', 
                  description: 'Solution spécifique pour les taches', 
                  intensity: 'Variable'
                }
              ],
              slug: 'peelings',
              image: '/images/soins/peeling-medical.png'
            }
          ]
        }
      ]
    },
    {
      title: 'Soins du Corps',
      description: 'Des traitements innovants pour sculpter et tonifier votre silhouette.',
      categories: [
        {
          subtitle: 'Remodelage / Bien-être',
          description: 'Solutions high-tech pour des résultats visibles',
          items: [
            {
              name: 'Radiofréquence EMSlim',
              description: 'Tonification musculaire et réduction de la masse graisseuse',
              image: '/images/soins/radiofrequence-emslim.png',
              slug: 'emslim-neo'
            },
            {
              name: 'Coussin pelvien',
              description: 'Renforcement efficace du périnée et traitement des fuites urinaires légères',
              slug: 'coussin-pelvien',
              image: '/images/soins/coussin-pelvien.png'
            }
          ]
        },
        {
          subtitle: 'Nutrition',
          description: 'Accompagnement personnalisé pour votre santé',
          items: [
            // SUPPRIMÉ : Suivi nutritionnel
          ]
        },
        {
          subtitle: 'Transpiration excessive',
          description: 'Traitement de l\'hyperhidrose (transpiration excessive) par injections de Botox',
          items: [
            {
              name: 'Botox pour transpiration excessive',
              description: 'Injections de toxine botulique pour réduire la transpiration des aisselles, mains ou pieds',
              slug: 'botox-hyperhidrose',
              image: '/images/soins/injection-botox-aisselles.png'
            }
          ]
        }
      ]
    },
    {
      title: 'Soins au Laser',
      description: 'Technologies laser de dernière génération pour des résultats optimaux.',
      categories: [
        {
          subtitle: 'Épilation durable',
          description: 'Solutions adaptées à tous les types de peau',
          items: [
            {
              name: 'Épilation définitive au Laser Diode',
              description: 'Technologie de dernière génération pour une élimination efficace et durable des poils',
              slug: 'epilation-laser',
              image: '/images/soins/epilation-laser.png'
            }
          ]
        },
        {
          subtitle: 'Traitement vasculaire',
          description: 'Élimination ciblée des imperfections',
          items: [
            {
              name: 'Laser vasculaire',
              description: 'Traitement efficace des rougeurs et vaisseaux apparents',
              slug: 'laser-vasculaire',
              image: '/images/soins/laser-vasculaire.png'
            }
          ]
        },
        {
          subtitle: 'Photoréjuvénation',
          description: 'Retrouvez l\'éclat de votre peau',
          items: [
            // SUPPRIMÉ : Traitement global
          ]
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-neutral-50">
      <div className="sticky top-0 z-50 bg-white shadow-sm">
        <Navigation />
      </div>
      
      <div className="sticky top-[64px] z-40">
        {/* Bannière d'information */}
        <div className="bg-primary/15 backdrop-blur-md">
          <div className="container-custom px-4 md:px-6 pt-5 pb-3">
            <div className="flex items-center justify-center text-center">
              <div className="inline-flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <p className="text-sm md:text-base font-medium text-neutral-800">
                  Tous nos soins sont réalisés par des médecins spécialisés en esthétique, à l'exception de l'épilation laser
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-neutral-50">
        <div className="container-custom px-4 md:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-center mb-6 md:mb-8"
          >
            Nos Soins
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-neutral-600 text-center max-w-3xl mx-auto px-4 md:px-0"
          >
            Découvrez notre gamme complète de soins médicaux esthétiques, conçus pour répondre à vos besoins spécifiques avec expertise et sécurité.
          </motion.p>
        </div>
      </section>

      {/* Sections de Soins */}
      {services.map((service, serviceIndex) => (
        <section key={service.title} className="py-12 md:py-16">
          <div className="container-custom px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-8 md:mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-serif text-center mb-4">{service.title}</h2>
              <p className="text-neutral-600 text-center max-w-3xl mx-auto">{service.description}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.categories.flatMap((category, categoryIndex) =>
                category.items.map((treatment, index) => (
                  <Link href={`/nos-soins/${treatment.slug}`} key={treatment.slug}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={treatment.image}
                          alt={treatment.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="p-6">
                        <div className="text-base sm:text-lg font-medium text-primary mb-2">
                          {category.subtitle}
                        </div>
                        <h3 className="text-xl font-medium text-neutral-800 mb-3 group-hover:text-primary transition-colors">
                          {treatment.name}
                        </h3>
                        {treatment.type && (
                          <div className="text-sm text-primary-600 mb-2">{treatment.type}</div>
                        )}
                        <p className="text-neutral-600">{treatment.description}</p>
                        
                        {treatment.detailItems && (
                          <div className="mt-4 grid grid-cols-1 gap-3">
                            {treatment.detailItems.map((item, idx) => (
                              <div key={idx} className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-3 border border-primary/10">
                                <div className="flex justify-between items-center mb-1">
                                  <span className="font-medium text-primary">Peeling {item.title}</span>
                                  <span className="bg-white text-xs px-2 py-1 rounded text-primary/80">{item.intensity}</span>
                                </div>
                                <p className="text-sm text-neutral-600">{item.description}</p>
                              </div>
                            ))}
                          </div>
                        )}
                        
                        <div className="mt-4 text-primary text-sm font-medium group-hover:translate-x-2 transition-transform">
                          En savoir plus →
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))
              )}
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </main>
  );
} 