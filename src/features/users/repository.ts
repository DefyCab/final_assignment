import { users, votes, election_choices } from "./db";
import { userService } from "./instance";
import { eq } from "drizzle-orm";
import type { Db } from "./instance";
import type { VoteData } from "./types";
import type { CreateUser } from "./service";

export function createRepository(db: Db) {
  return {
    getAll: async () => {
      return await db.select().from(users);
    },
    get: async (id: string) => {
      try {
        const result = await db.select().from(users).where(eq(users.id, id));
        return result;
      } catch (error) {
        console.log(error);
      }
    },
    update: async (id: string) => {
      const user = await userService.get(id);
      if (!user) return console.log("User not found");
      if (!user[0].representative === false) return;
      await db
        .update(users)
        .set({
          ...(!user[0].representative && { representative: true }),
        })
        .where(eq(users.id, id));

      await db.insert(election_choices).values({
        user_id: user[0].id,
        election_choices: [],
      });
      await db.insert(votes).values({
        user_id: user[0].id,
        votes: 0,
      });
    },
    create: async (user: CreateUser) => {
      await db.insert(users).values(user);
    },
    getVotes: async () => {
      return await db.select().from(votes);
    },
    getVotesFromRepresentative: async (id: string) => {
      const data = await db.select().from(votes).where(eq(votes.user_id, id));

      const representativesVotes = data.map((vote) => vote.votes);

      return representativesVotes[0];
    },
    createVoteData: async (voteData: VoteData) => {
      await db.insert(votes).values(voteData);
    },
    getWinningChoice: async () => {
      await db.select().from(users);
    },
    getChoicesOnAllElections: async (id: string) => {
      const data = await db
        .select()
        .from(election_choices)
        .where(eq(election_choices.user_id, id));

      const electionsChoices = data.flatMap(
        (representative) => representative.election_choices
      );

      return electionsChoices;
    },
    getChoiceOnElection: async (
      user_id: string,
      id: string
    ): Promise<number> => {
      const data = await db
        .select()
        .from(election_choices)
        .where(eq(election_choices.user_id, user_id));

      const electionChoices = data.flatMap((row) => row.election_choices);

      const choice = electionChoices.find(
        (choice) => choice.election_id === id
      );

      if (!choice) {
        return 0;
      }

      return choice.choice;
    },
  };
}
