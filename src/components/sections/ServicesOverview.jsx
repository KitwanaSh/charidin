import Section from '../common/Section';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

export default function ServicesOverview() {
  const services = [
    {
      title: 'Approvisionnement & Achats',
      description: 'Achat local et régional, gestion des commandes, négociation avec les fournisseurs.',
    },
    {
      title: 'Sourcing International & Régional',
      description: 'Approvisionnement depuis Dubaï et la Chine, fourniture à travers l\'Afrique de l\'Est et Australe.',
    },
    {
      title: 'Coordination Logistique',
      description: 'Coordination du transport local et régional, suivi des livraisons, support pour le dernier kilomètre.',
    },
    {
      title: 'Support Institutionnel & Corporate',
      description: 'Support opérationnel pour ONG, services aux institutions gouvernementales et entreprises privées.',
    },
  ];

  return (
    <Section className="bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Nos Services
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Des solutions complètes d’approvisionnement et de coordination logistique adaptées à vos besoins
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {services.map((service, index) => (
          <div 
            key={index}
            className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
          >
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              {service.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link to="/services">
          <Button>
            Voir Tous les Services
          </Button>
        </Link>
      </div>
    </Section>
  );
}