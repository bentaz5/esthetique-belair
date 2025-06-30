import React from 'react';
import Head from 'next/head';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Blog() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <Head>
        <title>Blog - Centre Esthétique Bel-Air</title>
        <meta name="description" content="Découvrez nos conseils, actualités et informations sur la médecine esthétique, la beauté et le bien-être au Centre Esthétique Bel-Air à Paris." />
        <meta property="og:title" content="Blog - Centre Esthétique Bel-Air" />
        <meta property="og:description" content="Conseils, actualités et informations sur la médecine esthétique, la beauté et le bien-être à Paris Nation." />
      </Head>
      <Navigation />
      <section className="py-20">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-8 text-neutral-900">Blog du Centre Esthétique Bel-Air</h1>
          <p className="text-lg text-neutral-600 mb-8">
            Retrouvez prochainement nos articles, conseils d'experts et actualités sur la médecine esthétique, la beauté et le bien-être. Notre équipe partagera ici son expertise pour vous accompagner dans votre parcours esthétique à Paris Nation.
          </p>
          <div className="rounded-xl bg-white p-8 shadow-sm text-neutral-400">
            Aucun article n'est publié pour le moment. Revenez bientôt !
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
} 