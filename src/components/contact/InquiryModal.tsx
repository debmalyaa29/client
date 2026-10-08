"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Synchronize defaultMachine when opened
  useEffect(() => {
    if (defaultMachine) {
      setFormData((prev) => ({ ...prev, machine: defaultMachine }));
    }
  }, [defaultMachine]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

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
      }, 2500);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "An unexpected error occurred.";
      setStatus({ type: "error", text: msg });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#25221D]/75 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="inquiry-modal-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#FBF8F1] border border-[#B08A3E]/50 rounded-xs max-w-lg w-full p-6 sm:p-8 shadow-2xl relative space-y-6"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-1 text-[#635C52] hover:text-[#25221D] rounded-xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B08A3E]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#806329] font-bold">
                CALCUTTA AGRI TECH • SODEPUR DESK
              </span>
              <h3 id="inquiry-modal-title" className="font-serif text-2xl font-bold text-[#25221D]">
                Technical Machinery Inquiry
              </h3>
              <p className="text-xs text-[#635C52]">
                Enter your operational specifications for priority review by Debabrata Dey & engineering staff.
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
                <label className="text-[#25221D] uppercase">Full Name / Mill Operator *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Debabrata Dey"
                  className="w-full px-3 py-2 bg-[#F5F0E6] border border-[#25221D]/20 rounded-xs text-[#25221D] focus:border-[#B08A3E] focus:ring-1 focus:ring-[#B08A3E] focus:outline-hidden"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[#25221D] uppercase">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98300 XXXXX"
                    className="w-full px-3 py-2 bg-[#F5F0E6] border border-[#25221D]/20 rounded-xs text-[#25221D] focus:border-[#B08A3E] focus:ring-1 focus:ring-[#B08A3E] focus:outline-hidden"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[#25221D] uppercase">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="contact@mill.com"
                    className="w-full px-3 py-2 bg-[#F5F0E6] border border-[#25221D]/20 rounded-xs text-[#25221D] focus:border-[#B08A3E] focus:ring-1 focus:ring-[#B08A3E] focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[#25221D] uppercase">Equipment of Interest</label>
                  <input
                    type="text"
                    value={formData.machine}
                    onChange={(e) => setFormData({ ...formData, machine: e.target.value })}
                    placeholder="Destoner / Sortex / Plant"
                    className="w-full px-3 py-2 bg-[#F5F0E6] border border-[#25221D]/20 rounded-xs text-[#25221D] focus:border-[#B08A3E] focus:ring-1 focus:ring-[#B08A3E] focus:outline-hidden"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[#25221D] uppercase">Target Capacity (TPH)</label>
                  <input
                    type="text"
                    value={formData.capacity}
                    onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                    placeholder="e.g. 4 TPH / 8 TPH"
                    className="w-full px-3 py-2 bg-[#F5F0E6] border border-[#25221D]/20 rounded-xs text-[#25221D] focus:border-[#B08A3E] focus:ring-1 focus:ring-[#B08A3E] focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[#25221D] uppercase">Plant Location / Notes</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Provide plant location (e.g. Bardhaman, Birbhum) and existing setup details..."
                  className="w-full px-3 py-2 bg-[#F5F0E6] border border-[#25221D]/20 rounded-xs text-[#25221D] focus:border-[#B08A3E] focus:ring-1 focus:ring-[#B08A3E] focus:outline-hidden resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 bg-[#25221D] text-[#FBF8F1] uppercase tracking-widest font-bold border border-[#B08A3E] rounded-xs hover:bg-[#342F28] active:scale-[0.98] transition-all flex items-center justify-center gap-2 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B08A3E]"
              >
                <span>{submitting ? "Registering..." : "Transmit Technical Inquiry"}</span>
                <ArrowUpRight className="w-4 h-4 text-[#D6BC7A]" />
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
