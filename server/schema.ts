import { relations } from "drizzle-orm";
import {
  pgTable,
  serial,
  text,
  varchar,
  uuid,
  date,
  pgEnum,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: varchar("id", { length: 512 }).notNull().unique().primaryKey(),
  email: varchar("email", { length: 256 }).notNull().unique(),
  createdAt: date("created_at").notNull().defaultNow(),
  updatedAt: date("updated_at"),
});

export const userRelations = relations(users, ({ many }) => ({
  recipes: many(recipes),
}));

export const recipeType = pgEnum("type", [
  "breakfast",
  "lunch",
  "dinner",
  "snack",
  "drink",
]);

export const recipes = pgTable("recipes", {
  id: uuid("id").defaultRandom().primaryKey(),
  createdAt: date("created_at").notNull().defaultNow(),
  updatedAt: date("updated_at"),
  type: recipeType("type"),
  userId: varchar("user_id", { length: 512 })
    .notNull()
    .references(() => users.id),
});

export const recipeRelations = relations(recipes, ({ one, many }) => ({
  user: one(users, {
    fields: [recipes.userId],
    references: [users.id],
  }),
  versions: many(recipeVersions),
}));

export const recipeVersions = pgTable("recipe_versions", {
  id: uuid("id").defaultRandom().primaryKey(),
  createdAt: date("created_at").notNull().defaultNow(),
  prompt: text("prompt").notNull(),
  description: text("description"),
  ingredients: varchar("ingredients", { length: 1024 }).array(),
  recipeId: uuid("recipe_id")
    .notNull()
    .references(() => recipes.id),
});

export const recipeVersionRelations = relations(
  recipeVersions,
  ({ one, many }) => ({
    recipe: one(recipes, {
      fields: [recipeVersions.recipeId],
      references: [recipes.id],
    }),
    steps: many(steps),
  })
);

export const steps = pgTable("steps", {
  id: uuid("id").defaultRandom().primaryKey(),
  createdAt: date("created_at").notNull().defaultNow(),
  description: text("description"),
  shortDescription: text("short_description"),
  img: varchar("img", { length: 1024 }),
  recipeVersionId: uuid("recipe_version_id")
    .notNull()
    .references(() => recipeVersions.id),
});

export const stepsRelations = relations(steps, ({ one }) => ({
  recipeVersion: one(recipeVersions, {
    fields: [steps.recipeVersionId],
    references: [recipeVersions.id],
  }),
}));
