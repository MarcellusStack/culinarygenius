import { ButtonAction } from "@/components/action-button";
import { useTranslations } from "next-intl";
import Link from "next/link";

export const experimental_ppr = true;

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Test</h1>
      <Link href="/">Home</Link>
    </main>
  );
}
