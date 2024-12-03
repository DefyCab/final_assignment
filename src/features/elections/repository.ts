import { Db, electionService } from "./instance";
import { elections } from "../../db/schema";
import { desc, eq } from "drizzle-orm";
import { CreateElection } from "./service";
import { z } from "zod";

const ElectionsSchema = z.object({
  id: z.string().uuid(),
  issue: z.string(),
  options: z.array(z.string()),
  createdAt: z.string(),
  status: z.boolean(),
});

export type Election = z.infer<typeof ElectionsSchema>;

export function createRepository(db: Db) {
  return {
    getAll: async () => {
      return await db
        .select()
        .from(elections)
        .limit(10)
        .orderBy(desc(elections.createdAt));
    },
    get: async (id: string) => {
      return await db.select().from(elections).where(eq(elections.id, id));
    },
    create: async (election: CreateElection) => {
      return await db.insert(elections).values(election);
    },
    update: async (id: string) => {
      const election = await electionService.get(id);

      if (election[0].status === false) {
        return;
      }

      return await db
        .update(elections)
        .set({
          ...(election[0].status && { status: false }),
        })
        .where(eq(elections.id, id));
    },
  };
}
