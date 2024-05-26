import { ButtonAction } from "@/components/action-button";
import { useTranslations } from "next-intl";
import { Link } from "@/utils/lib/i18n-navigation";
import { LocaleSwitcher } from "@/components/locale-switcher";

export const experimental_ppr = true;

export default function Home() {
  const t = useTranslations("Home");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{t("header")}</h1>
      <Link href="/test">Test</Link>
      <LocaleSwitcher />
      <ButtonAction values={{ test: "Hello World" }}>Test</ButtonAction>
    </main>
  );
}
