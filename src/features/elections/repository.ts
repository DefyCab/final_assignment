import { Db, electionService } from "./instance";
import { elections } from "../../db/schema";
import { asc, eq } from "drizzle-orm";
import { z } from "zod";

const ElectionsSchema = z.object({
  id: z.string().uuid(),
  issue: z.string(),
  options: z.array(z.string()),
  createdAt: z.string(),
  status: z.boolean(),
});

const CreateElectionsSchema = z.object({
  issue: z.string(),
  options: z.array(z.string()),
  status: z.boolean(),
});

export type Election = z.infer<typeof ElectionsSchema>;
export type CreateElection = z.infer<typeof CreateElectionsSchema>;

export function createRepository(db: Db) {
  return {
    getAll: async () => {
      try {
        return await db
          .select()
          .from(elections)
          .limit(10)
          .orderBy(asc(elections.createdAt));
      } catch (error) {
        console.log(error);
      }
    },
    get: async (id: string) => {
      try {
        return await db.select().from(elections).where(eq(elections.id, id));
      } catch (error) {
        console.log(error);
      }
    },
    create: async (election: CreateElection) => {
      try {
        const electionToValidate = ElectionsSchema.safeParse(election);

        if (!electionToValidate.success) {
          return console.log(electionToValidate.error.message);
        }

        return await db.insert(elections).values(election);
      } catch (error) {
        console.log(error);
      }
    },
    update: async (id: string) => {
      try {
        const election = await electionService.get(id);

        if (!election) return console.log("Election not found");

        if (election[0].status === false) {
          return;
        }

        return await db
          .update(elections)
          .set({
            ...(election[0].status && { status: false }),
          })
          .where(eq(elections.id, id));
      } catch (error) {
        console.log(error);
      }
    },
  };
}
