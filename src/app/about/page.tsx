import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OurStory from "@/components/about/OurStory";
import TeamBios from "@/components/about/TeamBios";
import EnvironmentalImpact from "@/components/about/EnvironmentalImpact";

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-gray-800 dark:text-white">About DissolvaGum</h1>
          <OurStory />
          <EnvironmentalImpact />
          <TeamBios />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;

