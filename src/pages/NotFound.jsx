import Section from '../components/common/Section';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <Section className="py-32">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-6">Page Non Trouvée</h2>
        <p className="text-gray-700 text-lg mb-8">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link to="/">
          <Button>
            Retour à l'Accueil
          </Button>
        </Link>
      </div>
    </Section>
  );
}