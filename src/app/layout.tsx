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
  openGraph: {
    title: "Calcutta Agri Tech — Engineering the Future of Rice Milling",
    description: "Industrial grain processing machinery, optical sorting, and turnkey rice mill solutions led by Debabrata Dey.",
    images: ["/images/founder_pic.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#F5F0E6] text-[#25221D] font-sans antialiased selection:bg-[#B08A3E] selection:text-[#FBF8F1]">
        {children}
      </body>
    </html>
  );
}
