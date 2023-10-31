"use client";
import { IconHeart } from "@tabler/icons-react";
import {
  Card,
  Text,
  Group,
  Badge,
  Button,
  ActionIcon,
  Box,
  useMantineTheme,
  Divider,
} from "@mantine/core";
import classes from "../styles/Badge.module.css";
import Image from "next/image";

const mockdata = {
  image:
    "https://images.unsplash.com/photo-1611599537845-1c7aca0091c0?auto=format&fit=crop&q=80&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  title: "Verudela Beach",
  country: "Croatia",
  description:
    "Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.",
  badges: [
    { label: "Sunny weather" },
    { label: "Onsite zoo" },
    { label: "Sea" },
    { label: "Nature" },
    { label: "Water sports" },
  ],
};

export type RecipeProps = {
  image: string;
  title: string;
  description: string;
  type: "breakfast" | "lunch" | "dinner" | "snack" | "dessert" | "drink";
  ingredients: { name: string }[];
};

export const Recipe = () => {
  const theme = useMantineTheme();
  const { image, title, description, country, badges } = mockdata;
  const features = badges.map((badge) => (
    <Badge variant="light" key={badge.label} color="green">
      {badge.label}
    </Badge>
  ));

  return (
    <Card withBorder radius="md" p="md">
      <Card.Section>
        <Box className="w-full h-[180px] relative">
          <Image src={image} alt={title} fill className="object-cover" />
        </Box>
      </Card.Section>
      <Group justify="apart" mt="md">
        <Text fz="lg" fw={500} c="secondary.10">
          {title}
        </Text>
        <Badge size="sm" variant="light" color="green">
          {country}
        </Badge>
      </Group>
      <Text fz="sm" mt="xs" c="secondary.10">
        {description}
      </Text>
      <Card.Section>
        <Divider my="md" />
      </Card.Section>

      <Text tt="uppercase" size="xs" fw={700} c="dimmed">
        Perfect for you, if you enjoy
      </Text>
      <Group gap={7} mt={5}>
        {features}
      </Group>
      <Card.Section>
        <Divider my="md" />
      </Card.Section>
      <Group>
        <Button className="flex-1" color="green">
          Show details
        </Button>
        <ActionIcon variant="default" radius="md" size="lg">
          <IconHeart
            style={{ width: "70%", height: "70%" }}
            color={theme.colors.red[6]}
            stroke={1.5}
          />
        </ActionIcon>
      </Group>
    </Card>
  );
};
