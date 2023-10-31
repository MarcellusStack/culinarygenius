"use client";

import { ActionIcon, MultiSelect, Stack, TextInput, rem } from "@mantine/core";
import { z } from "zod";
import { useForm, zodResolver } from "@mantine/form";
import { IconCornerDownLeft } from "@tabler/icons-react";

const createMealSchema = z.object({
  meal: z.string().min(20, {
    message: "Your meal description should have atleast 20 characters",
  }),
  ingredients: z.array(z.string()),
});

const CreateMealForm = () => {
  const form = useForm({
    validate: zodResolver(createMealSchema),
    initialValues: {
      meal: "",
      ingredients: [],
    },
  });
  return (
    <form
      onSubmit={form.onSubmit((values) => console.log(values))}
      className="min-w-[400px] max-w-[400px]"
    >
      <Stack gap="xs">
        <TextInput
          radius="xl"
          color="green"
          size="md"
          placeholder="An Omelett with Spinach and Feta Cheese"
          rightSectionWidth={42}
          rightSection={
            <ActionIcon
              type="submit"
              size="lg"
              radius="xl"
              color="green"
              variant="filled"
            >
              <IconCornerDownLeft
                style={{ width: "70%", height: "70%" }}
                stroke={1.5}
              />
            </ActionIcon>
          }
        />
        <MultiSelect
          
          label="Your favorite ingredients"
          placeholder="Pick ingredient"
          data={["Spinach", "Broccoli", "Tomatoe"]}
        />
      </Stack>
    </form>
  );
};

export default CreateMealForm;
