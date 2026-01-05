import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import TargetAudienceSection from "@/components/landing/TargetAudienceSection";
import CourseOutline from "@/components/landing/CourseOutline";
import InstructorSection from "@/components/landing/InstructorSection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";
import StickyCtaBar from "@/components/landing/StickyCtaBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <TargetAudienceSection />
        <CourseOutline />
        <InstructorSection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
      <StickyCtaBar />
    </div>
  );
};

export default Index;
