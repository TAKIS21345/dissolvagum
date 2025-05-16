import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"], display: 'swap' });

export const metadata: Metadata = {
  title: "DissolvaGum - Chew Some Gum, Skip the Mess | Eco-Friendly Gum | Official Site",
  description: "DissolvaGum is the world's first dissolvable, eco-friendly chewing gum. No mess, no waste—just pure enjoyment and a cleaner planet. Shop DissolvaGum official site for biodegradable, plastic-free gum.",
  keywords: [
    "dissolvagum", "dissolva gum", "dissolvable gum", "eco-friendly gum", "biodegradable gum", "plastic free gum", "sustainable gum", "chewing gum", "zero waste gum", "environmentally friendly gum", "gum that dissolves", "DissolvaGum official", "DissolvaGum shop", "DissolvaGum buy", "DissolvaGum website"
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
      noimageindex: false,
      maxSnippet: undefined,
      maxImagePreview: "large",
      maxVideoPreview: undefined,
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
        {/* Basic Schema Markup for Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "DissolvaGum",
            "url": "https://dissolvagum.com",
            "logo": "/image-removebg-preview%20(12).png",
            "description": "Eco-friendly, dissolvable chewing gum.",
            "sameAs": [
              "https://instagram.com/DissolvaGum"
            ]
          })}
        </script>
      </head>
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900 transition-colors duration-300`}>
        <ClientProviders>
          {children}
          <Analytics />
          <SpeedInsights />
        </ClientProviders>
      </body>
    </html>
  );
}

