import Section from '../common/Section';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

export default function CallToAction() {
  return (
    <Section className="bg-primary text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Prêt à Collaborer avec Nous ?
        </h2>
        
        <p className="text-xl mb-8 text-blue-100">
          Contactez-nous dès aujourd'hui pour discuter de vos besoins en procurement et logistique.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <Button variant='outline' className="bg-white text-primary hover:bg-gray-100 border-white w-full sm:w-auto">
              Demander un Devis
            </Button>
          </Link>
          <a href="tel:+243970407672">
            <Button className="bg-transparent border-2 border-white hover:bg-white hover:text-primary w-full sm:w-auto">
              Appelez-Nous
            </Button>
          </a>
        </div>

        <div className="mt-8 pt-8 border-t border-blue-700">
          <p className="text-sm text-blue-200">
            Nous travaillons sur base de contrats signés après correspondance ou rencontre physique
          </p>
        </div>
      </div>
    </Section>
  );
}