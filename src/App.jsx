import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseSection from "./components/WhyChooseSection";
import ProcessSection from "./components/ProcessSection";
import IndustriesSection from "./components/IndustriesSection";
import CTASection from "./components/CTASection";
import Services from "./pages/Services";
import Contact from "./pages/contact";
import Careers from "./pages/careers";
import Blogs from "./pages/Blogs";
import GapAssessment from "./pages/GapAssessment";
import PrivacyCompliance from "./pages/PrivacyCompliance";
import DataProtectionAdvisory from "./pages/DataProtectionAdvisory";

import About from "./pages/About";

function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <ProcessSection />
      <IndustriesSection />
      <CTASection />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar />

        <main>
          <Routes>
            <Route path="/services/data-protection-advisory"element={<DataProtectionAdvisory />}/>
            <Route path="/services/privacy-compliance"element={<PrivacyCompliance />}/>
            <Route path="/services/dpdp-gap-assessment"element={<GapAssessment />}/>
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;