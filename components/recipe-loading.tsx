import {
  Grid,
  GridCol,
  Group,
  Loader,
  Skeleton,
  Stack,
  Title,
  Text,
} from "@mantine/core";

export const RecipeLoading = () => {
  return (
    <Stack py="6rem">
      <Title order={1} size="3rem">
        Recipe
      </Title>
      <Group>
        <Text c="dimmed">Generating</Text>
        <Loader color="green" type="dots" size="sm" />
      </Group>
      <Skeleton width={400} height={100} />
      <Grid>
        <GridCol span={8}>
          <Skeleton height={500} />
        </GridCol>
        <GridCol span={4}>
          <Stack>
            <Skeleton height={156} />
            <Skeleton height={156} />
            <Skeleton height={156} />
          </Stack>
        </GridCol>
      </Grid>
    </Stack>
  );
};
