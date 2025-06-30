'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function PolitiqueConfidentialite() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container-custom px-4 md:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-center mb-6"
          >
            Politique de Confidentialité
          </motion.h1>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container-custom px-4 md:px-6">
          <div className="max-w-3xl mx-auto prose prose-neutral">
            <h2 className="text-2xl font-serif mb-6">1. Collecte des informations personnelles</h2>
            <p>
              Nous collectons des informations personnelles lorsque vous prenez rendez-vous, nous contactez ou utilisez nos services. 
              Les informations collectées peuvent inclure votre nom, adresse e-mail, numéro de téléphone, et toute autre information 
              nécessaire au bon déroulement de nos prestations.
            </p>
            
            <h2 className="text-2xl font-serif mt-10 mb-6">2. Utilisation des informations</h2>
            <p>Les informations que nous collectons sont utilisées pour :</p>
            <ul>
              <li>Gérer vos rendez-vous et demandes de renseignements.</li>
              <li>Améliorer notre site et nos services.</li>
              <li>Vous informer de nos nouveautés et offres promotionnelles.</li>
            </ul>
            
            <h2 className="text-2xl font-serif mt-10 mb-6">3. Confidentialité et sécurité</h2>
            <p>
              Vos données personnelles sont traitées de manière confidentielle. Nous mettons en œuvre des mesures 
              de sécurité pour protéger vos informations contre tout accès non autorisé.
            </p>
            
            <h2 className="text-2xl font-serif mt-10 mb-6">4. Droits des utilisateurs</h2>
            <p>
              Conformément à la réglementation en vigueur, vous disposez d'un droit d'accès, de rectification, 
              de suppression et d'opposition concernant vos données personnelles. Pour exercer ces droits, 
              veuillez nous contacter à l'adresse suivante : 
              <a href="mailto:contact@esthetique-belair.fr" className="text-primary hover:underline"> contact@esthetique-belair.fr</a>.
            </p>
            
            <h2 className="text-2xl font-serif mt-10 mb-6">5. Cookies</h2>
            <p>
              Nous utilisons des cookies pour améliorer votre expérience sur notre site. Vous pouvez configurer 
              votre navigateur pour refuser les cookies ou pour être informé de leur utilisation.
            </p>
            
            <h2 className="text-2xl font-serif mt-10 mb-6">6. Modification de la politique de confidentialité</h2>
            <p>
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
              Les modifications prendront effet immédiatement après leur publication sur cette page.
            </p>
            
            <h2 className="text-2xl font-serif mt-10 mb-6">7. Contact</h2>
            <p>Pour toute question concernant notre politique de confidentialité, vous pouvez nous contacter à :</p>
            <ul>
              <li><strong>Adresse :</strong> 22 avenue du Bel-Air, 75012 Paris, France</li>
              <li><strong>E-mail :</strong> <a href="mailto:contact@esthetique-belair.fr" className="text-primary hover:underline">contact@esthetique-belair.fr</a></li>
              <li><strong>Téléphone :</strong> 01 43 45 11 92</li>
            </ul>
            
            <div className="my-10 border-t border-neutral-200"></div>
            
            <p className="text-sm text-neutral-500 mt-8">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 