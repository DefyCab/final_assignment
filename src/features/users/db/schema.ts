import {
  pgTable,
  boolean,
  uuid,
  varchar,
  integer,
  jsonb,
} from "drizzle-orm/pg-core";
import { ElectionChoice } from "../types";

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name").notNull(),
  email: varchar("email", { length: 255 }).unique().notNull(),
  representative: boolean("representative").notNull(),
});

export const votes = pgTable("votes", {
  id: uuid("id").primaryKey().defaultRandom(),
  user_id: uuid("user_id").unique(),
  votes: integer("votes").notNull(),
});

export const election_choices = pgTable("election_choices", {
  id: uuid("id").primaryKey().defaultRandom(),
  user_id: uuid("user_id").unique().notNull(),
  election_choices: jsonb("election_choices")
    .$type<ElectionChoice[]>()
    .notNull(),
});
