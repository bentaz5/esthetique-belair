'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RendezVousModal from '@/components/RendezVousModal';

export default function ArticleHIFU() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Article */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/soins/hifu.png"
            alt="HIFU rajeunissement cutané sans chirurgie - Centre Esthétique Bel-Air Paris Nation"
            fill
            className="object-cover object-center brightness-[0.6]"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
        </div>
        <div className="container-custom relative z-10 text-center text-white px-4 md:px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-primary/90 text-white text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 font-medium">
              Médecine Esthétique
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight">
              Le HIFU : Le Secret du Rajeunissement Cutané Sans Chirurgie
            </h1>
            <div className="flex items-center justify-center gap-4 text-white/80 text-sm">
              <span>Par le Dr Hazzia Jean Luc</span>
              <span className="w-1 h-1 rounded-full bg-white/60" />
              <time dateTime="2026-05-17">17 mai 2026</time>
              <span className="w-1 h-1 rounded-full bg-white/60" />
              <span>8 min de lecture</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 md:py-24">
        <div className="container-custom max-w-3xl mx-auto px-4 md:px-6">

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed mb-6">
              Le vieillissement cutané se traduit inévitablement par une perte d&apos;élasticité, un relâchement des tissus et l&apos;apparition de ridules. Si le lifting chirurgical a longtemps été la seule réponse efficace à la ptose cutanée, la médecine esthétique propose aujourd&apos;hui des alternatives non invasives de premier plan.
            </p>
            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed mb-6">
              Parmi elles, la technologie <strong className="text-neutral-900">HIFU</strong> (High-Intensity Focused Ultrasound) s&apos;impose comme une référence scientifique majeure pour raffermir la peau sans bistouri ni éviction sociale.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed italic">
              Quels sont les réels bienfaits du HIFU et que dit la science à son sujet ? Le Dr Hazzia Jean Luc vous propose une analyse objective basée sur les données cliniques actuelles.
            </p>
          </motion.div>

          {/* Section: Qu'est-ce que le HIFU */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-serif text-neutral-900 mb-6">
              Qu&apos;est-ce que la technologie HIFU et comment fonctionne-t-elle ?
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              Le HIFU utilise l&apos;énergie des ultrasons focalisés de haute intensité pour cibler précisément les couches profondes de la peau, sans endommager l&apos;épiderme (la surface cutanée).
            </p>
            <p className="text-neutral-700 leading-relaxed mb-8">
              Contrairement aux lasers qui traitent la surface, le HIFU agit à des profondeurs variables (<strong>1,5 mm</strong>, <strong>3,0 mm</strong> et <strong>4,5 mm</strong>), atteignant le <strong>SMAS</strong> (Système Musculo-Aponévrotique Superficiel). C&apos;est précisément cette même structure anatomique que les chirurgiens esthétiques retendent lors d&apos;un lifting classique.
            </p>

            {/* Mécanisme biologique - Card design */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/10">
              <h3 className="text-xl font-serif text-neutral-900 mb-6 flex items-center gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
                Le mécanisme biologique
              </h3>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-neutral-700 leading-relaxed pt-1.5">
                    Les ultrasons créent des points de coagulation thermique microscopiques à une température idéale comprise entre <strong>60°C et 70°C</strong>.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <p className="text-neutral-700 leading-relaxed pt-1.5">
                    Cette chaleur contrôlée déclenche une <strong>dénaturation du collagène ancien</strong>.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <p className="text-neutral-700 leading-relaxed pt-1.5">
                    Le corps réagit en activant un processus de cicatrisation naturelle qui stimule massivement la production de <strong>nouveau collagène</strong> (néocollagénèse) et d&apos;<strong>élastine</strong> par les fibroblastes.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section: Bienfaits */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-serif text-neutral-900 mb-10">
              Les principaux bienfaits du HIFU validés par la science
            </h2>

            {/* Bienfait 1 */}
            <div className="mb-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-neutral-900 pt-2">Un effet lifting naturel et progressif</h3>
              </div>
              <p className="text-neutral-700 leading-relaxed pl-16">
                Le traitement par HIFU ne modifie pas les volumes ni l&apos;expression du visage. Les résultats apparaissent de manière progressive sur une période de <strong>2 à 3 mois</strong>, le temps que le nouveau réseau de collagène se synthétise. La peau se retend, l&apos;ovale du visage se redessine et le double menton est visiblement réduit.
              </p>
            </div>

            {/* Bienfait 2 */}
            <div className="mb-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-neutral-900 pt-2">Une polyvalence de traitement (Visage et Corps)</h3>
              </div>
              <div className="pl-16">
                <p className="text-neutral-700 leading-relaxed mb-4">Le HIFU est particulièrement efficace pour :</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { icon: '✦', text: 'Redéfinir l\'ovale du visage' },
                    { icon: '✦', text: 'Atténuer le relâchement du cou et du décolleté' },
                    { icon: '✦', text: 'Rehausser les sourcils (effet brow lift)' },
                    { icon: '✦', text: 'Traiter le relâchement corporel (bras, cuisses, ventre)' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-neutral-50 rounded-lg p-3 border border-neutral-100">
                      <span className="text-primary text-sm">{item.icon}</span>
                      <span className="text-neutral-700 text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bienfait 3 */}
            <div className="mb-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-neutral-900 pt-2">Une procédure non invasive sans éviction sociale</h3>
              </div>
              <p className="text-neutral-700 leading-relaxed pl-16">
                Aucune incision, aucune injection, et aucun temps d&apos;arrêt. Les patients peuvent reprendre leurs activités quotidiennes immédiatement après la séance au cabinet Esthétique Belair, ce qui en fait une solution de choix pour les personnes actives.
              </p>
            </div>
          </motion.section>

          {/* Section: Études scientifiques */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-serif text-neutral-900 mb-4">
              Ce que disent les études scientifiques
            </h2>
            <p className="text-neutral-600 mb-10 italic">L&apos;avis de la recherche</p>
            <p className="text-neutral-700 leading-relaxed mb-10">
              L&apos;efficacité et l&apos;innocuité du HIFU ne reposent pas sur de simples promesses commerciales, mais sur des <strong>essais cliniques rigoureux</strong> validés par des comités de lecture internationaux.
            </p>

            {/* Étude 1 */}
            <div className="bg-white border border-neutral-200 rounded-2xl p-6 md:p-8 mb-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-neutral-900">Une amélioration globale supérieure à 80%</h3>
              </div>
              <p className="text-neutral-700 leading-relaxed mb-4">
                Une étude clinique d&apos;envergure menée par le <strong>Dr Aşiran Serdar</strong> et son équipe, publiée dans le <em>Journal of Cosmetic Dermatology</em>, a évalué l&apos;efficacité des ultrasons focalisés sur 75 patients présentant un relâchement cutané du visage et du cou.
              </p>
              <div className="bg-green-50/50 rounded-xl p-4 border border-green-100">
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Les évaluations indépendantes en double aveugle ont démontré un <strong className="text-green-700">taux d&apos;amélioration clinique supérieur à 80%</strong> au niveau de la ligne mandibulaire, des zones nasogéniennes et de la région sous-mentonnière, avec un taux de satisfaction des patients de <strong className="text-green-700">78%</strong>.
                </p>
              </div>
            </div>

            {/* Étude 2 */}
            <div className="bg-white border border-neutral-200 rounded-2xl p-6 md:p-8 mb-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-neutral-900">Preuve objective par mesure de l&apos;élasticité (Cutometer)</h3>
              </div>
              <p className="text-neutral-700 leading-relaxed mb-4">
                Pour s&apos;affranchir de la simple appréciation visuelle, une étude prospective menée par le <strong>Dr Han et al.</strong> (<em>Dermatologic Therapy</em>) a mesuré objectivement les résultats du HIFU sur 102 participants ciblant les rides périorbitaires, périorales et du cou.
              </p>
              <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100">
                <p className="text-neutral-700 text-sm leading-relaxed">
                  En utilisant des mesures biométriques par Cutometer (valeur R7), les chercheurs ont enregistré une <strong className="text-blue-700">augmentation statistiquement significative de l&apos;élasticité et de la fermeté cutanée dès la 10ème semaine</strong>, confirmant la réalité biologique de la néocollagénèse induite.
                </p>
              </div>
            </div>

            {/* Étude 3 */}
            <div className="bg-white border border-neutral-200 rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-neutral-900">Efficacité à long terme validée par les méta-analyses</h3>
              </div>
              <p className="text-neutral-700 leading-relaxed mb-4">
                Une revue systématique publiée dans l&apos;<em>Aesthetic Surgery Journal</em> a analysé les données compilées de plusieurs dizaines d&apos;études cliniques.
              </p>
              <div className="bg-purple-50/50 rounded-xl p-4 border border-purple-100">
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Les conclusions mettent en évidence une <strong className="text-purple-700">réduction mesurable de la laxité cutanée de 18% à 30%</strong> dans les régions du bas du visage et du cou, tout en confirmant un profil de sécurité excellent : <strong className="text-purple-700">moins de 5% d&apos;effets secondaires</strong>, lesquels restent transitoires (érythème ou œdème léger résolutif en quelques heures).
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section: À qui s'adresse le HIFU */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-serif text-neutral-900 mb-6">
              À qui s&apos;adresse le traitement HIFU ?
            </h2>
            <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100">
              <p className="text-neutral-700 leading-relaxed mb-6">
                Le HIFU est idéal pour les patients présentant un relâchement cutané léger à modéré, généralement à partir de la <strong>trentaine ou quarantaine</strong>, qui souhaitent retarder le recours à la chirurgie ou qui présentent des contre-indications à cette dernière.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-3 bg-white rounded-lg p-4 border border-neutral-200 flex-1">
                  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                  <span className="text-sm text-neutral-700">Convient à <strong>tous les phototypes</strong> (peaux claires à foncées)</span>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-lg p-4 border border-neutral-200 flex-1">
                  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                  <span className="text-sm text-neutral-700">Peut être pratiqué en <strong>toute saison</strong></span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section: CTA Consultation */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl p-8 md:p-10 text-center border border-primary/10">
              <h2 className="text-2xl md:text-3xl font-serif text-neutral-900 mb-4">
                Votre consultation HIFU au Centre Esthétique Bel-Air
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6 max-w-2xl mx-auto">
                Chaque visage étant unique, un examen clinique préalable est indispensable pour évaluer la qualité de votre peau et définir un protocole sur mesure.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-8 max-w-2xl mx-auto">
                Pour en savoir plus sur les technologies disponibles et bénéficier d&apos;une prise en charge experte, prenez rendez-vous pour une consultation personnalisée avec le Dr Hazzia Jean Luc.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setShowModal(true)}
                  className="btn-primary inline-flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10m-9 4h6m-7 8h8a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Prendre rendez-vous
                </button>
                <Link
                  href="/nos-soins/hifu"
                  className="btn-secondary inline-flex items-center justify-center gap-2"
                >
                  Découvrir le soin HIFU
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.section>

          {/* Bibliographie */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-serif text-neutral-900 mb-6">
              Bibliographie scientifique de référence
            </h2>
            <div className="space-y-4">
              {[
                'Aşiran Serdar, Z. et al. Efficacy of high-intensity focused ultrasound in facial and neck rejuvenation. Journal of Cosmetic Dermatology, 19(11), 2843-2849.',
                'Han, H. S. et al. Safety and efficacy of high-intensity focused ultrasound for treatment of periorbital, perioral, and neck wrinkles: Prospective open single-center single-arm confirmatory clinical trial. Dermatologic Therapy, 35(5), e15420.',
                'Alizadeh, Z. et al. Systematic Review of High-Intensity Focused Ultrasound in Skin Tightening and Body Contouring. Aesthetic Surgery Journal, Oxford Academic, 45(7), 690-704.',
                'Park, H. et al. High-Intensity Focused Ultrasound for the Treatment of Wrinkles and Skin Laxity in Seven Different Facial Areas. Annals of Dermatology, 27(6), 688–693.',
              ].map((ref, idx) => (
                <div key={idx} className="flex gap-3 text-sm text-neutral-600 leading-relaxed">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-neutral-100 flex items-center justify-center text-xs font-medium text-neutral-500">{idx + 1}</span>
                  <p className="italic">{ref}</p>
                </div>
              ))}
            </div>
          </motion.section>

        </div>
      </article>

      <Footer />
      <RendezVousModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </main>
  );
}
