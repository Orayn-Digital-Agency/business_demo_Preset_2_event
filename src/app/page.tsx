import HeroSection from "@/components/sections/HeroSection";
import QuickInfoBar from "@/components/sections/QuickInfoBar";
import StatsSection from "@/components/sections/StatsSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import GallerySection from "@/components/sections/GallerySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import LocationSection from "@/components/sections/LocationSection";
import CTASection from "@/components/sections/CTASection";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <QuickInfoBar />
        <StatsSection />
        <WhyUsSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <LocationSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
