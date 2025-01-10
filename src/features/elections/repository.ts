import { Db, electionService } from "./instance";
import { elections } from "./db";
import { desc, eq } from "drizzle-orm";
import { CreateElection } from "./service";

export function createRepository(db: Db) {
  return {
    getAll: async () => {
      return await db
        .select()
        .from(elections)
        .orderBy(desc(elections.createdAt));
    },
    get: async (id: string) => {
      try {
        return await db.select().from(elections).where(eq(elections.id, id));
      } catch (error) {
        console.log(error);
      }
    },
    create: async (election: CreateElection) => {
      return await db.insert(elections).values(election);
    },
    update: async (
      id: string,
      winningChoice: number,
      optionVotes: number[]
    ) => {
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
            number_of_votes_per_option: optionVotes,
          })
          .where(eq(elections.id, id));
      } catch (error) {
        console.log(error);
      }
    },
  };
}
