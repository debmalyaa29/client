"use client";

import React from "react";
import Link from "next/link";
import { Cookie, ArrowLeft, Settings2, ShieldCheck, Mail, MapPin } from "lucide-react";
import { businessData } from "@/data/business";
import { triggerOpenCookiePreferences } from "@/components/compliance/CookieConsentBanner";
import Footer from "@/components/footer/Footer";

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-[#F5F0E6] text-[#25221D] flex flex-col font-sans selection:bg-[#B08A3E] selection:text-[#FBF8F1]">
      <header className="sticky top-0 z-40 bg-[#F5F0E6]/95 backdrop-blur-md border-b border-[#25221D]/10 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#25221D] hover:text-[#B08A3E] transition-colors focus-visible:ring-2 focus-visible:ring-[#B08A3E] focus-visible:outline-hidden"
          >
            <ArrowLeft className="w-4 h-4 text-[#806329]" />
            <span>Return to Plant Overview</span>
          </Link>

          <div className="text-xs font-mono uppercase tracking-wider text-[#806329]">
            COOKIE & STORAGE GOVERNANCE
          </div>
        </div>
      </header>

      <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
        <article className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4 border-b border-[#25221D]/15 pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EFE7D8] border border-[#B08A3E]/30 rounded-xs text-xs font-mono text-[#806329] font-bold">
              <Cookie className="w-3.5 h-3.5" />
              <span>STORAGE DISCLOSURE • CALCUTTA AGRI TECH</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#25221D] leading-tight">
              Cookie & Local Storage Policy
            </h1>
            <div className="text-xs font-mono text-[#635C52] space-x-4">
              <span>Effective Date: January 1, 2026</span>
              <span>•</span>
              <span>Last Updated: October 2026</span>
              <span>•</span>
              <span>Transparent Governance</span>
            </div>
          </div>

          <div className="p-6 rounded-xs bg-[#FBF8F1] border border-[#B08A3E]/30 text-xs sm:text-sm text-[#635C52] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 leading-relaxed">
            <div className="space-y-1">
              <div className="font-mono uppercase font-bold text-[#25221D]">
                Manage Your Personal Storage Choice
              </div>
              <p>
                You can review, modify, or immediately withdraw your consent for optional technologies at any time.
              </p>
            </div>
            <button
              type="button"
              onClick={() => triggerOpenCookiePreferences()}
              className="px-4 py-2.5 bg-[#25221D] text-[#FBF8F1] text-xs font-mono uppercase tracking-wider rounded-xs border border-[#B08A3E] hover:bg-[#342F28] transition-colors flex items-center gap-2 shrink-0 focus-visible:ring-2 focus-visible:ring-[#B08A3E] focus-visible:outline-hidden"
            >
              <Settings2 className="w-3.5 h-3.5 text-[#D6BC7A]" />
              <span>Open Cookie Preferences</span>
            </button>
          </div>

          <section className="space-y-4 text-xs sm:text-sm text-[#635C52] leading-relaxed">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#25221D]">
              1. What Are Cookies and Local Storage?
            </h2>
            <p>
              Cookies are small text files placed on your device by websites that you visit. In addition to HTTP cookies, modern web browsers offer related client-side storage technologies, such as <strong className="text-[#25221D]">localStorage</strong> and <strong className="text-[#25221D]">sessionStorage</strong>, which allow websites to preserve state locally on your machine without transmitting unnecessary tracking payloads with every server request.
            </p>
            <p>
              Calcutta Agri Tech prioritizes privacy-first architecture: we minimize client-side storage and avoid third-party marketing tags entirely.
            </p>
          </section>

          <section className="space-y-4 text-xs sm:text-sm text-[#635C52] leading-relaxed">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#25221D]">
              2. Inventory of Technologies Used on This Website
            </h2>
            <p>
              Below is the comprehensive, verified inventory of client-side storage mechanisms utilized across the Calcutta Agri Tech platform:
            </p>

            <div className="overflow-x-auto border border-[#25221D]/15 rounded-xs">
              <table className="min-w-full divide-y divide-[#25221D]/10 text-xs text-left">
                <thead className="bg-[#EFE7D8] font-mono uppercase text-[#25221D]">
                  <tr>
                    <th className="px-4 py-3">Storage Key</th>
                    <th className="px-4 py-3">Type</th>
                    <th className="px-4 py-3">Category</th>
                    <th className="px-4 py-3">Lifespan</th>
                    <th className="px-4 py-3">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#25221D]/10 bg-[#FBF8F1] text-[#635C52] font-mono">
                  <tr>
                    <td className="px-4 py-3 font-bold text-[#25221D]">cat_cookie_consent</td>
                    <td className="px-4 py-3">localStorage</td>
                    <td className="px-4 py-3 text-[#806329] font-semibold">Strictly Necessary</td>
                    <td className="px-4 py-3">Persistent (until cleared)</td>
                    <td className="px-4 py-3 font-sans">
                      Stores user consent selections (essential vs optional) to honor your choices on subsequent visits.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-[#25221D]">Inquiry Rate Limiting</td>
                    <td className="px-4 py-3">Server Session / In-Memory</td>
                    <td className="px-4 py-3 text-[#806329] font-semibold">Security / Necessary</td>
                    <td className="px-4 py-3">60 Seconds Sliding</td>
                    <td className="px-4 py-3 font-sans">
                      Tracks submission frequency per IP address to safeguard engineering inquiry forms against spam and automated bot flooding.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-4 text-xs sm:text-sm text-[#635C52] leading-relaxed">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#25221D]">
              3. Absence of Third-Party Advertising Trackers
            </h2>
            <p>
              Our website does not deploy commercial retargeting cookies, Facebook/Meta tracking pixels, Google Ads remarketing beacons, or third-party behavioral profiling scripts. All interactive 3D visualizations (such as our Three.js Earth model) and GSAP animations run entirely client-side using local assets without exchanging user telemetry with external surveillance networks.
            </p>
          </section>

          <section className="space-y-4 text-xs sm:text-sm text-[#635C52] leading-relaxed">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#25221D]">
              4. How to Control and Clear Storage via Browser
            </h2>
            <p>
              In addition to our on-site preference center, you can control or clear cookies and local storage through your browser settings:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Google Chrome:</strong> Settings → Privacy and Security → Site Settings → Cookies and data stored.
              </li>
              <li>
                <strong>Mozilla Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data.
              </li>
              <li>
                <strong>Apple Safari:</strong> Preferences → Privacy → Manage Website Data.
              </li>
              <li>
                <strong>Microsoft Edge:</strong> Settings → Cookies and site permissions → Manage and delete cookies and site data.
              </li>
            </ul>
            <p>
              Note that clearing all local storage will reset your saved cookie preferences banner and you will be presented with the consent notice upon your next visit.
            </p>
          </section>

          <section className="space-y-4 text-xs sm:text-sm text-[#635C52] leading-relaxed">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#25221D]">
              5. Contacting Our Data Desk
            </h2>
            <div className="bg-[#FBF8F1] border border-[#25221D]/15 rounded-xs p-6 space-y-3 font-mono text-xs">
              <div className="flex items-center gap-2 font-bold text-[#25221D] uppercase">
                <ShieldCheck className="w-4 h-4 text-[#806329]" />
                <span>Calcutta Agri Tech Technical Desk</span>
              </div>
              <div className="space-y-1.5 text-[#635C52]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#806329]" />
                  <span>{businessData.contact.address}, {businessData.contact.city} — {businessData.contact.pincode}, West Bengal, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#806329]" />
                  <a href={`mailto:${businessData.contact.email}`} className="text-[#806329] hover:underline">
                    {businessData.contact.email}
                  </a>
                </div>
              </div>
            </div>
          </section>

        </article>
      </main>

      <Footer />
    </div>
  );
}
