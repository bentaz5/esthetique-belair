'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon, CalendarDaysIcon, ChevronDownIcon, PhoneIcon } from '@heroicons/react/24/outline';
import RendezVousModal from './RendezVousModal';
import Footer from './Footer';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const menuItems = [
    { name: 'Le Centre', href: '/le-centre' },
    {
      name: 'Vos Besoins',
      href: '/vos-besoins',
      submenu: [
        { name: 'Visage', href: '/vos-besoins/visage' },
        { name: 'Corps', href: '/vos-besoins/corps' },
        { name: 'Peau', href: '/vos-besoins/peau' },
      ],
    },
    {
      name: 'Nos Soins',
      href: '/nos-soins',
      submenu: [
        { name: 'Microneedling avec radiofréquence', href: '/nos-soins/microneedling-radiofrequence' },
        { name: 'Acide hyaluronique', href: '/nos-soins/acide-hyaluronique' },
        { name: 'Botox', href: '/nos-soins/botox' },
        { name: 'HIFU', href: '/nos-soins/hifu' },
        { name: 'Peelings Médicaux', href: '/nos-soins/peelings' },
        { name: 'EMSlim NEO avec radiofréquence', href: '/nos-soins/emslim-neo' },
        { name: 'Coussin pelvien', href: '/nos-soins/coussin-pelvien' },
        { name: 'Botox pour transpiration excessive', href: '/nos-soins/botox-hyperhidrose' },
        { name: 'Épilation définitive au Laser Diode', href: '/nos-soins/epilation-laser' },
        { name: 'Laser vasculaire', href: '/nos-soins/laser-vasculaire' },
      ],
    },
    {
      name: 'En savoir plus',
      href: '#',
      submenu: [
        { name: 'Blog', href: '/blog' },
        { name: 'Tarifs', href: '/tarifs' },
      ],
    },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Centre Esthétique Bel-Air"
                width={210}
                height={105}
                className="w-[210px] h-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="text-neutral-700 hover:text-primary transition-colors duration-200 flex items-center"
                  >
                    {item.name}
                    {item.submenu && (
                      <ChevronDownIcon className="h-4 w-4 ml-1 opacity-60 group-hover:opacity-100 transition-opacity" />
                    )}
                  </Link>
                  {item.submenu && (
                    <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-2 hidden group-hover:block">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex items-center space-x-4">
                <button
                  onClick={e => { console.log('click bouton nav', e.target); e.preventDefault(); setShowModal(true); }}
                  className="btn-primary text-sm md:text-base inline-flex items-center space-x-2 group relative overflow-hidden"
                >
                  <CalendarDaysIcon className="h-4 w-4 md:h-5 md:w-5" />
                  <span>Prendre rendez-vous</span>
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-black/20 to-white/20 transition-all duration-500 ease-out group-hover:w-full" />
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-neutral-700 hover:text-primary"
              >
                {isOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            open: { opacity: 1, height: 'auto' },
            closed: { opacity: 0, height: 0 },
          }}
          className="md:hidden bg-white"
        >
          <div className="container-custom py-4 space-y-4">
            {menuItems.map((item) => (
              <div key={item.name}>
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    className="block text-neutral-700 hover:text-primary flex-1"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <button
                      type="button"
                      aria-label={openSubmenu === item.name ? `Fermer le sous-menu ${item.name}` : `Ouvrir le sous-menu ${item.name}`}
                      onClick={() => setOpenSubmenu(openSubmenu === item.name ? null : item.name)}
                      className="ml-2 p-1"
                    >
                      <ChevronDownIcon
                        className={`h-4 w-4 transition-transform ${openSubmenu === item.name ? 'rotate-180' : ''}`}
                      />
                    </button>
                  )}
                </div>
                {item.submenu && openSubmenu === item.name && (
                  <div className="pl-4 mt-2 space-y-2">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block text-sm text-neutral-600 hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex items-center space-x-4">
              <button
                onClick={e => { console.log('click bouton nav', e.target); e.preventDefault(); setShowModal(true); setIsOpen(false); }}
                className="btn-primary text-sm md:text-base inline-flex items-center space-x-2 group relative overflow-hidden"
              >
                <CalendarDaysIcon className="h-4 w-4 md:h-5 md:w-5" />
                <span>Prendre rendez-vous</span>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-black/20 to-white/20 transition-all duration-500 ease-out group-hover:w-full" />
              </button>
            </div>
          </div>
        </motion.div>
      </nav>

      {/* Modal */}
      <RendezVousModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default Navigation; 