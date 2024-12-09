import { sql } from "drizzle-orm";
import {
  pgTable,
  boolean,
  uuid,
  text,
  timestamp,
  jsonb,
  varchar,
  integer,
} from "drizzle-orm/pg-core";

export const elections = pgTable("elections", {
  id: uuid("id").primaryKey().defaultRandom(),
  issue: text("issue").notNull(),
  options: jsonb("options").$type<string[]>().notNull(),
  createdAt: timestamp("createdAt", { mode: "string" })
    .notNull()
    .default(sql`now()`),
  status: boolean().notNull(),
});

export const representatives = pgTable("representatives", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name").notNull(),
  email: varchar("email", { length: 255 }).unique().notNull(),
  representative: boolean().notNull(),
});

export const votes = pgTable("votes", {
  user_id: uuid("id").primaryKey(),
  votes: integer(),
});
