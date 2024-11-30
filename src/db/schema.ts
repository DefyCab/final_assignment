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
  options: jsonb("options").notNull(),
  createdAt: timestamp("createdAt", { mode: "string" })
    .notNull()
    .default(sql`now()`),
  status: boolean(),
});
