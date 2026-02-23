import nitecLogo from 'figma:asset/e1c67d2a1f8906ad1441e628ee0baa89406786cc.png';
import djibrilPhoto from 'figma:asset/53f216f2071876c97e6770711786ef2ce08be858.png';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl mb-6">
            À Propos de Nous
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            L'histoire de 2Digital Agency et notre mission
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={djibrilPhoto}
                alt="Fondateur 2Digital Agency"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl mb-6 text-slate-900">
                Qui Je Suis
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-xl mb-4">
                  <strong>Djibril Diallo</strong>, diplômé en management de l'entreprise, est le fondateur de 2Digital Agency, une agence spécialisée dans la structuration de la croissance digitale pour les PME et les événements.
                </p>
                <p>
                  Convaincu que la majorité des entreprises ne manquent pas d'efforts mais de stratégie, il accompagne ses clients dans la mise en place d'actions digitales cohérentes, mesurables et orientées résultats.
                </p>
                <p>
                  Son approche repose sur une vision claire : transformer la visibilité en ligne en levier réel de développement.
                </p>
              </div>
              <h3 className="text-2xl mt-8 mb-4 text-slate-900">
                Notre Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Transformer la présence digitale des PME en véritable moteur de croissance, en proposant des solutions concrètes, mesurables et adaptées à chaque entreprise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-slate-900">
            Nos Valeurs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl mb-3">Excellence</h3>
              <p className="text-gray-600">
                Nous visons l'excellence dans chaque projet, chaque campagne, chaque interaction
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl mb-3">Partenariat</h3>
              <p className="text-gray-600">
                Nous nous considérons comme des partenaires de croissance, pas seulement des prestataires
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="text-xl mb-3">Innovation</h3>
              <p className="text-gray-600">
                Nous restons à la pointe des tendances digitales pour offrir les meilleures solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-slate-900">
            Nos Partenaires
          </h2>
          <div className="flex justify-center items-center">
            <div className="bg-white p-12 rounded-2xl shadow-lg">
              <img
                src={nitecLogo}
                alt="NITEC - Niger IT & Engineering Consulting"
                className="h-32 w-auto"
              />
            </div>
          </div>
          <p className="text-center mt-8 text-gray-600 max-w-2xl mx-auto">
            En partenariat avec NITEC (Niger IT & Engineering Consulting), nous offrons des solutions digitales complètes et innovantes à nos clients.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Prêt à Travailler Ensemble ?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Discutons de votre projet et de comment nous pouvons vous aider à grandir
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-10 py-4 rounded-full hover:bg-gray-100 transition-colors inline-block text-lg"
          >
            Nous Contacter
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f172a] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2026 2Digital Agency. Tous droits réservés. • Site conçu et piloté par nitec.fr
          </p>
        </div>
      </footer>
    </div>
  );
}
