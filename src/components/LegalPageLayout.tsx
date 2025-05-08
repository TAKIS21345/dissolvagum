import Header from "@/components/Header";
import Footer from "@/components/Footer";

const LegalPageLayout = ({ title, children }: { title: string, children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <article className="prose dark:prose-invert lg:prose-xl max-w-4xl mx-auto">
          <h1>{title}</h1>
          {children}
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default LegalPageLayout;

