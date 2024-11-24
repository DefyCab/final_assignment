import { sql } from "drizzle-orm";
import { pgTable, boolean, uuid, text, timestamp } from "drizzle-orm/pg-core";

export const electionsTable = pgTable("elections", {
  id: uuid("id").primaryKey().defaultRandom(),
  issue: text("issue").notNull(),
  options: text("options").array().notNull(),
  createdAt: timestamp("createdAt", { mode: "string" })
    .notNull()
    .default(sql`now()`),
  status: boolean(),
});

