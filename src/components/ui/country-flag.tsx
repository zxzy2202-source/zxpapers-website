"use client";

import aeFlag from "country-flag-icons/string/3x2/AE";
import auFlag from "country-flag-icons/string/3x2/AU";
import caFlag from "country-flag-icons/string/3x2/CA";
import deFlag from "country-flag-icons/string/3x2/DE";
import egFlag from "country-flag-icons/string/3x2/EG";
import etFlag from "country-flag-icons/string/3x2/ET";
import frFlag from "country-flag-icons/string/3x2/FR";
import gbFlag from "country-flag-icons/string/3x2/GB";
import ghFlag from "country-flag-icons/string/3x2/GH";
import idFlag from "country-flag-icons/string/3x2/ID";
import keFlag from "country-flag-icons/string/3x2/KE";
import kwFlag from "country-flag-icons/string/3x2/KW";
import myFlag from "country-flag-icons/string/3x2/MY";
import ngFlag from "country-flag-icons/string/3x2/NG";
import nlFlag from "country-flag-icons/string/3x2/NL";
import phFlag from "country-flag-icons/string/3x2/PH";
import qaFlag from "country-flag-icons/string/3x2/QA";
import saFlag from "country-flag-icons/string/3x2/SA";
import sgFlag from "country-flag-icons/string/3x2/SG";
import thFlag from "country-flag-icons/string/3x2/TH";
import trFlag from "country-flag-icons/string/3x2/TR";
import tzFlag from "country-flag-icons/string/3x2/TZ";
import usFlag from "country-flag-icons/string/3x2/US";
import vnFlag from "country-flag-icons/string/3x2/VN";
import zaFlag from "country-flag-icons/string/3x2/ZA";
import { cn } from "@/lib/utils";

export type CountryCode =
  | "NG" | "KE" | "ZA" | "GH" | "ET" | "TZ"
  | "AE" | "SA" | "EG" | "TR" | "QA" | "KW"
  | "TH" | "ID" | "VN" | "PH" | "MY" | "SG"
  | "US" | "CA" | "GB" | "DE" | "FR" | "AU" | "NL";

const flagMarkup: Record<CountryCode, string> = {
  NG: ngFlag,
  KE: keFlag,
  ZA: zaFlag,
  GH: ghFlag,
  ET: etFlag,
  TZ: tzFlag,
  AE: aeFlag,
  SA: saFlag,
  EG: egFlag,
  TR: trFlag,
  QA: qaFlag,
  KW: kwFlag,
  TH: thFlag,
  ID: idFlag,
  VN: vnFlag,
  PH: phFlag,
  MY: myFlag,
  SG: sgFlag,
  US: usFlag,
  CA: caFlag,
  GB: gbFlag,
  DE: deFlag,
  FR: frFlag,
  AU: auFlag,
  NL: nlFlag,
};

interface CountryFlagProps {
  code: CountryCode;
  className?: string;
  label?: string;
}

export function CountryFlag({ code, className, label }: CountryFlagProps) {
  const svg = flagMarkup[code];
  if (!svg) return null;

  return (
    <span
      className={cn(
        "inline-block w-5 flex-shrink-0 overflow-hidden rounded-[2px] shadow-[0_0_0_0.5px_rgba(0,0,0,0.1)] [&_svg]:block [&_svg]:h-auto [&_svg]:w-full",
        className
      )}
      aria-label={label ?? code}
      role="img"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
