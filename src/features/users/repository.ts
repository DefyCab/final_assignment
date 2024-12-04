import { representatives } from "../../db/schema";
import { Db } from "./instance";
import { z } from "zod";
import { eq } from "drizzle-orm";

const RepresentativesSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  email: z.string().email(),
  representative: z.boolean(),
});

export type Representatives = z.infer<typeof RepresentativesSchema>;

export function createRepository(db: Db) {
  return {
    getAll: async () => {
      return await db.select().from(representatives);
    },
    get: async (id: string) => {
      return await db
        .select()
        .from(representatives)
        .where(eq(representatives.id, id));
    },
    update: async (id: string) => {
      return await db.update(representatives);
    },
  };
}
