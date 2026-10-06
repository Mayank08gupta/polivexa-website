import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import WhyChooseSection from "../components/WhyChooseSection";
import ProcessSection from "../components/ProcessSection";
import IndustriesSection from "../components/IndustriesSection";
import CTASection from "../components/CTASection";

function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <ProcessSection />
      <IndustriesSection />
      <CTASection />
    </main>
  );
}

export default Home;