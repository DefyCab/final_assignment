import { Db, electionService } from "./instance";
import { elections } from "./db";
import { desc, eq } from "drizzle-orm";
import { z } from "zod";

const electionsSchema = z.object({
  id: z.string().uuid(),
  issue: z.string(),
  options: z.array(z.string()),
  createdAt: z.string(),
  status: z.boolean(),
});

const createElectionsSchema = z.object({
  issue: z.string(),
  options: z.array(z.string()),
  status: z.boolean(),
});

export type Election = z.infer<typeof electionsSchema>;
export type CreateElection = z.infer<typeof createElectionsSchema>;

export function createRepository(db: Db) {
  return {
    getAll: async () => {
      try {
        const data = await db
          .select()
          .from(elections)
          .orderBy(desc(elections.createdAt));

        const electionsArray = z.array(electionsSchema);

        const electionsToValidate = electionsArray.safeParse(data);

        if (!electionsToValidate.success) {
          console.log(electionsToValidate.error.message);
        }
        return {
          data: electionsToValidate.data,
          tags: ["elections"],
        };
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
        const electionToValidate = createElectionsSchema.safeParse(election);

        if (!electionToValidate.success) {
          console.log(electionToValidate.error.message);
        }

        return await db.insert(elections).values(election);
      } catch (error) {
        console.log(error);
      }
    },
    update: async (id: string, winningChoice: number) => {
      try {
        const election = await electionService.get(id);

        if (!election) return console.log("Election not found");

        if (election[0].status === false) {
          return;
        }

        return await db
          .update(elections)
          .set({
            status: false,
            winning_choice: winningChoice,
          })
          .where(eq(elections.id, id));
      } catch (error) {
        console.log(error);
      }
    },
  };
}
