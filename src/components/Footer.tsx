'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Contact Info */}
          <div>
            <Link href="/" className="block mb-6">
              <Image
                src="/images/logo.png"
                alt="Centre Esthétique Bel-Air"
                width={210}
                height={105}
                className="w-[210px] h-auto brightness-0 invert"
              />
            </Link>
            <address className="not-italic">
              <p>22 avenue du Bel-Air</p>
              <p>75012 Paris</p>
              <p className="mt-2">
                <a href="tel:+33143451192" className="hover:text-primary transition-colors">
                  +33 1 43 45 11 92
                </a>
              </p>
              <p>
                <a href="mailto:contact@esthetique-belair.fr" className="hover:text-primary transition-colors">
                  contact@esthetique-belair.fr
                </a>
              </p>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/le-centre" className="hover:text-primary transition-colors">
                  Le Centre
                </Link>
              </li>
              <li>
                <Link href="/vos-besoins" className="hover:text-primary transition-colors">
                  Vos Besoins
                </Link>
              </li>
              <li>
                <Link href="/nos-soins" className="hover:text-primary transition-colors">
                  Nos Soins
                </Link>
              </li>
              <li>
                <Link href="/tarifs" className="hover:text-primary transition-colors">
                  Tarifs
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-serif mb-4">Mentions Légales</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/mentions-legales" className="hover:text-primary transition-colors">
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link href="/politique-confidentialite" className="hover:text-primary transition-colors">
                  Politique de Confidentialité
                </Link>
              </li>
              <li>
                <Link href="/cgv" className="hover:text-primary transition-colors">
                  CGV
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Map */}
          <div>
            <h3 className="text-xl font-serif mb-4">Suivez-nous</h3>
            <div className="flex space-x-6 mb-6">
              <a
                href="https://www.instagram.com/centre_esthetique_bel_air"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors text-2xl"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors text-2xl"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
            <div className="aspect-video bg-neutral-800 rounded-lg">
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

        <div className="mt-12 pt-8 border-t border-neutral-800 text-center text-neutral-400">
          <p>&copy; {new Date().getFullYear()} Centre Esthétique Bel-Air. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 