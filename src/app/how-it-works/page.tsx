import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InteractiveExperience from "@/components/how-it-works/InteractiveExperience";
import ScienceBreakdown from "@/components/how-it-works/ScienceBreakdown";

const HowItWorksPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-gray-800 dark:text-white">How DissolvaGum Works</h1>
          <ScienceBreakdown />
          {/* Technical Implementation details can be added here or as a separate component */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;

