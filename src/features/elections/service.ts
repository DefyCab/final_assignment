import { Db } from "./instance";
import { CreateElection, createRepository } from "./repository";
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
    update: async (id: string) => {
      return await repository.update(id);
    },
  };
}
