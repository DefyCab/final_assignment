import { Db } from "./instance";
import { createRepository, CreateUser, VoteData } from "./repository";

export function createService(db: Db) {
  const repository = createRepository(db);

  return {
    getAll: async () => {
      return await repository.getAll();
    },
    get: async (id: string) => {
      return await repository.get(id);
    },
    update: async (id: string) => {
      return await repository.update(id);
    },
    create: async (user: CreateUser) => {
      return await repository.create(user);
    },
    getVoteData: async () => {
      return await repository.getVoteData();
    },
    createVoteData: async (voteData: VoteData) => {
      return await repository.createVoteData(voteData);
    },
  };
}
