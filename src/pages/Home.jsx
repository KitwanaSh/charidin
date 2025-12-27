import Hero from '../components/sections/Hero';
import Introduction from '../components/sections/Introduction';
import ServicesOverview from '../components/sections/ServicesOverview';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import CallToAction from '../components/sections/CallToAction';

export default function Home() {
  return (
    <div>
      <Hero />
      <Introduction />
      <ServicesOverview />
      <WhyChooseUs />
      <CallToAction />
    </div>
  );
}