import { Db } from "./instance";
import { createRepository } from "./repository";

export type Options = {
  options: String[];
};

export type Election = {
  id: string;
  issue: string;
  options: Options | unknown;
  createdAt: string;
  status: boolean;
};

export function createService(db: Db) {
  const repository = createRepository(db);

  return {
    getAll: async () => {
      return await repository.getAll();
    },
    get: async (id: string) => {
      return await repository.get(id);
    },
    create: async (election: any) => {
      return await repository.create(election);
    },
  };
}
