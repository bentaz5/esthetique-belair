import React from 'react';
import Head from 'next/head';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const tarifs = [
  { group: 'Acide Hyaluronique', items: [
    { soin: 'Acide Hyaluronique', prix: '360€ / seringue (1ml)', details: "Variable selon la zone et l'indication" },
  ]},
  { group: 'Peelings Médicaux', items: [
    { soin: 'Peeling glycolique', prix: '120€', details: '' },
    { soin: 'Peeling TCA', prix: '480€', details: '' },
    { soin: 'Peeling dépigmentant', prix: '180€', details: '' },
  ]},
  { group: 'Microneedling avec Radiofréquence', items: [
    { soin: 'Microneedling avec Radiofréquence', prix: '240€ / séance', details: 'Visage complet' },
  ]},
  { group: 'Botox', items: [
    { soin: 'Botox', prix: '360€', details: 'Haut du visage' },
    { soin: 'Botox hyperhidrose', prix: '400€ / zone', details: 'Aisselles, mains ou pieds' },
  ]},
  { group: 'HIFU (Ultrasons Focalisés)', items: [
    { soin: 'Ovale du visage', prix: '480€', details: '' },
    { soin: 'Visage complet', prix: '1080€', details: '' },
    { soin: 'Cou', prix: '480€', details: '' },
    { soin: 'Pourtour de la bouche', prix: '360€', details: '' },
    { soin: 'Paupières et poches malaires', prix: '360€', details: '' },
    { soin: 'Visage complet + cou', prix: '1320€', details: '' },
    { soin: 'Zone du corps (ex: bras, ventre, intérieur des cuisses)', prix: 'à partir de 960€', details: '' },
  ]},
  { group: 'EMSlim NEO', items: [
    { soin: 'EMSlim NEO', prix: '170€ / séance (30 min)', details: '' },
  ]},
  { group: 'Coussin pelvien EMSLIM RF', items: [
    { soin: 'Coussin pelvien EMSLIM RF', prix: '180€ / séance', details: '' },
  ]},
  { group: 'Épilation Définitive au Laser', items: [
    { soin: 'Lèvres', prix: '60€', details: '' },
    { soin: 'Bas du visage', prix: '80€', details: '' },
    { soin: 'Aisselles', prix: '60€', details: '' },
    { soin: 'Maillot simple', prix: '50€', details: '' },
    { soin: 'Maillot échancré', prix: '70€', details: '' },
    { soin: 'Maillot semi intégral', prix: '80€', details: '' },
    { soin: 'Maillot intégral', prix: '90€', details: '' },
    { soin: 'Cuisses', prix: '150€', details: '' },
    { soin: 'Demi jambes', prix: '130€', details: '' },
    { soin: 'Jambes complètes', prix: '180€', details: '' },
    { soin: 'Demi bras', prix: '60€', details: '' },
    { soin: 'Bras entier', prix: '100€', details: '' },
    { soin: 'Petites zones', prix: '60€', details: '' },
    { soin: 'Forfait Demi jambes + maillot + aisselles', prix: '240€', details: '' },
    { soin: 'Forfait Jambes complètes + maillot + aisselles', prix: '300€', details: '' },
  ]},
];

export default function TarifsPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <Head>
        <title>Tarifs - Centre Esthétique Bel-Air</title>
        <meta name="description" content="Consultez les tarifs des soins de médecine esthétique, laser, injections et nutrition au Centre Esthétique Bel-Air à Paris Nation. Transparence et expertise médicale." />
        <meta property="og:title" content="Tarifs - Centre Esthétique Bel-Air" />
        <meta property="og:description" content="Découvrez nos prix pour les soins esthétiques, laser, injections et nutrition à Paris 12ème." />
      </Head>
      <Navigation />
      <section className="py-16">
        <div className="container-custom px-4 md:px-8 pt-24">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-center mb-10">Tarifs</h1>
          {/* Table desktop uniquement */}
          <div className="overflow-x-auto hidden md:block">
            <table className="min-w-full bg-white rounded-xl shadow-md overflow-hidden">
              <thead>
                <tr className="bg-primary/10">
                  <th className="py-4 px-4 text-left text-lg font-semibold text-primary">Soin</th>
                  <th className="py-4 px-4 text-left text-lg font-semibold text-primary">Tarif</th>
                  <th className="py-4 px-4 text-left text-lg font-semibold text-primary">Détail</th>
                </tr>
              </thead>
              <tbody>
                {tarifs.map((group, gIdx) => (
                  <React.Fragment key={gIdx}>
                    <tr className="bg-primary/5">
                      <td colSpan={3} className="py-3 px-4 text-primary font-bold text-lg border-t border-primary/10">
                        {group.group}
                      </td>
                    </tr>
                    {group.items.map((item, idx) => (
                      <tr key={idx} className="border-b last:border-none hover:bg-primary/5 transition">
                        <td className="py-3 px-4 text-neutral-800 whitespace-nowrap">{item.soin}</td>
                        <td className="py-3 px-4 text-neutral-900 font-medium whitespace-nowrap">{item.prix}</td>
                        <td className="py-3 px-4 text-neutral-600">{item.details}</td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          {/* Liste mobile uniquement */}
          <div className="block md:hidden space-y-6">
            {tarifs.map((group, gIdx) => (
              <div key={gIdx}>
                <div className="text-primary font-bold text-lg mb-2">{group.group}</div>
                {group.items.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl shadow p-4 mb-2">
                    <div className="font-semibold text-neutral-800">{item.soin}</div>
                    <div className="text-primary font-bold">{item.prix}</div>
                    {item.details && <div className="text-neutral-600 text-sm mt-1">{item.details}</div>}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <p className="text-neutral-500 text-sm text-center mt-8">Tarifs donnés à titre indicatif, susceptibles d'être adaptés lors de la consultation selon l'indication et la zone à traiter.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
} 