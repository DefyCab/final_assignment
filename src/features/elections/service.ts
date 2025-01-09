import { Db } from "./instance";
import { CreateElection, createRepository } from "./repository";
import { userService } from "../users/instance";
export function createService(db: Db) {
  const repository = createRepository(db);

  return {
    getAll: async () => {
      return await repository.getAll();
    },
    get: async (id: string) => {
      return await repository.get(id);
    },
    create: async (election: CreateElection) => {
      return await repository.create(election);
    },
    update: async (id: string, winningChoice: number) => {
      return await repository.update(id, winningChoice);
    },
    getRepresentatives: async () => {
      const users = await userService.getAll();

      if (!users) return;

      const representatives = users.filter(
        (user) => user.representative === true
      );

      return representatives;
    },
    getVotes: async () => {
      return await userService.getVotes();
    },
    getVotesFromRepresentative: async (id: string) => {
      return await userService.getVotesFromRepresentative(id);
    },
    getWinningChoice: async () => {
      return await userService.getWinningChoice();
    },
    getChoicesOnAllElections: async (id: string) => {
      return await userService.getChoicesOnAllElections(id);
    },
    getChoiceOnElection: async (user_id: string, id: string) => {
      return await userService.getChoiceOnElection(user_id, id);
    },
  };
}
