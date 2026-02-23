import { CheckCircle2 } from 'lucide-react';

export function OffersPage() {
  const pmePacks = [
    {
      emoji: '🥉',
      name: 'PACK FONDATION',
      subtitle: 'Présence structurée',
      description: 'Pour PME qui veulent poser des bases solides.',
      objective: '🎯 Objectif : crédibilité, cohérence, régularité.',
      price: '2 500 MAD / mois',
      color: 'from-amber-700 to-amber-900',
      features: [
        'Audit digital initial (1h + synthèse)',
        'Positionnement & message clé',
        'Planning éditorial',
        '8 contenus / mois',
        'Gestion 1 plateforme',
        'Reporting mensuel',
      ],
    },
    {
      emoji: '🥈',
      name: 'PACK CROISSANCE',
      subtitle: 'Visibilité & engagement',
      description: 'Pour PME qui veulent attirer et engager.',
      objective: '🎯 Objectif : visibilité qualifiée & premiers prospects.',
      price: '4 000 MAD / mois',
      color: 'from-gray-400 to-gray-600',
      features: [
        'Audit stratégique complet',
        'Définition cible & proposition de valeur',
        '12 contenus / mois',
        'Gestion 2 plateformes',
        'Optimisation profils',
        'Campagne sponsorisée (budget client séparé)',
        'Reporting + recommandations',
      ],
    },
    {
      emoji: '🥇',
      name: 'PACK PERFORMANCE',
      subtitle: 'Acquisition & conversion',
      description: 'Pour PME ambitieuses orientées résultats.',
      objective: '🎯 Objectif : génération de leads & croissance mesurable.',
      price: '6 000 MAD / mois',
      color: 'from-yellow-400 to-yellow-600',
      popular: true,
      features: [
        'Stratégie digitale globale',
        '16 contenus / mois',
        'Gestion multi-plateformes',
        'Campagnes sponsorisées optimisées',
        'Landing page optimisée conversion',
        'Suivi KPI + call stratégique mensuel',
      ],
    },
    {
      emoji: '💎',
      name: 'PACK TRANSFORMATION',
      subtitle: 'Marketing + Site',
      description: 'Pour PME qui veulent structurer leur développement complet.',
      objective: '🎯 Objectif : transformation digitale durable & scalable.',
      price: '5 000 à 8 000 MAD / mois',
      color: 'from-blue-500 to-blue-700',
      features: [
        'Stratégie digitale complète',
        'Création / refonte site vitrine',
        'Tunnel d\'acquisition',
        'Gestion réseaux complète',
        'Campagnes sponsorisées',
        'Optimisation conversion',
        'Reporting avancé',
      ],
    },
  ];

  const eventPacks = [
    {
      emoji: '🎟',
      name: 'PACK VISIBILITÉ',
      subtitle: 'Remplissage',
      description: 'Pour assurer visibilité & inscriptions.',
      objective: '🎯 Objectif : générer des inscriptions.',
      color: 'from-blue-500 to-blue-700',
      features: [
        'Identité visuelle événement',
        'Teaser vidéo',
        'Affiches & déclinaisons digitales',
        'Campagne sponsorisée',
        'Landing page simple',
      ],
    },
    {
      emoji: '🚀',
      name: 'PACK IMPACT',
      subtitle: 'Expérience digitale complète',
      description: 'Pour événements structurés.',
      objective: '🎯 Objectif : impact, notoriété & crédibilité post-événement.',
      color: 'from-indigo-500 to-indigo-700',
      features: [
        'Stratégie digitale événementielle',
        'Landing page réservation',
        'Billetterie intégrée (via NITEC)',
        'Teaser + visuels',
        'Campagnes sponsorisées',
        'Couverture jour J (vidéo + reels)',
        'Storytelling',
        'Vidéo recap',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl mb-6">
            Nos Offres
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Des solutions adaptées à vos besoins et à votre budget
          </p>
        </div>
      </section>

      {/* PME Packs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-4 text-slate-900">
            Packs PME
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Solutions complètes pour développer votre présence digitale
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pmePacks.map((pack) => (
              <div
                key={pack.name}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 overflow-hidden ${
                  pack.popular ? 'ring-4 ring-blue-600' : ''
                }`}
              >
                {pack.popular && (
                  <div className="bg-blue-600 text-white text-center py-2 text-sm">
                    ⭐ Populaire
                  </div>
                )}
                <div className={`bg-gradient-to-br ${pack.color} p-6 text-white`}>
                  <div className="text-4xl mb-3">{pack.emoji}</div>
                  <h3 className="text-xl mb-1">{pack.name}</h3>
                  <p className="text-sm opacity-90">{pack.subtitle}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4 italic">{pack.description}</p>
                  <ul className="space-y-3 mb-6">
                    {pack.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-600 mb-4">{pack.objective}</p>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition-colors">
                    Choisir ce pack
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Packs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-4 text-slate-900">
            🎬 Offres Événements
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Services spécialisés pour la promotion de vos événements
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {eventPacks.map((pack) => (
              <div
                key={pack.name}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 overflow-hidden"
              >
                <div className={`bg-gradient-to-br ${pack.color} p-6 text-white`}>
                  <div className="text-4xl mb-3">{pack.emoji}</div>
                  <h3 className="text-xl mb-1">{pack.name}</h3>
                  <p className="text-sm opacity-90">{pack.subtitle}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4 italic">{pack.description}</p>
                  <ul className="space-y-3 mb-6">
                    {pack.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-600 mb-4">{pack.objective}</p>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition-colors">
                    Choisir ce pack
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Besoin d'une Solution sur Mesure ?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contactez-nous pour créer une offre personnalisée adaptée à vos besoins
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-10 py-4 rounded-full hover:bg-gray-100 transition-colors inline-block text-lg">
            Nous Contacter
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f172a] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2026 2Digital Agency. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}