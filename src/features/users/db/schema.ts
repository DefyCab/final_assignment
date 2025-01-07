import {
  pgTable,
  boolean,
  uuid,
  varchar,
  integer,
  jsonb,
} from "drizzle-orm/pg-core";

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

export const election_choices = pgTable("election_choices", {
  id: uuid("id").primaryKey().defaultRandom(),
  user_id: uuid("user_id").notNull(),
  election_choices: jsonb("election_choices").notNull(),
});
// users scehma

// id: id of that user
// name: user's name
// email: user's email
// representive: if the user is a representative
// vote: which representative have the user give his vote
