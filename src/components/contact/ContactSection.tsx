"use client";

import React, { useState } from "react";
import { businessData } from "@/data/business";
import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowUpRight, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatusMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit request.");
      }

      setStatusMessage({ type: "success", text: data.message || "Thank you. Our engineering desk will connect shortly." });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please call our office directly.";
      setStatusMessage({ type: "error", text: msg });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#EFE7D8]/60 border-t border-[#25221D]/10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#806329] font-semibold">
              {"// SECTION 09 • ENGINEERING DESK"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#25221D] leading-tight">
              LET&apos;S BUILD OR UPGRADE <br />
              <span className="italic font-light text-[#806329]">YOUR RICE MILL FACILITY.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 text-[#635C52] text-sm sm:text-base leading-relaxed">
            Schedule an on-site technical inspection, request customized plant layout drawings, or obtain machinery price quotations directly from our Sodepur headquarters.
          </div>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Verified Business Coordinates (5 cols) */}
          <div className="lg:col-span-5 bg-[#25221D] text-[#FBF8F1] rounded-xs p-8 sm:p-10 flex flex-col justify-between border border-[#B08A3E]/40 shadow-xs space-y-8">
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-widest text-[#D6BC7A]">
                  REGISTERED HEADQUARTERS
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                  {businessData.name}
                </h3>
                <p className="text-xs text-[#AFA698] font-mono">
                  Founder & Principal: {businessData.founder.name}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#FBF8F1]/10 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#D6BC7A] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-[#FBF8F1]">Engineering Depot & Office</div>
                    <div className="text-[#AFA698]">{businessData.contact.address}</div>
                    <div className="text-[#AFA698]">{businessData.contact.city} — {businessData.contact.pincode}, {businessData.contact.state}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#D6BC7A] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-[#FBF8F1]">Direct Engineering Desk</div>
                    <a href={`tel:${businessData.contact.phone.replace(/\s+/g, "")}`} className="text-[#D6BC7A] hover:underline focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-[#D6BC7A]">
                      {businessData.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#D6BC7A] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-[#FBF8F1]">Official Inquiries</div>
                    <a href={`mailto:${businessData.contact.email}`} className="text-[#AFA698] hover:text-[#FBF8F1] focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-[#D6BC7A]">
                      {businessData.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#D6BC7A] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-[#FBF8F1]">Operational Working Hours</div>
                    <div className="text-[#AFA698]">{businessData.contact.workingHours}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Quick Consultation */}
            <div className="pt-6 border-t border-[#FBF8F1]/10">
              <a
                href={`https://wa.me/${businessData.contact.whatsapp.replace(/[^0-9]/g, "")}?text=Hello%20Calcutta%20Agri%20Tech,%20I%20would%20like%20to%20inquire%20about%20rice%20mill%20machinery.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#B08A3E] text-[#25221D] font-mono text-xs uppercase tracking-widest font-bold rounded-xs flex items-center justify-center gap-2 hover:bg-[#D6BC7A] active:scale-[0.98] transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#D6BC7A]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Technical Desk</span>
              </a>
            </div>
          </div>

          {/* Right: Direct Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#FBF8F1] border border-[#25221D]/15 rounded-xs p-8 sm:p-10 shadow-xs flex flex-col justify-between">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-[#806329] font-bold">
                  TRANSMISSION FORM
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#25221D]">
                  Request Quotation or Plant Inspection
                </h3>
              </div>

              {statusMessage && (
                <div
                  className={`p-4 rounded-xs text-xs font-mono flex items-center gap-2.5 ${
                    statusMessage.type === "success"
                      ? "bg-emerald-50 text-emerald-800 border border-emerald-300"
                      : "bg-red-50 text-red-800 border border-red-300"
                  }`}
                >
                  {statusMessage.type === "success" ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                  )}
                  <span>{statusMessage.text}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-[#25221D] font-medium">
                    Full Name / Mill Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Debabrata Dey / Bengal Rice Mill"
                    className="w-full px-3.5 py-2.5 bg-[#F5F0E6] border border-[#25221D]/20 rounded-xs text-xs font-mono text-[#25221D] focus:border-[#B08A3E] focus:ring-1 focus:ring-[#B08A3E] focus:outline-hidden"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-[#25221D] font-medium">
                    Contact Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98300 XXXXX"
                    className="w-full px-3.5 py-2.5 bg-[#F5F0E6] border border-[#25221D]/20 rounded-xs text-xs font-mono text-[#25221D] focus:border-[#B08A3E] focus:ring-1 focus:ring-[#B08A3E] focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-[#25221D] font-medium">
                  Official Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="contact@yourmill.com"
                  className="w-full px-3.5 py-2.5 bg-[#F5F0E6] border border-[#25221D]/20 rounded-xs text-xs font-mono text-[#25221D] focus:border-[#B08A3E] focus:ring-1 focus:ring-[#B08A3E] focus:outline-hidden"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-[#25221D] font-medium">
                  Requirement Details (Machinery / Capacity / Plant Location) *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your raw paddy variety (e.g. Swarna / Minikit), existing plant capacity, or machines needed (Destoner, CCD Sortex, Turnkey Plant)..."
                  className="w-full px-3.5 py-2.5 bg-[#F5F0E6] border border-[#25221D]/20 rounded-xs text-xs font-mono text-[#25221D] focus:border-[#B08A3E] focus:ring-1 focus:ring-[#B08A3E] focus:outline-hidden resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 bg-[#25221D] text-[#FBF8F1] text-xs font-mono uppercase tracking-widest border border-[#B08A3E] rounded-xs hover:bg-[#342F28] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B08A3E]"
              >
                <span>{submitting ? "Transmitting..." : "Submit Inquiry to Sodepur Desk"}</span>
                <ArrowUpRight className="w-4 h-4 text-[#D6BC7A]" />
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
