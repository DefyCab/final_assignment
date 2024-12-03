import { representatives } from "@/db/schema";
import { Db } from "./instance";
import { z } from "zod";

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
  };
}
