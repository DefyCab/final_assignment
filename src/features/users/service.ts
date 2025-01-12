import { Db } from "./instance";
import { createRepository } from "./repository";
import { z } from "zod";
import { VoteData } from "./types";

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

export function createService(db: Db) {
  const repository = createRepository(db);

  return {
    getAll: async () => {
      const data = await repository.getAll();
      const usersArray = z.array(usersSchema);
      const usersToValidate = usersArray.safeParse(data);

      if (!usersToValidate.success) {
        throw new Error(usersToValidate.error.message);
      }

      return usersToValidate.data;
    },
    get: async (id: string) => {
      return await repository.get(id);
    },
    update: async (id: string) => {
      return await repository.update(id);
    },
    create: async (user: CreateUser) => {
      const userToValidate = createUserSchema.safeParse(user);

      if (!userToValidate.success) {
        throw new Error(userToValidate.error.message);
      }

      return await repository.create(user);
    },
    getVotes: async () => {
      const votes = await repository.getVotes();
      const votesArray = z.array(voteDataSchema);
      const voteDataToValidate = votesArray.safeParse(votes);

      if (!voteDataToValidate.success) {
        throw new Error(voteDataToValidate.error.message);
      }

      return voteDataToValidate.data;
    },
    getVotesFromRepresentative: async (id: string) => {
      return await repository.getVotesFromRepresentative(id);
    },
    createVoteData: async (voteData: VoteData) => {
      return await repository.createVoteData(voteData);
    },
    getWinningChoice: async () => {
      return await repository.getWinningChoice();
    },
    getChoicesOnAllElections: async (id: string) => {
      return await repository.getChoicesOnAllElections(id);
    },
    getChoiceOnElection: async (user_id: string, id: string) => {
      return await repository.getChoiceOnElection(user_id, id);
    },
  };
}
