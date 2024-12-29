import { pgTable, boolean, uuid, varchar, integer } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name").notNull(),
  email: varchar("email", { length: 255 }).unique().notNull(),
  representative: boolean("representative").notNull(),
});

export const votes = pgTable("votes", {
  id: uuid("id").primaryKey().defaultRandom(),
  user_id: uuid("user_id").unique(),
  votes: integer("votes"),
});
