"use client";

import { useState } from "react";
import { Phone, X, MessageSquare } from "lucide-react";
import { SITE } from "@/config/siteData";

const QUICK_MESSAGES = [
  {
    label: "Get Price & MOQ",
    text: "Hello, I am interested in thermal paper rolls.\nPlease send me price and MOQ.",
  },
  {
    label: "80×80mm Bulk Quote",
    text: "Hello, I need quotation for 80×80mm thermal paper rolls.\nQuantity: __ container\nDestination: __",
  },
  {
    label: "57×50mm Bulk Quote",
    text: "Hello, I need quotation for 57×50mm thermal paper rolls.\nQuantity: __ container\nDestination: __",
  },
  {
    label: "OEM / Private Label",
    text: "Hello, I'm interested in OEM / private label thermal paper rolls.\nPlease share your OEM capabilities and MOQ.",
  },
];

export default function WhatsAppFAB() {
  const [open, setOpen] = useState(false);

  const buildUrl = (text: string) =>
    `${SITE.whatsappUrl}?text=${encodeURIComponent(text)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Quick message panel */}
      {open && (
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 w-72 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-[#25D366] px-4 py-3 flex items-center gap-3">
            <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <Phone className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-white font-bold text-sm">ZhixinPaper</div>
              <div className="text-green-100 text-xs">Typically replies in minutes</div>
            </div>
          </div>

          {/* Chat bubble */}
          <div className="px-4 py-4 bg-[#ECE5DD]">
            <div className="bg-white rounded-xl rounded-tl-none px-3 py-2.5 shadow-sm max-w-[90%]">
              <p className="text-sm text-slate-700 leading-relaxed">
                Hi! 👋 How can we help you today?<br />
                Choose a quick message below or type your own.
              </p>
              <div className="text-xs text-slate-400 mt-1 text-right">ZhixinPaper</div>
            </div>
          </div>

          {/* Quick messages */}
          <div className="px-4 py-3 space-y-2">
            {QUICK_MESSAGES.map(({ label, text }) => (
              <a
                key={label}
                href={buildUrl(text)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 w-full text-left bg-slate-50 hover:bg-green-50 hover:border-green-300 border border-slate-200 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 transition-all duration-150"
                onClick={() => setOpen(false)}
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366] flex-shrink-0" />
                {label}
              </a>
            ))}
          </div>

          <div className="px-4 pb-4">
            <a
              href={buildUrl("Hello, I am interested in thermal paper rolls.\nPlease send me price and MOQ.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20b858] text-white font-extrabold py-3 rounded-xl text-sm transition-colors"
              onClick={() => setOpen(false)}
            >
              <Phone className="w-4 h-4" />
              Open WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* FAB button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close WhatsApp chat" : "Chat on WhatsApp"}
        className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 ${
          open
            ? "bg-slate-700 hover:bg-slate-600"
            : "bg-[#25D366] hover:bg-[#20b858]"
        }`}
      >
        {open ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          /* WhatsApp SVG icon */
          <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        )}
      </button>

      {/* Pulse ring when closed */}
      {!open && (
        <span className="absolute bottom-0 right-0 w-14 h-14 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />
      )}
    </div>
  );
}
