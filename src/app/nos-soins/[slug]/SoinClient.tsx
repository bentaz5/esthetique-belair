"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CalendarDaysIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import RendezVousModal from '@/components/RendezVousModal';
import SchemaOrg from '@/components/SchemaOrg';

// Types pour les données des soins
export type Soin = {
  id: string;
  titre: string;
  accroche: string;
  imageHero: string;
  introduction: {
    texte: string;
    pourQui: string;
  };
  avantages: {
    titre: string;
    items: string[];
  }[];
  zonesTraitees: string[];
  deroulement: {
    titre: string;
    etapes: string[];
  };
  resultats: {
    description: string;
    duree: string;
    avantApres?: {
      avant: string;
      apres: string;
    };
  };
  effetsSecondaires: string[];
  contreIndications: string[];
  tarifs: {
    base: number;
    description: string;
  };
  faq: {
    question: string;
    reponse: string;
  }[];
  typesPeelings?: {
    nom: string;
    intensite: string;
    description: string;
    indications: string[];
    prix: number;
  }[];
};

export default function SoinClient({ soin }: { soin: Soin }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <SchemaOrg
        type="MedicalProcedure"
        name={soin.titre}
        description={soin.accroche}
        image={`https://www.esthetique-belair.fr${soin.imageHero}`}
        price={soin.tarifs.base}
        priceSpecification={soin.tarifs.description}
        treatmentIndication={soin.introduction.pourQui}
        bodyLocation={soin.zonesTraitees}
        procedure={soin.deroulement.etapes}
        url={`https://www.esthetique-belair.fr/nos-soins/${soin.id}`}
      />
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center" aria-label="En-tête">
        <div className="absolute inset-0 z-0">
          <Image
            src={soin.imageHero}
            alt={`Illustration du soin ${soin.titre}`}
            fill
            className="object-cover object-center brightness-75"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" aria-hidden="true" />
        </div>
        <div className="container-custom relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif mb-6"
          >
            {soin.titre}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            {soin.accroche}
          </motion.p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="prose prose-lg mx-auto"
            >
              <p className="text-neutral-600 mb-6">{soin.introduction.texte}</p>
              <p className="text-neutral-600">{soin.introduction.pourQui}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Types de Peelings Section - Only for Peelings page */}
      {soin.id === 'peelings' && soin.typesPeelings && (
        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-serif text-center mb-12">Nos types de Peelings</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {soin.typesPeelings.map((peeling, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-br from-neutral-50 to-neutral-100 border border-neutral-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                    >
                      <div className="p-6">
                        <div className="bg-primary/10 rounded-lg inline-block px-3 py-1 text-xs font-medium text-primary mb-4">
                          {peeling.intensite}
                        </div>
                        <h3 className="text-xl font-serif text-primary mb-3">{peeling.nom}</h3>
                        <p className="text-neutral-600 mb-4">{peeling.description}</p>
                        <div className="mt-4">
                          <p className="text-sm font-medium text-neutral-800 mb-2">Idéal pour :</p>
                          <ul className="space-y-2">
                            {peeling.indications.map((indication, idx) => (
                              <li key={idx} className="flex items-center text-sm text-neutral-600">
                                <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                {indication}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="bg-primary/5 p-4 border-t border-neutral-200">
                        <div className="flex justify-between items-center">
                          <span className="text-xs uppercase tracking-wider text-neutral-500">Consultation nécessaire</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Protocole Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-serif text-center mb-12">Protocole</h2>
              <div className="prose prose-lg mx-auto">
                <p className="text-neutral-600 mb-6">{soin.resultats.description}</p>
                <div className="bg-primary/5 rounded-lg p-6">
                  <h3 className="text-xl font-medium text-primary mb-2">Nombre de séances prescrite</h3>
                  <p className="text-neutral-600">{soin.resultats.duree}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Avant / Après avec forçage de type pour supprimer l'erreur */}
{((soin.resultats as any).galerieAvantApres || (soin.resultats as any).avantApres) && (
  <section className="py-8">
    <h2 className="text-3xl font-serif text-center mb-10">Avant / Après</h2>
    <div className="space-y-12">
      
      {/* Test de la galerie via 'as any' */}
      {(soin.resultats as any).galerieAvantApres ? (
        (soin.resultats as any).galerieAvantApres.map((item: any, index: number) => (
          <div key={index} className="space-y-4">
            {item.titre && <h3 className="text-center font-medium text-gray-600 italic">{item.titre}</h3>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <p className="text-sm text-gray-400 uppercase mb-2 font-medium">Avant</p>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                  <Image src={item.avant} alt="Avant" fill className="object-cover" unoptimized />
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-400 uppercase mb-2 font-medium">Après</p>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                  <Image src={item.apres} alt="Après" fill className="object-cover" unoptimized />
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        /* Cas classique (Microneedling etc.) */
        soin.resultats.avantApres && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-sm text-gray-400 uppercase mb-2 font-medium">Avant</p>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <Image src={soin.resultats.avantApres.avant} alt="Avant" fill className="object-cover" unoptimized />
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-400 uppercase mb-2 font-medium">Après</p>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <Image src={soin.resultats.avantApres.apres} alt="Après" fill className="object-cover" unoptimized />
              </div>
            </div>
          </div>
        )
      )}
      
    </div>
  </section>
)}

      {/* Avantages Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-serif text-center mb-12">{soin.avantages[0].titre}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {soin.avantages[0].items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-neutral-600">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Zones Traitées Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-serif text-center mb-12">Zones Traitées</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {soin.zonesTraitees.map((zone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-neutral-600">{zone}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Déroulement Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-serif text-center mb-12">{soin.deroulement.titre}</h2>
              <div className="space-y-6">
                {soin.deroulement.etapes.map((etape, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-medium">{index + 1}</span>
                    </div>
                    <p className="text-neutral-600">{etape}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Effets Secondaires & Contre-indications Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-serif text-center mb-8">Effets Secondaires</h2>
                <ul className="space-y-4">
                  {soin.effetsSecondaires.map((effet, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <p className="text-neutral-600">{effet}</p>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-serif text-center mb-8">Contre-indications</h2>
                <ul className="space-y-4">
                  {soin.contreIndications.map((contreIndication, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                        </svg>
                      </div>
                      <p className="text-neutral-600">{contreIndication}</p>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tarifs Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-2xl md:text-3xl font-serif mb-8">Tarifs</h2>
              {soin.id === 'peelings' ? (
                <div className="space-y-4">
                  <div className="bg-primary/5 rounded-lg p-6">
                    <h3 className="text-xl font-medium text-primary mb-2">Peeling à l'acide glycolique</h3>
                    <p className="text-3xl font-medium text-primary mb-2">180€</p>
                    <p className="text-neutral-600">Amélioration de la texture et de l'éclat de la peau</p>
                  </div>
                  <div className="bg-primary/5 rounded-lg p-6">
                    <h3 className="text-xl font-medium text-primary mb-2">Peeling TCA</h3>
                    <p className="text-3xl font-medium text-primary mb-2">480€</p>
                    <p className="text-neutral-600">Renouvellement cutané profond pour des résultats plus marqués</p>
                  </div>
                  <div className="bg-primary/5 rounded-lg p-6">
                    <h3 className="text-xl font-medium text-primary mb-2">Peeling dépigmentant</h3>
                    <p className="text-3xl font-medium text-primary mb-2">180€</p>
                    <p className="text-neutral-600">Solution spécifique pour les problèmes de pigmentation</p>
                  </div>
                </div>
              ) : soin.id === 'hifu' ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-primary/5 rounded-lg shadow-md overflow-hidden mx-auto">
                    <thead>
                      <tr>
                        <th className="py-3 px-4 text-left text-primary font-semibold">Zone</th>
                        <th className="py-3 px-4 text-left text-primary font-semibold">Tarif</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="py-2 px-4">Ovale du visage</td><td className="py-2 px-4">480€</td></tr>
                      <tr><td className="py-2 px-4">Visage complet</td><td className="py-2 px-4">1080€</td></tr>
                      <tr><td className="py-2 px-4">Cou</td><td className="py-2 px-4">480€</td></tr>
                      <tr><td className="py-2 px-4">Pourtour de la bouche</td><td className="py-2 px-4">360€</td></tr>
                      <tr><td className="py-2 px-4">Paupières et poches malaires</td><td className="py-2 px-4">360€</td></tr>
                      <tr><td className="py-2 px-4">Visage complet + cou</td><td className="py-2 px-4">1320€</td></tr>
                      <tr><td className="py-2 px-4">Zone du corps (ex: bras, ventre, intérieur des cuisses)</td><td className="py-2 px-4">à partir de 960€</td></tr>
                    </tbody>
                  </table>
                  <p className="text-neutral-500 text-sm text-center mt-4">Tarifs donnés à titre indicatif, susceptibles d'être adaptés lors de la consultation selon l'indication et la zone à traiter.</p>
                </div>
              ) : soin.id === 'epilation-laser' ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-primary/5 rounded-lg shadow-md overflow-hidden mx-auto">
                    <thead>
                      <tr>
                        <th className="py-3 px-4 text-left text-primary font-semibold">Zone</th>
                        <th className="py-3 px-4 text-left text-primary font-semibold">Tarif</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="py-2 px-4">Lèvres</td><td className="py-2 px-4">60€</td></tr>
                      <tr><td className="py-2 px-4">Bas du visage</td><td className="py-2 px-4">80€</td></tr>
                      <tr><td className="py-2 px-4">Aisselles</td><td className="py-2 px-4">60€</td></tr>
                      <tr><td className="py-2 px-4">Maillot simple</td><td className="py-2 px-4">50€</td></tr>
                      <tr><td className="py-2 px-4">Maillot échancré</td><td className="py-2 px-4">70€</td></tr>
                      <tr><td className="py-2 px-4">Maillot semi intégral</td><td className="py-2 px-4">80€</td></tr>
                      <tr><td className="py-2 px-4">Maillot intégral</td><td className="py-2 px-4">90€</td></tr>
                      <tr><td className="py-2 px-4">Cuisses</td><td className="py-2 px-4">150€</td></tr>
                      <tr><td className="py-2 px-4">Demi jambes</td><td className="py-2 px-4">130€</td></tr>
                      <tr><td className="py-2 px-4">Jambes complètes</td><td className="py-2 px-4">180€</td></tr>
                      <tr><td className="py-2 px-4">Demi bras</td><td className="py-2 px-4">60€</td></tr>
                      <tr><td className="py-2 px-4">Bras entier</td><td className="py-2 px-4">100€</td></tr>
                      <tr><td className="py-2 px-4">Petites zones</td><td className="py-2 px-4">60€</td></tr>
                    </tbody>
                  </table>
                  <h3 className="text-xl font-semibold text-primary mt-8 mb-2">Forfaits</h3>
                  <table className="min-w-[300px] bg-primary/5 rounded-lg shadow-md overflow-hidden mx-auto">
                    <thead>
                      <tr>
                        <th className="py-3 px-4 text-left text-primary font-semibold">Forfait</th>
                        <th className="py-3 px-4 text-left text-primary font-semibold">Tarif</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="py-2 px-4">Demi jambes + maillot + aisselles</td><td className="py-2 px-4">240€</td></tr>
                      <tr><td className="py-2 px-4">Jambes complètes + maillot + aisselles</td><td className="py-2 px-4">300€</td></tr>
                    </tbody>
                  </table>
                  <p className="text-neutral-500 text-sm text-center mt-4">Tarifs donnés à titre indicatif, susceptibles d'être adaptés lors de la consultation selon l'indication et la zone à traiter.</p>
                </div>
              ) : (
                <div className="bg-primary/5 rounded-lg p-8">
                  <p className="text-3xl font-medium text-primary mb-4">{soin.tarifs.base}€</p>
                  <p className="text-neutral-600">{soin.tarifs.description}</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-serif text-center mb-12">Questions Fréquentes</h2>
              <div className="space-y-6">
                {soin.faq.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-neutral-50 rounded-lg p-6"
                  >
                    <h3 className="text-lg font-medium text-primary mb-3">{item.question}</h3>
                    <p className="text-neutral-600">{item.reponse}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Prêt à commencer ?</h2>
            <p className="text-lg text-neutral-600 mb-8">
              Prenez rendez-vous dès maintenant pour une consultation personnalisée
            </p>
            <button
              onClick={e => { console.log('click bouton soin', e.target); e.preventDefault(); e.stopPropagation(); setShowModal(true); }}
              className="btn-primary text-base md:text-lg inline-flex items-center space-x-2 group relative overflow-hidden"
            >
              <CalendarDaysIcon className="h-5 w-5 md:h-6 md:w-6" />
              <span>Prendre rendez-vous</span>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-black/20 to-white/20 transition-all duration-500 ease-out group-hover:w-full" />
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      <RendezVousModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  )
  ;
  
} 