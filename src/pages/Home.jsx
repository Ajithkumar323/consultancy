import { useEffect } from 'react';
import Hero from '../components/home/Hero';
import ServicesSection from '../components/home/ServicesSection';
import Reviews from '../components/home/Reviews';
import GlobalPartners from '../components/home/GlobalPartners';
import WhyChooseUs from '../components/home/WhyChooseUs';
import LeadForm from '../components/home/LeadForm';
import SEO from '../components/layout/SEO';

const Home = () => {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Use a small timeout to ensure everything is rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'auto' });
        }, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <SEO 
        title="Best Education Consultancy in Tamil Nadu" 
        description="TNAEC is your trusted partner for medical and engineering admissions in India and abroad. Expert guidance for TN Engineering (SRM, VIT, SASTRA) and Top Russian/Georgian Universities."
        keywords="TN consultancy, TN engineering consultancy, best education consultancy Tamil Nadu, college admission guidance India, medical admission consultancy TN, engineering admission support, SRM admission, VIT admission, SASTRA admission, MBBS in Russia, MBBS in Georgia, TNAEC Karur"
      />
      <Hero />
      <ServicesSection />
      <GlobalPartners />
      <WhyChooseUs />
      <Reviews />
      <LeadForm />
    </div>
  );
};

export default Home;
