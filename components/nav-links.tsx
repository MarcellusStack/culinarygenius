import { Anchor } from "@mantine/core";
import Link from "next/link";
import React from "react";

export const NavLinks = () => {
  const links = [
    { link: "#", label: "Pricing" },
    { link: "#", label: "About" },
  ];

  return (
    <>
      {links.map((link) => (
        <Anchor
          c="dimmed"
          key={link.label}
          href={link.link}
          component={Link}
          size="sm"
        >
          {link.label}
        </Anchor>
      ))}
    </>
  );
};
