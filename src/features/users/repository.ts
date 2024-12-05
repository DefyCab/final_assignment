import { representatives } from "../../db/schema";
import { userService } from "./instance";
import type { Db } from "./instance";
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
      try {
        const result = await db.select().from(representatives);
        return result;
      } catch (error) {
        console.log(error);
      }
    },
    get: async (id: string) => {
      try {
        const result = await db
          .select()
          .from(representatives)
          .where(eq(representatives.id, id));

        return result;
      } catch (error) {
        console.log(error);
      }
    },
    update: async (id: string) => {
      const user = await userService.get(id);

      return;
      // return await db.update(representatives).set({});
    },
  };
}
