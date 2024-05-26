"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/utils/lib/i18n-navigation";
import { Group, Select, SelectProps } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import Image from "next/image";
import { locales } from "@utils/locales";

const icons: Record<string, React.ReactNode> = {
  de: <Image width={16} height={16} src="/de.png" alt="de" />,
  en: (
    <Group gap="xs">
      <Image width={16} height={16} src="/gb.png" alt="gb" />
      <Image width={16} height={16} src="/us.png" alt="us" />
    </Group>
  ),
};

const renderSelectOption: SelectProps["renderOption"] = ({
  option,
  checked,
}) => (
  <Group flex="1" gap="xs">
    {icons[option.value]}
    {option.label}
    {checked && (
      <IconCheck
        style={{ marginInlineStart: "auto", width: 16, height: 16 }}
        color="green"
      />
    )}
  </Group>
);

export const LocaleSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleChange = (value: string | null) => {
    if (value) {
      router.push(pathname, { locale: value });
      router.refresh();
    }
  };
  return (
    <Select
      defaultValue={locale}
      data={locales.map((locale) => ({
        value: locale,
        label: locale === "de" ? "Deutsch" : "English",
      }))}
      onChange={handleChange}
      renderOption={renderSelectOption}
    />
  );
};
