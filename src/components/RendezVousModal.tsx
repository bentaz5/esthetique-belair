'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline';

interface RendezVousModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RendezVousModal = ({ isOpen, onClose }: RendezVousModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-lg p-6 max-w-sm w-full shadow-xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-serif text-neutral-900">Prendre rendez-vous</h3>
              <button
                onClick={onClose}
                className="text-neutral-400 hover:text-neutral-600"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <p className="text-neutral-600 mb-6">
              Prenez rendez-vous en ligne sur Doctolib ou contactez notre secrétariat du lundi au vendredi de 8h à 19h.
            </p>
            <a
              href="tel:0143451192"
              className="flex items-center justify-center space-x-2 bg-primary text-white rounded-lg px-6 py-3 hover:bg-primary/90 transition-colors"
            >
              <PhoneIcon className="h-5 w-5" />
              <span>01 43 45 11 92</span>
            </a>
            <a
              href="https://www.doctolib.fr/centre-laser-et-esthetique/paris/centre-esthetique-bel-air-paris"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 mt-3 bg-[#107ACA] text-white rounded-lg px-6 py-3 hover:bg-[#0b5fa0] transition-colors"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10.46 3.01h3.08v17.98h-3.08zM17.54 7.39a3.07 3.07 0 1 0 0 6.15 3.07 3.07 0 0 0 0-6.15zM6.46 10.46a3.07 3.07 0 1 0 0 6.15 3.07 3.07 0 0 0 0-6.15z" />
              </svg>
              <span>Doctolib</span>
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RendezVousModal; 