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
              Pour prendre rendez-vous, veuillez contacter notre secrétariat :
              <br />
              <span className="text-sm text-neutral-500">(Ouvert de 8h à 19h)</span>
            </p>
            <a
              href="tel:0143451192"
              className="flex items-center justify-center space-x-2 bg-primary text-white rounded-lg px-6 py-3 hover:bg-primary/90 transition-colors"
            >
              <PhoneIcon className="h-5 w-5" />
              <span>01 43 45 11 92</span>
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RendezVousModal; 