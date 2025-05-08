import HeroSection from "@/components/HeroSection";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <HeroSection />
      <TestimonialsSlider />
      {/* Other sections for the home page will go here */}
      <Footer />
    </main>
  );
}

