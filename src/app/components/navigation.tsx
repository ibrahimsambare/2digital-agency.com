import { Link, useLocation } from 'react-router';
import logo from 'figma:asset/3bdd3c1162112de353bc31965249e1b8e05432a1.png';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/offres', label: 'Nos Offres' },
    { path: '/a-propos', label: 'À Propos' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-[#0f172a] sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="2Digital Agency" className="h-16 md:h-20" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md transition-colors ${
                  location.pathname === item.path
                    ? 'text-blue-400'
                    : 'text-white hover:text-blue-300'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="#audit"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-colors"
            >
              Audit Gratuit
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base ${
                  location.pathname === item.path
                    ? 'text-blue-400'
                    : 'text-white hover:text-blue-300'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="#audit"
              className="block mt-4 bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-colors text-center"
            >
              Audit Gratuit
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}