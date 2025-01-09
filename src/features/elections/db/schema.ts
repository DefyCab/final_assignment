import { sql } from "drizzle-orm";
import {
  pgTable,
  boolean,
  uuid,
  text,
  timestamp,
  jsonb,
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
  winning_choice: integer("winning_choice"),
  number_of_votes_per_option: jsonb("number_of_votes_per_option").$type<
    number[]
  >(),
});

// id: election id
// issue: what the election is regarding
// options: available options for representatives to vote for
// createdAt: when the election was created
// status: is the election ongoing or closed.
// winning_choice: which option recived the most votes.
// number_of_votes_per_option: representatives votes placed on each option
