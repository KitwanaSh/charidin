import Section from '../components/common/Section';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      {/* Page Header */}
      <Section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            À Propos de Nous
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Votre partenaire régional de confiance en approvisionnement et coordination logistique
          </p>
        </div>
      </Section>

      {/* Who We Are */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Qui Sommes-Nous ?
          </h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              <span className="font-semibold text-primary">CHARIDIN Integrity Group</span> est un prestataire de services spécialisé dans l’approvisionnement et la coordination logistique, accompagnant les ONG, les institutions gouvernementales et les entreprises privées dans la mise en œuvre efficace de leurs opérations.
            </p>
            
            <p>
              Basée à Goma, au cœur de la région des Grands Lacs, notre entreprise s’appuie sur une connaissance approfondie du terrain et des réalités opérationnelles locales et régionales.
            </p>
            
            <p>
            Nous intervenons comme un partenaire de confiance dans l’évaluation des besoins, l’identification et la sélection des fournisseurs, la négociation, le suivi des commandes, ainsi que la coordination des livraisons jusqu’au point final d’utilisation.
            </p>
          </div>
        </div>
      </Section>

      {/* Vision & Mission */}
      <Section className="bg-gray-50">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Vision */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Notre Vision
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Devenir un partenaire de référence régional de confiance en matière de procurement et de logistique à travers l'Afrique de l'Est et Australe, guidés par l'intégrité et la dignité humaine.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Notre Mission
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Fournir des solutions de procurement et de logistique fiables, opportunes et adaptées au contexte pour les opérations humanitaires, institutionnelles et commerciales, guidées par l'honnêteté, la passion et l'engagement.
            </p>
          </div>
        </div>
      </Section>

      {/* Our Values */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Nos Valeurs Fondamentales
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Intégrité',
                description: 'Nous opérons avec transparence et honnêteté dans toutes nos transactions.',
              },
              {
                title: 'Dignité',
                description: 'Nous respectons la dignité humaine dans toutes nos relations professionnelles.',
              },
              {
                title: 'Fiabilité',
                description: 'Nos clients peuvent compter sur nous pour des livraisons ponctuelles et de qualité.',
              },
              {
                title: 'Excellence',
                description: 'Nous visons l\'excellence dans chaque aspect de notre service.',
              },
              {
                title: 'Engagement',
                description: 'Nous sommes dévoués au succès de nos partenaires et clients.',
              },
              {
                title: 'Adaptabilité',
                description: 'Nous nous adaptons aux réalités du terrain et aux besoins changeants.',
              },
            ].map((value, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">
                    {value.title}
                  </h3>
                  <p className="text-gray-700">
                    {value.description}
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
            Travaillons Ensemble
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Découvrez comment nous pouvons soutenir vos opérations avec nos solutions de procurement et logistique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <Button variant="outline" className="bg-white text-primary hover:bg-gray-100 border-white w-full sm:w-auto">
                Nos Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="bg-transparent border-2 border-white hover:bg-white hover:text-primary w-full sm:w-auto">
                Contactez-Nous
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}