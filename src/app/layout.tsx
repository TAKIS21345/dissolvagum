import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"], display: 'swap' });

export const metadata: Metadata = {
  title: "DissolvaGum - Chew Some Gum, Skip the Mess | Eco-Friendly Gum | Official Site",
  description: "DissolvaGum is the world's first dissolvable, eco-friendly chewing gum. Enjoy plastic-free, biodegradable gum with zero waste. Discover sustainable, plant-based gum alternatives for a cleaner planet. Shop DissolvaGum for natural, vegan, and environmentally friendly chewing gum that dissolves completely—no mess, no litter, just pure flavor and freshness.",
  keywords: [
    "dissolvagum", "dissolva gum", "dissolvable gum", "eco-friendly gum", "biodegradable gum", "plastic free gum", "sustainable gum", "plant-based gum", "vegan gum", "natural gum", "zero waste gum", "environmentally friendly gum", "gum that dissolves", "compostable gum", "green chewing gum", "clean planet", "litter-free gum", "DissolvaGum official", "DissolvaGum shop", "DissolvaGum buy", "DissolvaGum website", "best eco gum", "healthy chewing gum", "sugar free gum", "innovative gum", "dissolving gum", "oral care", "fresh breath", "gum for environment"
  ],
  openGraph: {
    title: "DissolvaGum - Chew Some Gum, Skip the Mess | Eco-Friendly Gum | Official Site",
    description: "DissolvaGum is the world's first dissolvable, eco-friendly chewing gum. No mess, no waste—just pure enjoyment and a cleaner planet.",
    type: "website",
    url: "https://dissolvagum.com",
    images: [
      {
        url: "https://dissolvagum.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "DissolvaGum Product Showcase",
      },
    ],
    siteName: "DissolvaGum"
  },
  twitter: {
    card: "summary_large_image",
    title: "DissolvaGum - Chew Some Gum, Skip the Mess | Eco-Friendly Gum | Official Site",
    description: "DissolvaGum is the world's first dissolvable, eco-friendly chewing gum. No mess, no waste—just pure enjoyment and a cleaner planet.",
    images: ["https://dissolvagum.com/twitter-image.png"],
    site: "@DissolvaGum",
    creator: "@DissolvaGum"
  },
  alternates: {
    canonical: "https://dissolvagum.com",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon links updated to use the custom uploaded favicon */}
        <link rel="icon" href="/image-removebg-preview%20(12).png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/image-removebg-preview%20(12).ico" type="image/x-icon" sizes="32x32" />
        <link rel="shortcut icon" href="/image-removebg-preview%20(12).png" type="image/png" />
        <link rel="apple-touch-icon" href="/image-removebg-preview%20(12).png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="author" content="DissolvaGum" />
        <meta name="theme-color" content="#14b8a6" />
        <meta name="copyright" content="DissolvaGum" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DissolvaGum" />
        <meta property="og:url" content="https://dissolvagum.com" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:image:alt" content="DissolvaGum Product Showcase" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DissolvaGum" />
        <meta name="twitter:creator" content="@DissolvaGum" />
        <meta name="twitter:image" content="/twitter-image.png" />
        <meta name="twitter:image:alt" content="DissolvaGum Product Showcase" />
        <meta name="description" content="DissolvaGum is the world's first dissolvable, eco-friendly chewing gum. Enjoy plastic-free, biodegradable gum with zero waste. Discover sustainable, plant-based gum alternatives for a cleaner planet. Shop DissolvaGum for natural, vegan, and environmentally friendly chewing gum that dissolves completely—no mess, no litter, just pure flavor and freshness." />
        <meta name="keywords" content="dissolvagum, dissolva gum, dissolvable gum, eco-friendly gum, biodegradable gum, plastic free gum, sustainable gum, plant-based gum, vegan gum, natural gum, zero waste gum, environmentally friendly gum, gum that dissolves, compostable gum, green chewing gum, clean planet, litter-free gum, DissolvaGum official, DissolvaGum shop, DissolvaGum buy, DissolvaGum website, best eco gum, healthy chewing gum, sugar free gum, innovative gum, dissolving gum, oral care, fresh breath, gum for environment" />
        <meta name="subject" content="Eco-Friendly Dissolvable Chewing Gum" />
        <meta name="language" content="English" />
        <meta name="coverage" content="Worldwide" />
        {/* Enhanced Schema Markup for Organization and FAQ */}
        <script type="application/ld+json">
          {JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "DissolvaGum",
              "url": "https://dissolvagum.com",
              "logo": "/image-removebg-preview%20(12).png",
              "description": "Eco-friendly, dissolvable chewing gum. Plastic-free, biodegradable, and sustainable.",
              "sameAs": [
                "https://instagram.com/DissolvaGum"
              ],
              "contactPoint": [{
                "@type": "ContactPoint",
                "telephone": "+1-800-555-0199",
                "contactType": "Customer Service",
                "areaServed": "Worldwide",
                "availableLanguage": ["English"]
              }],
              "founder": "DissolvaGum Team",
              "foundingDate": "2024-01-01",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Global",
                "addressCountry": "Worldwide"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is DissolvaGum?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "DissolvaGum is the world's first eco-friendly, dissolvable chewing gum. It is plastic-free, biodegradable, and designed to dissolve completely, leaving no waste behind."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is DissolvaGum biodegradable and plastic-free?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, DissolvaGum is made from natural, plant-based ingredients and contains no plastic. It is fully biodegradable and safe for the environment."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Where can I buy DissolvaGum?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can purchase DissolvaGum directly from our official website at dissolvagum.com."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is DissolvaGum vegan and sugar-free?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, DissolvaGum is vegan, sugar-free, and made with natural flavors for a healthy chewing experience."
                  }
                }
              ]
            }
          ])}
        </script>
      </head>
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900 transition-colors duration-300`}>
        {/* SEO-optimized visible content for homepage */}
        <header className="w-full bg-teal-600 text-white py-6 px-4 text-center shadow-md">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">DissolvaGum: The World’s First Dissolvable, Eco-Friendly Chewing Gum</h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl">Enjoy a revolutionary gum experience—plastic-free, biodegradable, and zero waste. DissolvaGum dissolves completely, leaving no mess behind. Choose a sustainable, plant-based, and vegan gum for a cleaner planet and a fresher you.</p>
        </header>
        <main className="flex flex-col items-center justify-center px-4 py-8">
          <section className="max-w-3xl w-full mb-8">
            <h2 className="text-2xl font-semibold mb-4">Why Choose DissolvaGum?</h2>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>100% biodegradable and plastic-free chewing gum</li>
              <li>Made from natural, plant-based, and vegan ingredients</li>
              <li>Zero waste—gum dissolves completely after chewing</li>
              <li>Fresh, long-lasting flavors with no artificial sweeteners</li>
              <li>Safe for the environment and your health</li>
              <li>Perfect for eco-conscious consumers and families</li>
            </ul>
          </section>
          <section className="max-w-3xl w-full mb-8">
            <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold">What makes DissolvaGum different from regular gum?</h3>
                <p>DissolvaGum is the only gum that dissolves completely after chewing, eliminating litter and plastic waste. It’s made from natural, plant-based ingredients and is safe for the environment.</p>
              </div>
              <div>
                <h3 className="font-bold">Is DissolvaGum vegan and sugar-free?</h3>
                <p>Yes! Our gum is vegan, sugar-free, and contains no artificial sweeteners or preservatives.</p>
              </div>
              <div>
                <h3 className="font-bold">Where can I buy DissolvaGum?</h3>
                <p>You can purchase directly from our <a href="/shop" className="text-teal-700 underline">official shop</a> or find us at select eco-friendly retailers.</p>
              </div>
              <div>
                <h3 className="font-bold">Is DissolvaGum safe for children?</h3>
                <p>Absolutely! DissolvaGum is made from safe, natural ingredients and is suitable for all ages.</p>
              </div>
            </div>
          </section>
          <section className="max-w-3xl w-full mb-8">
            <h2 className="text-2xl font-semibold mb-4">Join the Eco-Friendly Gum Revolution</h2>
            <p className="text-lg">Switch to DissolvaGum and help reduce plastic pollution. Our mission is to make chewing gum sustainable, enjoyable, and guilt-free. <a href="/about" className="text-teal-700 underline">Learn more about our story</a> or <a href="/contact" className="text-teal-700 underline">contact us</a> for wholesale and partnership opportunities.</p>
          </section>
        </main>
        <ClientProviders>
          {children}
          <Analytics />
          <SpeedInsights />
        </ClientProviders>
      </body>
    </html>
  );
}

