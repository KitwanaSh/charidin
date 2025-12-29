import Section from '../common/Section';

export default function Introduction() {
  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
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
  );
}