"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { X, ArrowUpRight, CheckCircle2, AlertCircle } from "lucide-react";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMachine?: string;
}

export default function InquiryModal({ isOpen, onClose, defaultMachine = "" }: InquiryModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    machine: defaultMachine,
    capacity: "",
    location: "",
    message: "",
    marketingConsent: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to register inquiry.");
      }

      setStatus({ type: "success", text: data.message });
      setTimeout(() => {
        onClose();
        setStatus(null);
      }, 3000);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "An unexpected error occurred.";
      setStatus({ type: "error", text: msg });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#25221D]/75 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="bg-[#FBF8F1] border border-[#B08A3E]/50 rounded-xs max-w-lg w-full p-6 sm:p-8 shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1 text-[#635C52] hover:text-[#25221D] focus-visible:ring-2 focus-visible:ring-[#B08A3E] focus-visible:outline-hidden"
          aria-label="Close technical inquiry modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1">
          <span className="text-xs font-mono tracking-wider uppercase text-[#806329] font-bold">
            CALCUTTA AGRI TECH • SODEPUR DESK
          </span>
          <h2 id="inquiry-modal-title" className="font-serif text-2xl font-bold text-[#25221D]">
            Technical Machinery Inquiry
          </h2>
          <p className="text-xs text-[#635C52]">
            Enter your operational specifications for priority evaluation by Debabrata Dey & senior engineering staff.
          </p>
        </div>

        {status && (
          <div
            className={`p-3 rounded-xs text-xs font-mono flex items-center gap-2 ${
              status.type === "success"
                ? "bg-emerald-50 text-emerald-800 border border-emerald-300"
                : "bg-red-50 text-red-800 border border-red-300"
            }`}
          >
            {status.type === "success" ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
            )}
            <span>{status.text}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
          <div className="space-y-1">
            <label htmlFor="inquiry-name" className="text-[#25221D] uppercase">Full Name / Mill Operator *</label>
            <input
              id="inquiry-name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Debabrata Dey"
              className="w-full px-3 py-2 bg-[#F5F0E6] border border-[#25221D]/20 rounded-xs text-[#25221D] focus:border-[#B08A3E] focus-visible:ring-2 focus-visible:ring-[#B08A3E] focus-visible:outline-hidden"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label htmlFor="inquiry-phone" className="text-[#25221D] uppercase">Phone Number *</label>
              <input
                id="inquiry-phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98300 XXXXX"
                className="w-full px-3 py-2 bg-[#F5F0E6] border border-[#25221D]/20 rounded-xs text-[#25221D] focus:border-[#B08A3E] focus-visible:ring-2 focus-visible:ring-[#B08A3E] focus-visible:outline-hidden"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="inquiry-email" className="text-[#25221D] uppercase">Email Address *</label>
              <input
                id="inquiry-email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="contact@mill.com"
                className="w-full px-3 py-2 bg-[#F5F0E6] border border-[#25221D]/20 rounded-xs text-[#25221D] focus:border-[#B08A3E] focus-visible:ring-2 focus-visible:ring-[#B08A3E] focus-visible:outline-hidden"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label htmlFor="inquiry-machine" className="text-[#25221D] uppercase">Equipment of Interest</label>
              <input
                id="inquiry-machine"
                type="text"
                value={formData.machine}
                onChange={(e) => setFormData({ ...formData, machine: e.target.value })}
                placeholder="Destoner / Sortex / Plant"
                className="w-full px-3 py-2 bg-[#F5F0E6] border border-[#25221D]/20 rounded-xs text-[#25221D] focus:border-[#B08A3E] focus-visible:ring-2 focus-visible:ring-[#B08A3E] focus-visible:outline-hidden"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="inquiry-capacity" className="text-[#25221D] uppercase">Target Capacity (TPH)</label>
              <input
                id="inquiry-capacity"
                type="text"
                value={formData.capacity}
                onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                placeholder="e.g. 4 TPH / 8 TPH"
                className="w-full px-3 py-2 bg-[#F5F0E6] border border-[#25221D]/20 rounded-xs text-[#25221D] focus:border-[#B08A3E] focus-visible:ring-2 focus-visible:ring-[#B08A3E] focus-visible:outline-hidden"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label htmlFor="inquiry-location" className="text-[#25221D] uppercase">Plant Location / Notes</label>
            <textarea
              id="inquiry-location"
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Provide plant location (e.g. Bardhaman, Birbhum) and existing setup details..."
              className="w-full px-3 py-2 bg-[#F5F0E6] border border-[#25221D]/20 rounded-xs text-[#25221D] focus:border-[#B08A3E] focus-visible:ring-2 focus-visible:ring-[#B08A3E] focus-visible:outline-hidden resize-none"
            />
          </div>

          <div className="space-y-2 pt-1 border-t border-[#25221D]/10">
            <label className="flex items-start gap-2 cursor-pointer text-xs text-[#635C52]">
              <input
                type="checkbox"
                checked={formData.marketingConsent}
                onChange={(e) => setFormData({ ...formData, marketingConsent: e.target.checked })}
                className="mt-0.5 w-3.5 h-3.5 rounded-xs border-[#25221D]/30 text-[#806329] focus:ring-[#B08A3E]"
              />
              <span>Send me technical updates on milling components and spares availability (optional).</span>
            </label>

            <p className="text-xs text-[#635C52] leading-tight">
              Inquiry data is processed in accordance with our{" "}
              <Link href="/privacy-policy" className="text-[#806329] underline hover:text-[#25221D]">
                Privacy Policy
              </Link>.
            </p>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3 bg-[#25221D] text-[#FBF8F1] uppercase tracking-widest font-bold border border-[#B08A3E] rounded-xs hover:bg-[#342F28] transition-colors flex items-center justify-center gap-2 disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-[#B08A3E] focus-visible:outline-hidden"
          >
            <span>{submitting ? "Registering..." : "Transmit Technical Inquiry"}</span>
            <ArrowUpRight className="w-4 h-4 text-[#D6BC7A]" />
          </button>
        </form>
      </div>
    </div>
  );
}
