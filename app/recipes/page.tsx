import { SimpleGrid, Stack, TextInput, Title } from "@mantine/core";
import Image from "next/image";
import { Recipe } from "@/components/recipe";

export default function Page() {
  return (
    <Stack py="6rem">
      <Title order={1} size="3rem">
        Recipes
      </Title>
      <TextInput placeholder="Search favourite meal" />
      <SimpleGrid cols={3} spacing="md">
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
      </SimpleGrid>
    </Stack>
  );
}
