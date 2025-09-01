import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import CaseStudies from '@/components/CaseStudies';
import Testimonials from '@/components/Testimonials';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  console.log('Index component is rendering');
  
  return (
    <div className="min-h-screen bg-background">
      <div className="section-container py-20">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          ConsultPro - Premium Business Consultancy
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Testing if basic components load...
        </p>
        <div className="w-full h-64 bg-gradient-primary rounded-lg flex items-center justify-center">
          <span className="text-primary-foreground text-2xl font-bold">
            Hero Section Test
          </span>
        </div>
      </div>
    </div>
  );
};

export default Index;
