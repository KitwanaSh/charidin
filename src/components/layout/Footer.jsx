import Container from '../common/Container';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      <Container>
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-white">
              CHARIDIN INTEGRITY GROUP
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Services de Procurement et Coordination Logistique
            </p>
            <p className="text-gray-400 text-sm italic">
              "Serving with Integrity and Dignity"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Navigation</h4>
            <div className="space-y-2 text-sm">
              <Link to="/" className="block text-gray-300 hover:text-white transition-colors">
                Accueil
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors">
                À Propos
              </Link>
              <Link to="/services" className="block text-gray-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link to="/areas" className="block text-gray-300 hover:text-white transition-colors">
                Zones d'Opération
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Goma, Nord-Kivu</p>
              <p>RD Congo</p>
              <a href="tel:+243970407672" className="block hover:text-white transition-colors">
                +243 970 407 672
              </a>
              <a href="mailto:contact@charidinintegrity.com" className="block hover:text-white transition-colors">
                contact@charidinintegrity.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} CHARIDIN Integrity Group. Tous droits réservés.</p>
            <div className="flex gap-4">
              <a href="https://wa.me/243970407672" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                WhatsApp
              </a>
              <span>•</span>
              <Link to="/contact" className="hover:text-white transition-colors">
                Nous Contacter
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}