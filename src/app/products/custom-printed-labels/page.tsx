"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/products/thermal-labels/custom-printed");
  }, [router]);
  return null;
}
