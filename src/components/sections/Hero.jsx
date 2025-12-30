import Section from '../common/Section';
import Button from '../common/Button';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg';

export default function Hero() {
  return (
    <Section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* LEFT SIDE: IMAGE + TEXT + BUTTONS */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            {/* Image container */}
            <div className="relative mb-8">
              {/* Soft decorative glow */}
              <div className="absolute -inset-4 bg-white/10 rounded-3xl blur-xl"></div>

              <img
                src={logo}
                alt="Logistique et approvisionnement"
                className="
                  relative
                  w-full
                  max-w-md
                  rounded-3xl
                  shadow-2xl
                  border
                  border-white/20
                  object-cover
                "
              />
            </div>

            {/* Paragraph */}
            <p className="text-lg md:text-xl text-blue-100 font-light mb-8 max-w-md">
              Au service des ONG, des institutions gouvernementales et des entreprises privées en République Démocratique du Congo.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link to="/services" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="bg-white text-primary hover:bg-gray-100 border-white w-full"
                >
                  Nos Services
                </Button>
              </Link>

              <Link to="/contact" className="w-full sm:w-auto">
                <Button
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-primary w-full"
                >
                  Nous Contacter
                </Button>
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE: TITLE ONLY */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Votre partenaire régional de confiance en approvisionnement et coordination logistique
            </h1>
          </div>

        </div>
      </div>
    </Section>
  );
}