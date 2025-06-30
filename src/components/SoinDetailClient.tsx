'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';
import RendezVousModal from '@/components/RendezVousModal';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import type { Soin } from '@/lib/soins';

interface SoinDetailClientProps {
  soin: Soin;
}

export default function SoinDetailClient({ soin }: SoinDetailClientProps) {
  const [showModal, setShowModal] = useState(false);
  const soinUrl = `https://www.centre-esthetique-belair.fr/nos-soins/${soin.id}`;

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src={soin.imageHero}
            alt={`Illustration du soin ${soin.titre}`}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-serif mb-6">{soin.titre}</h1>
          <p className="text-xl md:text-2xl">{soin.accroche}</p>
        </div>
      </section>

      {showModal && (
        <RendezVousModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
        />
      )}
    </main>
  );
} 