import { Mail, Linkedin, MessageCircle, Instagram } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl mb-6">
            Contactez-Nous
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nous sommes à votre écoute pour discuter de votre projet
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Email */}
            <a
              href="mailto:contact@2digitalagency.com"
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 p-4 rounded-full group-hover:bg-blue-600 transition-colors">
                  <Mail className="text-blue-600 group-hover:text-white transition-colors" size={32} />
                </div>
                <h3 className="text-2xl">Email</h3>
              </div>
              <p className="text-gray-600 mb-2">Envoyez-nous un email</p>
              <p className="text-blue-600">contact@2digitalagency.com</p>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/company/2digitalagency"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 p-4 rounded-full group-hover:bg-blue-600 transition-colors">
                  <Linkedin className="text-blue-600 group-hover:text-white transition-colors" size={32} />
                </div>
                <h3 className="text-2xl">LinkedIn</h3>
              </div>
              <p className="text-gray-600 mb-2">Suivez-nous sur LinkedIn</p>
              <p className="text-blue-600">@2digitalagency</p>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/2120774311854"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 p-4 rounded-full group-hover:bg-blue-600 transition-colors">
                  <MessageCircle className="text-blue-600 group-hover:text-white transition-colors" size={32} />
                </div>
                <h3 className="text-2xl">WhatsApp Business</h3>
              </div>
              <p className="text-gray-600 mb-2">Discutez avec nous directement</p>
              <p className="text-blue-600">+212 0774311854</p>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/2digital_agency"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 p-4 rounded-full group-hover:bg-blue-600 transition-colors">
                  <Instagram className="text-blue-600 group-hover:text-white transition-colors" size={32} />
                </div>
                <h3 className="text-2xl">Instagram</h3>
              </div>
              <p className="text-gray-600 mb-2">Suivez notre actualité</p>
              <p className="text-blue-600">@2digital_agency</p>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-slate-900">
            Envoyez-nous un Message
          </h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm mb-2 text-gray-700">
                  Prénom
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                  placeholder="Votre prénom"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm mb-2 text-gray-700">
                  Nom
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                  placeholder="Votre nom"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                placeholder="votre@email.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm mb-2 text-gray-700">
                Téléphone
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                placeholder="+212 6 00 00 00 00"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm mb-2 text-gray-700">
                Entreprise
              </label>
              <input
                type="text"
                id="company"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                placeholder="Nom de votre entreprise"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm mb-2 text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition resize-none"
                placeholder="Parlez-nous de votre projet..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-full hover:bg-blue-700 transition-colors text-lg"
            >
              Envoyer le Message
            </button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Besoin d'un Audit Gratuit ?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Commencez par une analyse complète de votre présence digitale
          </p>
          <a
            href="mailto:contact@2digitalagency.com?subject=Demande d'Audit Gratuit"
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
