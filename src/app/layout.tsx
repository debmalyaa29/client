import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://calcuttaagritech.com"),
  title: "Calcutta Agri Tech | Industrial Rice Mill Machinery & Turnkey Solutions",
  description: "Founded by Debabrata Dey. Premier rice mill machinery, optical color sorters, precision destoners, and turnkey grain processing plants in Kolkata & Eastern India.",
  keywords: [
    "Rice Mill Machinery",
    "Calcutta Agri Tech",
    "Debabrata Dey",
    "Destoner Machine",
    "Sortex Optical Color Sorter",
    "Turnkey Rice Mill Kolkata",
    "Grain Processing Equipment West Bengal",
  ],
  authors: [{ name: "Debabrata Dey" }],
  alternates: {
    canonical: "https://calcuttaagritech.com",
  },
  openGraph: {
    title: "Calcutta Agri Tech — Engineering the Future of Rice Milling",
    description: "Industrial grain processing machinery, optical sorting, and turnkey rice mill solutions led by Debabrata Dey.",
    images: ["/images/founder_pic.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Calcutta Agri Tech",
  "description": "Premier rice mill machinery, optical color sorters, precision destoners, and turnkey grain processing plants in Kolkata & Eastern India.",
  "founder": {
    "@type": "Person",
    "name": "Debabrata Dey",
    "jobTitle": "Founder & Chief Industrial Engineer",
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "B.T. Road Industrial Corridor",
    "addressLocality": "Sodepur, Kolkata",
    "addressRegion": "West Bengal",
    "postalCode": "700113",
    "addressCountry": "IN",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 22.71,
    "longitude": 88.38,
  },
  "telephone": "+919830123456",
  "url": "https://calcuttaagritech.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#F5F0E6] text-[#25221D] font-sans antialiased selection:bg-[#B08A3E] selection:text-[#FBF8F1]">
        {children}
      </body>
    </html>
  );
}
