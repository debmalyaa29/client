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
  const [hasChosen, setHasChosen] = useState<boolean>(true);
  const [showPreferences, setShowPreferences] = useState<boolean>(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    timestamp: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
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
    }, 0);

    const handleOpenPreferences = () => {
      setShowPreferences(true);
    };

    window.addEventListener("cat_open_cookie_preferences", handleOpenPreferences);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("cat_open_cookie_preferences", handleOpenPreferences);
    };
  }, []);

  const saveConsent = (prefs: CookiePreferences) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    } catch {
    }
    setPreferences(prefs);
    setHasChosen(true);
    setShowPreferences(false);

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
      essential: true,
      timestamp: new Date().toISOString(),
    });
  };

  return (
    <>
      {!hasChosen && !showPreferences && (
        <aside
          role="region"
          aria-label="Cookie and Privacy Consent"
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 max-w-lg w-[calc(100%-2rem)] p-5 bg-[#25221D]/95 text-[#F5F0E6] border border-[#B08A3E]/40 rounded-xs shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-4 duration-300"
        >
          <div className="flex flex-col gap-3">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D6BC7A]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#D6BC7A] font-bold">
                  Privacy & Cookie Governance
                </span>
              </div>
              <p className="text-xs text-[#AFA698] font-sans leading-relaxed">
                Calcutta Agri Tech uses strictly necessary storage for basic security. Non-essential performance
                tracking requires affirmative consent. Read our{" "}
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
                </Link>.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-[#F5F0E6]/10">
              <button
                type="button"
                onClick={handleRejectNonEssential}
                className="flex-1 px-3 py-2 bg-transparent text-[#F5F0E6] text-xs font-mono uppercase tracking-wider border border-[#F5F0E6]/30 hover:border-[#F5F0E6] hover:bg-[#F5F0E6]/10 rounded-xs transition-colors focus-visible:ring-2 focus-visible:ring-[#B08A3E] focus-visible:outline-hidden"
              >
                Reject
              </button>

              <button
                type="button"
                onClick={() => setShowPreferences(true)}
                className="flex-1 px-3 py-2 bg-[#342F28] text-[#D6BC7A] text-xs font-mono uppercase tracking-wider border border-[#B08A3E]/50 hover:bg-[#433C33] rounded-xs transition-colors flex items-center justify-center gap-1.5 focus-visible:ring-2 focus-visible:ring-[#B08A3E] focus-visible:outline-hidden"
              >
                <Settings2 className="w-3.5 h-3.5" />
                <span>Preferences</span>
              </button>

              <button
                type="button"
                onClick={handleAcceptAll}
                className="w-full sm:w-auto flex-1 px-4 py-2 bg-[#B08A3E] text-[#25221D] font-bold text-xs font-mono uppercase tracking-wider border border-[#D6BC7A] hover:bg-[#D6BC7A] rounded-xs transition-colors focus-visible:ring-2 focus-visible:ring-[#B08A3E] focus-visible:outline-hidden shadow-xs"
              >
                Accept All
              </button>
            </div>
          </div>
        </aside>
      )}

      {showPreferences && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-preferences-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#25221D]/80 backdrop-blur-xs animate-in fade-in duration-200"
        >
          <div className="bg-[#FBF8F1] border border-[#B08A3E]/50 rounded-xs max-w-lg w-full p-6 sm:p-8 shadow-2xl relative space-y-6 text-[#25221D]">
            <button
              type="button"
              onClick={() => setShowPreferences(false)}
              className="absolute top-5 right-5 p-1 text-[#635C52] hover:text-[#25221D] focus-visible:ring-2 focus-visible:ring-[#B08A3E] focus-visible:outline-hidden"
              aria-label="Close cookie preferences dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-xs font-mono tracking-wider uppercase text-[#806329] font-bold">
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

            <div className="space-y-4 divide-y divide-[#25221D]/10 text-xs">
              <div className="pt-3 first:pt-0 space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono uppercase font-bold text-[#25221D]">
                      Strictly Necessary Storage
                    </span>
                    <span className="text-xs font-mono uppercase bg-[#25221D] text-[#D6BC7A] px-2 py-0.5 rounded-xs">
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

              <div className="pt-3 space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono uppercase font-bold text-[#25221D]">
                      Analytics & Performance
                    </span>
                    <span className="text-xs font-mono uppercase text-[#806329]">
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

export function triggerOpenCookiePreferences() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("cat_open_cookie_preferences"));
  }
}
