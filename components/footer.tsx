import { Container, Group, Anchor, Box } from "@mantine/core";

import classes from "./FooterSimple.module.css";
import Link from "next/link";
import { Branding } from "@/components/branding";
import { NavLinks } from "@/components/nav-links";

export const Footer = () => {
  return (
    <footer>
      <Box py="xs" mt="md" className="border-t border-gray-200">
        <Group justify="space-between">
          <Branding />
          <Group>
            <NavLinks />
          </Group>
        </Group>
      </Box>
    </footer>
  );
};
