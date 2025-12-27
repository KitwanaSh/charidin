import Section from '../common/Section';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: 'Connaissance Approfondie du Contexte',
      description: 'Expertise locale et régionale pour des solutions adaptées aux réalités du terrain.',
    },
    {
      title: 'Réseau de Fournisseurs Solide',
      description: 'Partenariats établis à travers l\'Afrique, Dubaï et la Chine.',
    },
    {
      title: 'Flexibilité Opérationnelle',
      description: 'Adaptation rapide aux besoins changeants et aux urgences.',
    },
    {
      title: 'Transparence et Intégrité',
      description: 'Nos valeurs fondamentales dans chaque transaction.',
    },
    {
      title: 'Solutions Sur Mesure',
      description: 'Services personnalisés pour ONG, institutions et entreprises privées.',
    },
    {
      title: 'Engagement et Passion',
      description: 'Dévoués à votre réussite opérationnelle et logistique.',
    },
  ];

  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Pourquoi Choisir CHARIDIN Integrity Group ?
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((reason, index) => (
          <div 
            key={index}
            className="text-center p-6"
          >
            <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">{index + 1}</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-primary">
              {reason.title}
            </h3>
            <p className="text-gray-700">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}