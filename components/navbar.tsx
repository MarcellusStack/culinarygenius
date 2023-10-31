import { Group, Text, Badge, Avatar, Container } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";
import { Branding } from "@/components/branding";
import { NavLinks } from "@/components/nav-links";

export const Navbar = () => {
  return (
    <nav>
      <Group justify="space-between" py="xs">
        <Group>
          <Branding />
          <Badge color="green" size="md" radius="sm" className="uppercase">
            Beta
          </Badge>
        </Group>
        <Group>
          <NavLinks />
          <Avatar color="green" radius="xl">
            MP
          </Avatar>
        </Group>
      </Group>
    </nav>
  );
};
