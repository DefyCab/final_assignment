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

const CreateUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  representative: z.boolean(),
});

export type Representatives = z.infer<typeof RepresentativesSchema>;
export type CreateUser = z.infer<typeof CreateUserSchema>;

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
      try {
        const user = await userService.get(id);
        if (!user) return;

        if (!user[0].representative === false) return;
        return await db
          .update(representatives)
          .set({
            ...(!user[0].representative && { representative: true }),
          })
          .where(eq(representatives.id, id));
      } catch (error) {
        console.log(error);
      }
    },
    create: async (user: CreateUser) => {
      try {
        const userToValidate = CreateUserSchema.safeParse(user);

        if (!userToValidate.success) {
          return console.log(userToValidate.error.message);
        }

        console.log(userToValidate.success);

        await db.insert(representatives).values(user);
      } catch (error) {
        console.log(error);
      }
    },
  };
}
