import { pgTable, uuid, integer } from "drizzle-orm/pg-core";

export const votes = pgTable("votes", {
  user_id: uuid("id").primaryKey(),
  votes: integer(),
});
