import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { Navigation } from './components/navigation';
import { HomePage } from './components/home-page';
import { OffersPage } from './components/offers-page';
import { AboutPage } from './components/about-page';
import { ContactPage } from './components/contact-page';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/offres" element={<OffersPage />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}
