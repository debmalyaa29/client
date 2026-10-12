"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShieldCheck, Settings2, X, Check } from "lucide-react";

export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  timestamp: string;
}

const STORAGE_KEY = "cat_cookie_consent";

export default function CookieConsentBanner() {
  const [hasChosen, setHasChosen] = useState<boolean>(true); // default true to avoid hydration flicker
  const [showPreferences, setShowPreferences] = useState<boolean>(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    timestamp: "",
  });

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setPreferences(parsed);
        setHasChosen(true);
      } else {
        setHasChosen(false);
      }
    } catch {
      setHasChosen(false);
    }

    // Listen for custom event from footer or cookie policy page to reopen preferences
    const handleOpenPreferences = () => {
      setShowPreferences(true);
    };

    window.addEventListener("cat_open_cookie_preferences", handleOpenPreferences);
    return () => {
      window.removeEventListener("cat_open_cookie_preferences", handleOpenPreferences);
    };
  }, []);

  const saveConsent = (prefs: CookiePreferences) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    } catch {
      // Storage unavailable fallback
    }
    setPreferences(prefs);
    setHasChosen(true);
    setShowPreferences(false);

    // Dispatch event so other components or services can adapt if needed
    window.dispatchEvent(
      new CustomEvent("cat_cookie_consent_updated", { detail: prefs })
    );
  };

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      essential: true,
      analytics: true,
      timestamp: new Date().toISOString(),
    };
    saveConsent(allAccepted);
  };

  const handleRejectNonEssential = () => {
    const onlyEssential: CookiePreferences = {
      essential: true,
      analytics: false,
      timestamp: new Date().toISOString(),
    };
    saveConsent(onlyEssential);
  };

  const handleSavePreferences = () => {
    saveConsent({
      ...preferences,
      essential: true, // Always required
      timestamp: new Date().toISOString(),
    });
  };

  return (
    <>
      {/* 1. Cookie Consent Banner (shown if no choice recorded yet) */}
      {!hasChosen && !showPreferences && (
        <aside
          role="region"
          aria-label="Cookie and Privacy Consent"
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 bg-[#25221D]/98 text-[#F5F0E6] border-t-2 border-[#B08A3E] shadow-2xl backdrop-blur-md animate-in slide-in-from-bottom-4 duration-300"
        >
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* Context Text */}
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D6BC7A]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#D6BC7A] font-bold">
                  Privacy & Cookie Governance
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#AFA698] font-sans leading-relaxed">
                Calcutta Agri Tech uses strictly necessary technical storage to ensure basic site
                security and form transmissions. We respect your autonomy: non-essential performance
                tracking requires your affirmative consent and is disabled by default. Read our{" "}
                <Link
                  href="/cookie-policy"
                  className="text-[#D6BC7A] underline hover:text-[#FBF8F1] focus-visible:ring-1 focus-visible:ring-[#D6BC7A]"
                >
                  Cookie Policy
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy-policy"
                  className="text-[#D6BC7A] underline hover:text-[#FBF8F1] focus-visible:ring-1 focus-visible:ring-[#D6BC7A]"
                >
                  Privacy Policy
                </Link>{" "}
                to learn more.
              </p>
            </div>

            {/* Action Buttons (Equal visual balance, no dark patterns) */}
            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto shrink-0">
              <button
                type="button"
                onClick={handleRejectNonEssential}
                className="flex-1 sm:flex-initial px-4 py-2.5 bg-transparent text-[#F5F0E6] text-xs font-mono uppercase tracking-wider border border-[#F5F0E6]/30 hover:border-[#F5F0E6] hover:bg-[#F5F0E6]/10 rounded-xs transition-colors focus-visible:ring-2 focus-visible:ring-[#B08A3E] focus-visible:outline-hidden"
              >
                Reject Non-Essential
              </button>

              <button
                type="button"
                onClick={() => setShowPreferences(true)}
                className="flex-1 sm:flex-initial px-4 py-2.5 bg-[#342F28] text-[#D6BC7A] text-xs font-mono uppercase tracking-wider border border-[#B08A3E]/50 hover:bg-[#433C33] rounded-xs transition-colors flex items-center justify-center gap-1.5 focus-visible:ring-2 focus-visible:ring-[#B08A3E] focus-visible:outline-hidden"
              >
                <Settings2 className="w-3.5 h-3.5" />
                <span>Preferences</span>
              </button>

              <button
                type="button"
                onClick={handleAcceptAll}
                className="w-full sm:w-auto px-5 py-2.5 bg-[#B08A3E] text-[#25221D] font-bold text-xs font-mono uppercase tracking-wider border border-[#D6BC7A] hover:bg-[#D6BC7A] rounded-xs transition-colors focus-visible:ring-2 focus-visible:ring-[#B08A3E] focus-visible:outline-hidden shadow-xs"
              >
                Accept All
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* 2. Granular Cookie Preferences Modal */}
      {showPreferences && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-preferences-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#25221D]/80 backdrop-blur-xs animate-in fade-in duration-200"
        >
          <div className="bg-[#FBF8F1] border border-[#B08A3E]/50 rounded-xs max-w-lg w-full p-6 sm:p-8 shadow-2xl relative space-y-6 text-[#25221D]">
            {/* Close button */}
            <button
              type="button"
              onClick={() => setShowPreferences(false)}
              className="absolute top-5 right-5 p-1 text-[#635C52] hover:text-[#25221D] focus-visible:ring-2 focus-visible:ring-[#B08A3E] focus-visible:outline-hidden"
              aria-label="Close cookie preferences dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="space-y-1">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#806329] font-bold">
                CALCUTTA AGRI TECH • PREFERENCE CENTER
              </span>
              <h2 id="cookie-preferences-title" className="font-serif text-2xl font-bold text-[#25221D]">
                Cookie & Storage Preferences
              </h2>
              <p className="text-xs text-[#635C52]">
                Configure how we store technical state on your device. You can update or withdraw your
                choices at any time via the link in our website footer.
              </p>
            </div>

            {/* Granular Toggles */}
            <div className="space-y-4 divide-y divide-[#25221D]/10 text-xs">
              {/* Category 1: Strictly Necessary */}
              <div className="pt-3 first:pt-0 space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono uppercase font-bold text-[#25221D]">
                      Strictly Necessary Storage
                    </span>
                    <span className="text-[10px] font-mono uppercase bg-[#25221D] text-[#D6BC7A] px-2 py-0.5 rounded-xs">
                      Always Active
                    </span>
                  </div>
                  <div className="w-5 h-5 rounded-xs bg-[#25221D] text-[#D6BC7A] flex items-center justify-center">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                </div>
                <p className="text-[#635C52] leading-relaxed">
                  Required for core functionality, such as remembering your privacy preferences,
                  preserving rate-limiting security on inquiry forms, and maintaining basic site integrity.
                  Cannot be deactivated.
                </p>
              </div>

              {/* Category 2: Analytics & Performance */}
              <div className="pt-3 space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono uppercase font-bold text-[#25221D]">
                      Analytics & Performance
                    </span>
                    <span className="text-[10px] font-mono uppercase text-[#806329]">
                      Optional
                    </span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) =>
                        setPreferences({ ...preferences, analytics: e.target.checked })
                      }
                      className="sr-only peer"
                      aria-label="Toggle Analytics and Performance cookies"
                    />
                    <div className="w-10 h-5 bg-[#EFE7D8] border border-[#25221D]/20 peer-focus:outline-hidden peer-focus:ring-2 peer-focus:ring-[#B08A3E] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#25221D] peer-checked:after:bg-[#D6BC7A] after:border-[#25221D] after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#25221D]"></div>
                  </label>
                </div>
                <p className="text-[#635C52] leading-relaxed">
                  Allows aggregate measurement of page visits and technical performance to help us
                  improve load times and engineering resources. Never used for third-party advertising or
                  behavioral profiling.
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-4 border-t border-[#25221D]/10 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleRejectNonEssential}
                className="flex-1 py-2.5 bg-transparent text-[#25221D] text-xs font-mono uppercase tracking-wider border border-[#25221D]/30 hover:bg-[#EAE0CD] rounded-xs transition-colors focus-visible:ring-2 focus-visible:ring-[#B08A3E] focus-visible:outline-hidden"
              >
                Reject All Optional
              </button>
              <button
                type="button"
                onClick={handleSavePreferences}
                className="flex-1 py-2.5 bg-[#25221D] text-[#FBF8F1] text-xs font-mono uppercase tracking-wider border border-[#B08A3E] hover:bg-[#342F28] rounded-xs transition-colors font-bold focus-visible:ring-2 focus-visible:ring-[#B08A3E] focus-visible:outline-hidden"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/**
 * Utility helper for components (like Footer or Cookie Policy page) to trigger the preferences dialog.
 */
export function triggerOpenCookiePreferences() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("cat_open_cookie_preferences"));
  }
}
