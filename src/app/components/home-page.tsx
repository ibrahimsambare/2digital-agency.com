import { Link } from 'react-router';
import { Search, TrendingUp, Rocket, BarChart3, Lightbulb, Users, Target, Shield, CheckCircle2 } from 'lucide-react';
import contentCreationImg from 'figma:asset/9e9c53a2249da6d19df867776aa6faae9a0b2cdd.png';

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl mb-6">
              From Visibility to Growth
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              2Digital Agency accompagne les PME et organisateurs d'événements à structurer leur visibilité digitale et maximiser leur impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#audit"
                className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors text-lg"
              >
                Audit Gratuit 🔵
              </a>
              <a
                href="#contact"
                className="bg-white text-slate-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors text-lg"
              >
                Prendre un Rendez-vous 🔵
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Approche */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-16 text-slate-900">
            Notre Approche
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="text-blue-600" size={36} />
              </div>
              <div className="text-2xl mb-2 text-blue-600">1</div>
              <h3 className="text-xl mb-2">Audit</h3>
              <p className="text-gray-600">
                Analyse approfondie de votre présence digitale actuelle
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="text-blue-600" size={36} />
              </div>
              <div className="text-2xl mb-2 text-blue-600">2</div>
              <h3 className="text-xl mb-2">Stratégie</h3>
              <p className="text-gray-600">
                Élaboration d'une stratégie digitale sur-mesure
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="text-blue-600" size={36} />
              </div>
              <div className="text-2xl mb-2 text-blue-600">3</div>
              <h3 className="text-xl mb-2">Exécution</h3>
              <p className="text-gray-600">
                Mise en œuvre des actions définies ensemble
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="text-blue-600" size={36} />
              </div>
              <div className="text-2xl mb-2 text-blue-600">4</div>
              <h3 className="text-xl mb-2">Optimisation</h3>
              <p className="text-gray-600">
                Amélioration continue basée sur les données
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-16 text-slate-900">
            Nos Services
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <img 
                src={contentCreationImg}
                alt="Création de contenu professionnel"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="grid gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Stratégie Digitale</h3>
                    <p className="text-gray-600">
                      Développez une stratégie digitale cohérente et performante
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Création de Contenu</h3>
                    <p className="text-gray-600">
                      Contenus engageants adaptés à votre audience
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Gestion des Réseaux Sociaux</h3>
                    <p className="text-gray-600">
                      Community management professionnel et réactif
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">E-commerce</h3>
                    <p className="text-gray-600">
                      Solutions complètes pour votre boutique en ligne
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link
              to="/offres"
              className="bg-amber-700 text-white px-8 py-4 rounded-full hover:bg-amber-800 transition-colors inline-block text-lg"
            >
              Découvrir Nos Offres 🟤
            </Link>
          </div>
        </div>
      </section>

      {/* Pourquoi Nous */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-8 text-slate-900">
            Pourquoi Nous
          </h2>
          <p className="text-center text-gray-700 text-lg max-w-4xl mx-auto mb-12 leading-relaxed">
            Spécialisée dans les PME et événements, 2Digital Agency déploie des stratégies digitales orientées résultats, combinant vision locale, ambition internationale et transparence totale.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section id="audit" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">
            Prêt à Structurer Votre Croissance Digitale ?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Commencez avec un audit gratuit de votre présence digitale
          </p>
          <a
            href="#contact"
            className="bg-white text-blue-600 px-10 py-4 rounded-full hover:bg-gray-100 transition-colors inline-block text-lg"
          >
            Réserver un Audit 🔵
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
