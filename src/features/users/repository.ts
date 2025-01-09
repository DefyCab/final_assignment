import { users, votes, election_choices } from "./db";
import { userService } from "./instance";
import type { Db } from "./instance";
import { z } from "zod";
import { eq } from "drizzle-orm";

const usersSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  email: z.string().email(),
  representative: z.boolean(),
});

const createUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  representative: z.boolean(),
});

const voteDataSchema = z.object({
  id: z.string(),
  user_id: z.string().uuid(),
  votes: z.number(),
});

export type Representatives = z.infer<typeof usersSchema>;
export type CreateUser = z.infer<typeof createUserSchema>;
export type VoteData = {
  user_id: string;
  votes: number;
};
// export type ElectionChoices = {
//   choice: number;
//   election_id: string;
// };

export function createRepository(db: Db) {
  return {
    getAll: async () => {
      try {
        const data = await db.select().from(users);

        const usersArray = z.array(usersSchema);

        const usersToValidate = usersArray.safeParse(data);

        if (!usersToValidate.success) {
          console.log(usersToValidate.error.message);
        }

        return usersToValidate.data;
      } catch (error) {
        console.log(error);
      }
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
      try {
        const user = await userService.get(id);
        if (!user) return console.log("User not found");
        if (!user[0].representative === false) return;
        return await db
          .update(users)
          .set({
            ...(!user[0].representative && { representative: true }),
          })
          .where(eq(users.id, id));
      } catch (error) {
        console.log(error);
      }
    },
    create: async (user: CreateUser) => {
      try {
        const userToValidate = createUserSchema.safeParse(user);

        if (!userToValidate.success) {
          return console.log(userToValidate.error.message);
        }

        await db.insert(users).values(user);
      } catch (error) {
        console.log(error);
      }
    },
    getVotes: async () => {
      try {
        const voteData = await db.select().from(votes);

        const voteDataArray = z.array(voteDataSchema);

        const voteDataToValidate = voteDataArray.safeParse(voteData);

        if (!voteDataToValidate.success) {
          console.log(voteDataToValidate.error.message);
        }

        return voteDataToValidate.data;
      } catch (error) {
        console.log(error);
      }
    },
    getVotesFromRepresentative: async (id: string) => {
      const data = await db.select().from(votes).where(eq(votes.user_id, id));

      return data;
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
    getChoiceOnElection: async (user_id: string, id: string) => {
      const electionChoices = await userService.getChoicesOnAllElections(
        user_id
      );

      const choices = electionChoices.find(
        (choice: any) => choice.election_id === id
      );

      return choices;
    },
  };
}
