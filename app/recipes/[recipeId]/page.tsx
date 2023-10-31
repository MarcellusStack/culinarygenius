import Image from "next/image";
import {
  Text,
  Title,
  Stack,
  Group,
  Loader,
  Skeleton,
  Grid,
  GridCol,
  List,
  Badge,
  ListItem,
  Card,
  CardSection,
  Box,
  ScrollArea,
  Button,
  ButtonGroup,
  Paper,
  UnstyledButton,
  Divider,
} from "@mantine/core";
import { IconHeart, IconPlus, IconShare } from "@tabler/icons-react";

export default function Page({
  params,
  searchParams,
}: {
  params: { recipeId: string };
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const { recipeId } = params;

  return (
    <Stack py="6rem">
      <Title order={1} size="3rem">
        Recipe
      </Title>
      <Group justify="space-between">
        <Group>
          <Image src="/meal.png" alt="Meal icon" width={64} height={64} />
          <Title order={2} size="2rem">
            Spinach Omelett
          </Title>
        </Group>
        <Group>
          <Image
            src="/meal-type.png"
            alt="Meal type icon"
            width={64}
            height={64}
          />
          <Text c="secondary.10" size="xl" fw={700}>
            Lunch
          </Text>
        </Group>
      </Group>
      <Group>
        <Image
          src="/ingredients.png"
          alt="Ingredients icon"
          width={64}
          height={64}
        />
        <List className="flex flex-row items-center flex-wrap gap-2">
          <ListItem>
            <Badge variant="light" color="green">
              Spinach
            </Badge>
          </ListItem>
          <ListItem>
            <Badge variant="light" color="green">
              Cottage Cheese
            </Badge>
          </ListItem>
          <ListItem>
            <Badge variant="light" color="green">
              Pepper
            </Badge>
          </ListItem>
        </List>
      </Group>
      <Group wrap="nowrap">
        <Image
          src="/meal-description.png"
          alt="Meal description icon"
          width={64}
          height={64}
        />
        <Text c="secondary.10" size="lg">
          Completely renovated for the season 2020, Arena Verudela Bech
          Apartments are fully equipped and modernly furnished 4-star
          self-service apartments located on the Adriatic coastline by one of
          the most beautiful beaches in Pula.
        </Text>
      </Group>
      <Group justify="space-between">
        <div></div>
        <ButtonGroup>
          <Button color="green" leftSection={<IconPlus size={14} />}>
            New Recipe
          </Button>
          <Button variant="default" leftSection={<IconShare size={14} />}>
            Share
          </Button>
          <Button variant="default" leftSection={<IconHeart size={14} />}>
            Save
          </Button>
        </ButtonGroup>
      </Group>
      <Grid className="grid-overflow ">
        <GridCol span={8} className="border rounded-sm">
          <ScrollArea h={250}>
            <figure className=" w-full flex flex-row items-start gap-2 ">
              <Box className="sticky top-0 w-1/2 h-[250px] shrink-0">
                <Box className=" relative w-full h-full overflow-hidden rounded-sm">
                  <Image
                    src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=300&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Meal description icon"
                    fill
                  />
                </Box>
              </Box>
              <figcaption>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                hic reprehenderit est temporibus laborum pariatur deserunt
                nesciunt enim id culpa, ea ducimus incidunt ex esse, itaque
                laboriosam eum, voluptate vero quidem quaerat dolorum. Sequi
                nemo soluta explicabo porro culpa vel necessitatibus dignissimos
                praesentium error id deleniti, reprehenderit atque ullam sunt
                eligendi laudantium dicta quidem nam nostrum fugit inventore
                officia ad ut. Quis a molestiae nam aspernatur veritatis
                corrupti voluptatem tenetur placeat consectetur recusandae!
                Dolore, omnis animi illo voluptas expedita quidem aut, id
                voluptatum dolor qui laborum quam sed, obcaecati beatae
                accusamus. Est minima aspernatur, totam consequatur ab dolorum
                nostrum maiores.
              </figcaption>
            </figure>
          </ScrollArea>
          <Divider
            my="xs"
            label="Step 1: Prepare Lorem, ipsum dolor."
            labelPosition="left"
          />
        </GridCol>
        <GridCol span={4}>
          <Box className="  sticky top-0">
            <ScrollArea h={504}>
              <Paper
                component="button"
                shadow="none"
                withBorder
                p="0"
                className="h-[156px] w-full hover:bg-gray-100 active:translate-y-[0.0625rem]"
              >
                <div className="h-full w-full flex flex-col justify-between items-center">
                  <div />
                  <IconPlus size={32} />
                  New Version
                </div>
              </Paper>
              <Card p="0" mt="md" withBorder className="relative">
                <CardSection>
                  <Box className="relative w-full h-[156px]">
                    <Image
                      src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      fill
                      alt="Food"
                      className="object-cover"
                    />
                  </Box>
                  <Badge color="green" className="absolute bottom-3 left-3">
                    v1
                  </Badge>
                </CardSection>
              </Card>
            </ScrollArea>
          </Box>
        </GridCol>
      </Grid>
    </Stack>
  );
}
