import Link from "next/link";
import Image from "next/image";
import { Text } from "@mantine/core";

export const Branding = () => {
  return (
    <Link href="/" className="flex flex-row items-center gap-2">
      <Image src="/branding.png" width={32} height={32} alt="App branding" />
      <Text size="xl" component="span" fw="700" c="secondary.10">
        CulinaryGenius
      </Text>
    </Link>
  );
};

export default Branding;
