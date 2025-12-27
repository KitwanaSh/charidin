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
            <span className="font-semibold text-primary">CHARIDIN Integrity Group</span> est une entreprise de services de procurement et de coordination logistique basée à Goma, en République Démocratique du Congo.
          </p>
          
          <p>
            Nous accompagnons les ONG, les institutions gouvernementales et les entreprises privées dans leurs besoins d'approvisionnement en fournissant des solutions fiables, flexibles et adaptées aux réalités locales et régionales.
          </p>
          
          <p>
            Grâce à notre solide expérience de terrain et à un réseau de fournisseurs de confiance en Afrique de l'Est, Afrique Australe, Dubaï et Chine, nous facilitons l'achat, l'approvisionnement et la livraison de biens essentiels jusqu'à la destination finale.
          </p>
        </div>
      </div>
    </Section>
  );
}