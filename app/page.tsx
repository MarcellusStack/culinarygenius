import CreateMealForm from "@/components/create-meal-form";
import { Recipe } from "@/components/recipe";
import { Title, Text, rem, Stack, TextInput, SimpleGrid } from "@mantine/core";
import Image from "next/image";

export default function Home() {
  return (
    <header>
      <Stack align="center" py="6rem">
        <Text
          component="h1"
          fw={900}
          variant="gradient"
          gradient={{ from: "lime", to: "green", deg: 90 }}
          size="3rem"
          lh={1.2}
        >
          Create your Culinary Dream Meal
        </Text>
        <Text c="dimmed" size="xl">
          Describe your meal and add ingredients
        </Text>
        <CreateMealForm />
      </Stack>
      <SimpleGrid cols={3} spacing="md">
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
      </SimpleGrid>
    </header>
  );
}
