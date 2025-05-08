import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders"; // Import the new ClientProviders component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DissolvaGum - Chew Some Gum, Skip the Mess",
  description: "Experience DissolvaGum: the eco-friendly, long-lasting chewing gum that dissolves completely, leaving no sticky waste. Shop now for a cleaner chew!",
  keywords: "dissolving gum, eco-friendly gum, biodegradable gum, no waste gum, spearmint, peppermint, fruit mix, innovative gum",
  openGraph: {
    title: "DissolvaGum - Chew Some Gum, Skip the Mess",
    description: "The revolutionary chewing gum that disappears. Eco-friendly, long-lasting, and no sticky waste.",
    type: "website",
    url: "https://dissolvagum.example.com", // Placeholder URL
    images: [
      {
        url: "https://dissolvagum.example.com/og-image.png", // Placeholder OG image URL
        width: 1200,
        height: 630,
        alt: "DissolvaGum Product Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DissolvaGum - Chew Some Gum, Skip the Mess",
    description: "Eco-friendly, dissolvable chewing gum. No mess, no waste!",
    images: ["https://dissolvagum.example.com/twitter-image.png"], // Placeholder Twitter image URL
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
        {/* Placeholder for Favicon links */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {/* Basic Schema Markup for Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "DissolvaGum",
            "url": "https://dissolvagum.example.com", // Placeholder URL
            "logo": "https://dissolvagum.example.com/logo.png", // Placeholder Logo URL
            "description": "Eco-friendly, dissolvable chewing gum."
          })}
        </script>
      </head>
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900 transition-colors duration-300`}>
        <ClientProviders>
          {children}
        </ClientProviders>
        {/* Placeholders for global scripts moved to ClientProviders or specific pages if they need client-side logic */}
      </body>
    </html>
  );
}

