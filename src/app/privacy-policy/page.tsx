import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { businessData } from "@/data/business";
import { ShieldCheck, ArrowLeft, Mail, MapPin, Phone } from "lucide-react";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Calcutta Agri Tech",
  description: "Official Privacy Policy for Calcutta Agri Tech. Details our data collection practices, inquiry processing, storage security, and customer privacy rights.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#F5F0E6] text-[#25221D] flex flex-col font-sans selection:bg-[#B08A3E] selection:text-[#FBF8F1]">
      {/* Top Header Navigation */}
      <header className="sticky top-0 z-40 bg-[#F5F0E6]/95 backdrop-blur-md border-b border-[#25221D]/10 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#25221D] hover:text-[#B08A3E] transition-colors focus-visible:ring-2 focus-visible:ring-[#B08A3E] focus-visible:outline-hidden"
          >
            <ArrowLeft className="w-4 h-4 text-[#806329]" />
            <span>Return to Plant Overview</span>
          </Link>

          <div className="text-[11px] font-mono uppercase tracking-widest text-[#806329]">
            GOVERNANCE & COMPLIANCE
          </div>
        </div>
      </header>

      {/* Main Document Body */}
      <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
        <article className="max-w-4xl mx-auto space-y-12">
          
          {/* Header */}
          <div className="space-y-4 border-b border-[#25221D]/15 pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EFE7D8] border border-[#B08A3E]/30 rounded-xs text-xs font-mono text-[#806329] font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>OFFICIAL PRIVACY NOTICE • CALCUTTA AGRI TECH</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#25221D] leading-tight">
              Privacy Policy & Data Processing Notice
            </h1>
            <div className="text-xs font-mono text-[#635C52] space-x-4">
              <span>Effective Date: January 1, 2026</span>
              <span>•</span>
              <span>Last Updated: October 2026</span>
              <span>•</span>
              <span>Version 1.2</span>
            </div>
          </div>

          {/* Policy Overview Callout */}
          <div className="p-6 rounded-xs bg-[#FBF8F1] border border-[#B08A3E]/30 text-xs sm:text-sm text-[#635C52] space-y-2 leading-relaxed">
            <div className="font-mono uppercase font-bold text-[#25221D]">
              Summary of Our Industrial Privacy Commitment
            </div>
            <p>
              Calcutta Agri Tech operates an industrial rice milling equipment platform and engineering desk. We collect personal contact details solely to evaluate technical inquiries, formulate commercial quotations, coordinate on-site plant inspections, and maintain direct client communications. We never sell, rent, or trade your data to third-party advertisers or data brokers.
            </p>
          </div>

          {/* Section 1 */}
          <section className="space-y-4 text-xs sm:text-sm text-[#635C52] leading-relaxed">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#25221D]">
              1. Information We Collect
            </h2>
            <p>
              When you interact with Calcutta Agri Tech via our website forms, technical inquiry modal, or direct correspondence, we may collect the following personal and operational details:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-[#25221D]">Contact Identifiers:</strong> Full name, mill or company name, contact phone number, and official email address.
              </li>
              <li>
                <strong className="text-[#25221D]">Operational Milling Specifications:</strong> Target machinery of interest (e.g., Destoner, Optical Sortex, Pneumatic Husker, Turnkey Plant), required capacity in tons per hour (TPH), plant location, raw paddy varieties (e.g., Swarna, Minikit, Gobindobhog), and technical project requirements.
              </li>
              <li>
                <strong className="text-[#25221D]">Technical Transmission Metadata:</strong> IP address and submission timestamps collected solely for server-side rate-limiting and preventing automated form abuse.
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-4 text-xs sm:text-sm text-[#635C52] leading-relaxed">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#25221D]">
              2. Purpose and Lawful Basis of Processing
            </h2>
            <p>
              We process personal data on the following legitimate grounds:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-[#25221D]">To Fulfill Business Requests:</strong> Reviewing incoming mill equipment requirements, preparing architectural plant layout CAD estimates, and delivering custom price proposals.
              </li>
              <li>
                <strong className="text-[#25221D]">Direct Technical Consultations:</strong> Arranging engineering calls or on-site inspections conducted by Debabrata Dey or authorized engineering personnel.
              </li>
              <li>
                <strong className="text-[#25221D]">Operational Security:</strong> Employing server-side rate limiters to protect our backend transmission infrastructure against denial-of-service attempts.
              </li>
              <li>
                <strong className="text-[#25221D]">Affirmative Consent:</strong> Where you explicitly choose to opt into optional technical updates regarding machinery upgrades or seasonal maintenance schedules.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4 text-xs sm:text-sm text-[#635C52] leading-relaxed">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#25221D]">
              3. Data Storage, Security & Service Providers
            </h2>
            <p>
              Inquiry submissions are securely transmitted over HTTPS/TLS and recorded in our managed cloud database infrastructure hosted with Supabase. We implement server-side validation, sanitized inputs, and restricted credential access. While we employ rigorous engineering measures to safeguard data integrity, no electronic transmission over the internet can be guaranteed as entirely immune from all risks.
            </p>
            <p>
              We do not share your personal information with external parties, except trusted infrastructure providers strictly required to deliver our web services (cloud hosting, database persistence) under confidentiality terms.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4 text-xs sm:text-sm text-[#635C52] leading-relaxed">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#25221D]">
              4. Data Retention and Deletion
            </h2>
            <p>
              We retain business inquiries and correspondence for the duration necessary to service active proposals, fulfill commercial contracts, provide spare parts support, and satisfy applicable accounting or statutory record-keeping standards. You may request deletion or rectification of your contact information at any time by contacting our engineering desk.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4 text-xs sm:text-sm text-[#635C52] leading-relaxed">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#25221D]">
              5. Cookies and Technical Storage
            </h2>
            <p>
              Our website uses strictly necessary local storage to preserve your privacy preference choices and protect form submissions. We do not engage in third-party cross-site advertising networks. For a detailed breakdown of all storage keys, please consult our dedicated{" "}
              <Link href="/cookie-policy" className="text-[#806329] underline hover:text-[#25221D]">
                Cookie Policy
              </Link>.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4 text-xs sm:text-sm text-[#635C52] leading-relaxed">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#25221D]">
              6. Your Rights and Contact Information
            </h2>
            <p>
              Depending on applicable jurisdiction, you have the right to request access to the personal data we hold about you, request corrections to inaccurate records, or ask for deletion of your information from our active communication registries.
            </p>
            
            <div className="bg-[#FBF8F1] border border-[#25221D]/15 rounded-xs p-6 space-y-3 font-mono text-xs">
              <div className="text-[#25221D] font-bold uppercase">
                Privacy Enquiries & Data Controller:
              </div>
              <div className="space-y-1.5 text-[#635C52]">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#25221D]">{businessData.name}</span>
                  <span>(Founder: {businessData.founder.name})</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#806329]" />
                  <span>{businessData.contact.address}, {businessData.contact.city} — {businessData.contact.pincode}, {businessData.contact.state}, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#806329]" />
                  <a href={`mailto:${businessData.contact.email}`} className="text-[#806329] hover:underline">
                    {businessData.contact.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#806329]" />
                  <span>{businessData.contact.phone}</span>
                </div>
              </div>
              <p className="text-[11px] text-[#AFA698] pt-2 border-t border-[#25221D]/10">
                Note for business owner: Formal corporate incorporation details (e.g. GSTIN / CIN) may be added upon formal administrative filing.
              </p>
            </div>
          </section>

        </article>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
