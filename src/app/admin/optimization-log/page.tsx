import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import { readAllEntries } from "@/lib/optimizationLogStore";
import OptimizationLogClient from "./OptimizationLogClient";

export const dynamic = "force-dynamic";

export default async function OptimizationLogPage() {
  if (!(await isAuthenticated())) {
    redirect("/admin/login");
  }
  const entries = await readAllEntries();
  return <OptimizationLogClient initialEntries={entries} />;
}
