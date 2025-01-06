import { sql } from "drizzle-orm";
import {
  pgTable,
  boolean,
  uuid,
  text,
  timestamp,
  jsonb,
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

// id: election id
// issue: what the election is regarding
// options: available options for representatives to vote for
// createdAt: when the election was created
// status: is the election ongoing or closed.
// winningChoice: which option recived the most votes.