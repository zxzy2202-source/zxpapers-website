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

          <div className="px-4 pb-4 space-y-2">
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
            <div className="flex items-center justify-center gap-2 w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 text-xs text-slate-500">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-[#07C160] flex-shrink-0" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.306A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.946 7.946 0 01-4.073-1.117l-.292-.174-3.03.796.808-2.96-.19-.303A7.944 7.944 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8zm4.406-5.884c-.242-.121-1.43-.706-1.652-.786-.222-.081-.383-.121-.545.121-.161.242-.624.786-.765.948-.14.161-.282.181-.524.06-.242-.12-1.02-.376-1.943-1.198-.718-.64-1.203-1.431-1.344-1.673-.14-.242-.015-.373.106-.493.108-.108.242-.282.363-.423.12-.14.16-.242.242-.403.08-.161.04-.302-.02-.423-.061-.12-.545-1.314-.747-1.798-.196-.472-.396-.408-.545-.415l-.464-.008c-.161 0-.423.06-.645.302-.222.242-.847.828-.847 2.02 0 1.19.867 2.34.988 2.502.12.161 1.706 2.604 4.134 3.651.578.25 1.029.398 1.38.51.58.184 1.108.158 1.525.096.465-.069 1.43-.585 1.632-1.15.201-.564.201-1.047.14-1.149-.06-.1-.222-.161-.464-.282z"/>
              </svg>
              <span>WeChat: <strong className="text-slate-700">{SITE.wechat}</strong></span>
            </div>
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
