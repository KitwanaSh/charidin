import Section from '../common/Section';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <Section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20 md:py-32">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
          Votre Partenaire Régional de Confiance pour le Procurement et la Coordination Logistique
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-blue-100 font-light">
          Au service des ONG, Institutions Gouvernementales et Entreprises Privées à travers l'Afrique de l'Est et Australe
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Link to="/services">
            <Button variant="outline" className="bg-white text-primary hover:bg-gray-100 border-white w-full sm:w-auto">
              Nos Services
            </Button>
          </Link>
          <Link to="/contact">
            <Button className="bg-transparent border-2 border-white hover:bg-white hover:text-primary w-full sm:w-auto">
              Nous Contacter
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}