'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const articles = [
  {
    slug: 'hifu-rajeunissement-cutane-sans-chirurgie',
    title: 'Le HIFU : Le Secret du Rajeunissement Cutané Sans Chirurgie',
    excerpt: 'Quels sont les réels bienfaits du HIFU et que dit la science à son sujet ? Le Dr Hazzia Jean Luc vous propose une analyse objective basée sur les données cliniques actuelles.',
    image: '/images/soins/hifu.png',
    author: 'Dr Hazzia Jean Luc',
    date: '17 mai 2026',
    readTime: '8 min',
    category: 'Médecine Esthétique',
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <Navigation />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-neutral-50">
        <div className="container-custom px-4 md:px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-serif mb-6 text-neutral-900"
          >
            Blog du Centre Esthétique Bel-Air
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-neutral-600 max-w-2xl mx-auto"
          >
            Articles, conseils d&apos;experts et actualités sur la médecine esthétique par notre équipe médicale à Paris Nation.
          </motion.p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-20">
        <div className="container-custom px-4 md:px-6 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/blog/${article.slug}`} className="group block h-full">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-neutral-100 hover:border-primary/20 h-full flex flex-col">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm text-primary text-xs font-medium px-3 py-1.5 rounded-full">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h2 className="text-xl font-serif text-neutral-900 mb-3 group-hover:text-primary transition-colors leading-tight">
                        {article.title}
                      </h2>
                      <p className="text-neutral-600 text-sm leading-relaxed mb-4 flex-1">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-neutral-500 pt-4 border-t border-neutral-100">
                        <span>{article.author}</span>
                        <div className="flex items-center gap-2">
                          <span>{article.date}</span>
                          <span className="w-1 h-1 rounded-full bg-neutral-300" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
