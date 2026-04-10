"use client";

import * as Flags3x2 from "country-flag-icons/react/3x2";
import { cn } from "@/lib/utils";

/** ISO 3166-1 alpha-2 country codes we use across the site */
export type CountryCode =
  | "NG" | "KE" | "ZA" | "GH" | "ET" | "TZ"   // Africa
  | "AE" | "SA" | "EG" | "TR" | "QA" | "KW"     // Middle East
  | "TH" | "ID" | "VN" | "PH" | "MY" | "SG";   // Southeast Asia

/* eslint-disable @typescript-eslint/no-explicit-any */
const flagComponents: Record<CountryCode, React.ComponentType<any>> = {
  NG: Flags3x2.NG,
  KE: Flags3x2.KE,
  ZA: Flags3x2.ZA,
  GH: Flags3x2.GH,
  ET: Flags3x2.ET,
  TZ: Flags3x2.TZ,
  AE: Flags3x2.AE,
  SA: Flags3x2.SA,
  EG: Flags3x2.EG,
  TR: Flags3x2.TR,
  QA: Flags3x2.QA,
  KW: Flags3x2.KW,
  TH: Flags3x2.TH,
  ID: Flags3x2.ID,
  VN: Flags3x2.VN,
  PH: Flags3x2.PH,
  MY: Flags3x2.MY,
  SG: Flags3x2.SG,
};

interface CountryFlagProps {
  code: CountryCode;
  className?: string;
  /** Accessible label; defaults to country code */
  label?: string;
}

/**
 * Renders an SVG country flag that displays consistently across all platforms
 * (including Windows, which does not render emoji flags).
 *
 * Default size: 20×14px (3:2 aspect ratio), override with className.
 */
export function CountryFlag({ code, className, label }: CountryFlagProps) {
  const Flag = flagComponents[code];
  if (!Flag) return null;

  return (
    <Flag
      className={cn("inline-block w-5 h-auto rounded-[2px] flex-shrink-0 shadow-[0_0_0_0.5px_rgba(0,0,0,0.1)]", className)}
      aria-label={label ?? code}
      role="img"
    />
  );
}
