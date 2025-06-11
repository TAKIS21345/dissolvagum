import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next";
import SurveyPopupClientWrapper from "@/components/SurveyPopupClientWrapper";

const inter = Inter({ subsets: ["latin"], display: 'swap' });

export const metadata: Metadata = {
  title: "DissolvaGum - Chew Some Gum, Skip the Mess | Eco-Friendly Gum | Official Site",
  description: "DissolvaGum is a hypothetical concept for an eco-friendly, dissolvable chewing gum. This website is for awareness and demonstration purposes only. Discover sustainable, plant-based gum alternatives for a cleaner planet. Join us in bringing this innovative product to life!",
  keywords: [
    "dissolvagum", "dissolva gum", "dissolvable gum", "eco-friendly gum", "biodegradable gum", "plastic free gum", "sustainable gum", "plant-based gum", "vegan gum", "natural gum", "zero waste gum", "environmentally friendly gum", "gum that dissolves", "compostable gum", "green chewing gum", "clean planet", "litter-free gum", "DissolvaGum official", "DissolvaGum shop", "DissolvaGum buy", "DissolvaGum website", "best eco gum", "healthy chewing gum", "sugar free gum", "innovative gum", "dissolving gum", "oral care", "fresh breath", "gum for environment"
  ],
  openGraph: {
    title: "DissolvaGum - Chew Some Gum, Skip the Mess | Eco-Friendly Gum | Official Site",
    description: "DissolvaGum is a hypothetical concept for an eco-friendly, dissolvable chewing gum. No mess, no waste—just pure enjoyment and a cleaner planet.",
    type: "website",
    url: "https://dissolvagum.com",
    images: [
      {
        url: "https://dissolvagum.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "DissolvaGum Logo",
      },
    ],
    siteName: "DissolvaGum"
  },
  twitter: undefined, // No Twitter metadata since you don't have an account
  alternates: {
    canonical: "https://www.dissolvagum.com/",
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
        {/* Favicon */}
        <link rel="icon" href="/image-removebg-preview%20(12).png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/image-removebg-preview%20(12).ico" type="image/x-icon" sizes="32x32" />
        <link rel="shortcut icon" href="/image-removebg-preview%20(12).png" type="image/png" />
        <link rel="apple-touch-icon" href="/image-removebg-preview%20(12).png" />
        
        {/* Meta Tags */}
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
        <meta property="og:image:alt" content="DissolvaGum Logo" />

        <meta name="description" content="DissolvaGum is a hypothetical concept for an eco-friendly, dissolvable chewing gum. This website is for awareness and demonstration purposes only. Discover sustainable, plant-based gum alternatives for a cleaner planet. Join us in bringing this innovative product to life!" />
        <meta name="keywords" content="dissolvagum, dissolva gum, dissolvable gum, eco-friendly gum, biodegradable gum, plastic free gum, sustainable gum, plant-based gum, vegan gum, natural gum, zero waste gum, environmentally friendly gum, gum that dissolves, compostable gum, green chewing gum, clean planet, litter-free gum, DissolvaGum official, DissolvaGum shop, DissolvaGum buy, DissolvaGum website, best eco gum, healthy chewing gum, sugar free gum, innovative gum, dissolving gum, oral care, fresh breath, gum for environment" />
        <meta name="subject" content="Eco-Friendly Dissolvable Chewing Gum" />
        <meta name="language" content="English" />
        <meta name="coverage" content="Worldwide" />
        <meta name="google-site-verification" content="U2zmStviN-onNwcuImdTdo-Lt1iflXPkxbUOwHAt0NU" />

        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
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
        ])}} />
      </head>
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900 transition-colors duration-300`}>
        <div className="bg-yellow-200 text-yellow-900 text-center py-3 px-4 font-semibold border-b border-yellow-400">
          DissolvaGum is a hypothetical concept and not a real product. This website is for awareness and demonstration purposes only. We are seeking interest from businesses, supporters, and potential partners!
        </div>
        <SurveyPopupClientWrapper />
        <ClientProviders>
          {children}
          <Analytics />
          <SpeedInsights />
        </ClientProviders>
      </body>
    </html>
  );
}
