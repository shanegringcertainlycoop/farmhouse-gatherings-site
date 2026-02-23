import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import LakeSection from "@/components/LakeSection";
import AreaSection from "@/components/AreaSection";
import DetailsSection from "@/components/DetailsSection";
import InquirySection from "@/components/InquirySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <LakeSection />
        <AreaSection />
        <DetailsSection />
        <InquirySection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
