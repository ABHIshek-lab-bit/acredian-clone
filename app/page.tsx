import AdvancedNavbar from './components/AdvancedNavbar';
import AdvancedHero from './components/AdvancedHero';
import AdvancedStats from './components/AdvancedStats';
import AdvancedPartners from './components/AdvancedPartners';
import AdvancedDomainExpertise from './components/AdvancedDomainExpertise';
import ImprovedCourseCards from './components/ImprovedCourseCards';
import TargetAudience from './components/TargetAudience';
import DeliveryProcess from './components/DeliveryProcess';
import FAQ from './components/FAQ';
import AdvancedTestimonials from './components/AdvancedTestimonials';
import LeadForm from './components/LeadForm';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <ParticleBackground />
      </div>
      <div className="relative z-10">
        <AdvancedNavbar />
        <AdvancedHero />
        <AdvancedStats />
        <AdvancedPartners />
        <AdvancedDomainExpertise />
        <ImprovedCourseCards />
        <TargetAudience />
        <DeliveryProcess />
        <FAQ />
        <AdvancedTestimonials />
        <LeadForm />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
