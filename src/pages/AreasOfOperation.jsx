import Section from '../components/common/Section';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';

export default function AreasOfOperation() {
  const regions = [
    {
      name: 'République Démocratique du Congo',
      description: 'Notre base d\'opérations à Goma nous permet de servir efficacement tout le territoire congolais, avec une expertise particulière dans la région des Grands Lacs.',
      cities: ['Goma', 'Bukavu', 'Kinshasa', 'Lubumbashi', 'Kisangani'],
      highlight: true,
    },
    {
      name: 'Afrique de l\'Est',
      description: 'Présence forte et réseau établi dans toute la région de l\'Afrique de l\'Est pour des solutions logistiques transfrontalières.',
      cities: ['Rwanda', 'Uganda', 'Kenya', 'Tanzania', 'Burundi'],
      highlight: false,
    },
    {
      name: 'Afrique Australe',
      description: 'Capacités d\'approvisionnement et de livraison étendues à travers les marchés d\'Afrique Australe.',
      cities: ['Zambie', 'Zimbabwe', 'Mozambique', 'Afrique du Sud'],
      highlight: false,
    },
    {
      name: 'Sourcing International',
      description: 'Accès direct à des fournisseurs de confiance pour des produits spécialisés et des commandes en volume.',
      cities: ['Dubaï (EAU)', 'Chine', 'Autres marchés selon besoins'],
      highlight: false,
    },
  ];

  const sectors = [
    'Environnement Humanitaire',
    'Institutions Gouvernementales',
    'Secteur Commercial',
    'Projets de Développement',
    'Urgences et Réponses Rapides',
    'Approvisionnement Corporate',
  ];

  return (
    <div>
      {/* Page Header */}
      <Section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Zones d'Opération
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Une présence régionale forte et un réseau international de confiance
          </p>
        </div>
      </Section>

      {/* Introduction */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Notre Portée Géographique
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            CHARIDIN Integrity Group opère stratégiquement depuis Goma, au cœur de la région des Grands Lacs, nous permettant de servir efficacement les environnements humanitaires, institutionnels et commerciaux à travers l'Afrique de l'Est, l'Afrique Australe et au-delà.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Notre position géographique unique, combinée à notre réseau international de fournisseurs, nous permet de fournir des solutions complètes de procurement et logistique adaptées aux réalités locales.
          </p>
        </div>
      </Section>

      {/* Regions */}
      <Section className="bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Nos Régions d'Intervention
          </h2>

          <div className="space-y-6">
            {regions.map((region, index) => (
              <div 
                key={index}
                className={`rounded-lg overflow-hidden shadow-md border ${
                  region.highlight 
                    ? 'border-primary bg-primary/5' 
                    : 'border-gray-100 bg-white'
                }`}
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-primary">
                      {region.name}
                    </h3>
                    {region.highlight && (
                      <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                        BASE PRINCIPALE
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    {region.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-primary mb-3">Couverture:</h4>
                    <div className="flex flex-wrap gap-2">
                      {region.cities.map((city, idx) => (
                        <span 
                          key={idx}
                          className="bg-white border border-primary/20 text-primary px-4 py-2 rounded-full text-sm"
                        >
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Sectors We Serve */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Secteurs d'Intervention
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {sectors.map((sector, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-6 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg font-medium text-gray-800">
                  {sector}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Strategic Advantage */}
      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Notre Avantage Stratégique
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">
                Position Centrale
              </h3>
              <p className="text-gray-700">
                Goma offre un accès privilégié aux marchés de l'Afrique de l'Est et des Grands Lacs
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">
                Réseau Étendu
              </h3>
              <p className="text-gray-700">
                Connexions établies du Congo à l'Afrique Australe, Dubaï et la Chine
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">
                Expertise Locale
              </h3>
              <p className="text-gray-700">
                Connaissance approfondie des contextes opérationnels et réglementaires
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Travaillons Ensemble
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Peu importe où se trouvent vos opérations, nous avons les capacités de vous servir efficacement.
          </p>
          <Link to="/contact">
            <Button variant="outline" className="bg-white text-primary hover:bg-gray-100 border-white w-full sm:w-auto">
              Contactez-Nous Aujourd'hui
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}