import Section from '../components/common/Section';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      category: 'Approvisionnement & Achats',
      description: 'Des solutions complètes d’approvisionnement adaptées à vos besoins spécifiques :',
      items: [
        'Achats locaux et régionaux',
        'Gestion des commandes de bout en bout',
        'Négociation avec les fournisseurs',
        'Évaluation et sélection de fournisseurs',
        'Suivi de la qualité des produits',
      ],
    },
    {
      category: 'Approvisionnement international et régional',
      description: 'Un accès à un réseau fiable de fournisseurs internationaux et régionaux:',
      items: [
        'Sourcing depuis Dubaï et la Chine',
        'Approvisionnement à travers l\'Afrique de l\'Est et Australe',
        'Contrôle qualité de base',
        'Vérification de la conformité des produits',
        'Gestion de la documentation et des certifications',
      ],
    },
    {
      category: 'Coordination Logistique',
      description: 'Gestion efficace de la chaîne d\'approvisionnement du départ à la fin.',
      items: [
        'Coordination du transport local et régional',
        'Suivi et traçabilité des livraisons',
        'Support pour le dernier kilomètre',
        'Gestion des documents de transport',
        'Optimisation des itinéraires',
      ],
    },
    {
      category: 'Appui institutionnel et aux entreprises',
      description: 'Services personnalisés pour organisations et entreprises.',
      items: [
        'Appui opérationnel aux ONG',
        'Services aux institutions gouvernementales',
        'Solutions pour entreprises privées',
        'Gestion de projets d\'approvisionnement',
        'Consultation et conseil en procurement',
      ],
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <Section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Nos Services
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
          Des solutions complètes d’approvisionnement et de coordination logistique adaptées à vos besoins
          </p>
        </div>
      </Section>

      {/* Services Overview */}
      <Section>
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ce Que Nous Offrons
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Chez CHARIDIN Integrity Group, nous proposons une gamme complète de services d’approvisionnement et de logistique, conçus pour répondre aux besoins des organisations humanitaires, des institutions gouvernementales et des entreprises privées
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="bg-primary/5 p-6 border-b border-gray-100">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  {service.category}
                </h3>
                <p className="text-gray-700 text-lg">
                  {service.description}
                </p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-700 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* How We Work */}
      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Notre Processus de Travail
          </h2>

          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Évaluation des Besoins & Devis',
                description: 'Analyse approfondie de vos besoins et préparation d\'un devis détaillé.',
              },
              {
                step: '02',
                title: 'Identification & Négociation',
                description: 'Sélection des fournisseurs et négociation des meilleures conditions.',
              },
              {
                step: '03',
                title: 'Contrôle Qualité & Documentation',
                description: 'Vérification de la conformité et préparation de la documentation requise.',
              },
              {
                step: '04',
                title: 'Coordination & Livraison',
                description: 'Gestion complète de la logistique jusqu\'à la destination finale.',
              },
              {
                step: '05',
                title: 'Remise Finale & Suivi',
                description: 'Livraison au point d\'utilisation et suivi post-livraison.',
              },
            ].map((process, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{process.step}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-primary">
                    {process.title}
                  </h3>
                  <p className="text-gray-700 text-lg">
                    {process.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Besoin de Nos Services ?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
          Contactez-nous pour discuter de vos besoins en approvisionnement et logistique.
          </p>
          <Link to="/contact">
            <Button variant="outline" className="bg-white text-primary hover:bg-gray-100 border-white w-full sm:w-auto">
              Demander un Devis Gratuit
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}