import { Db } from "./instance";
import { createRepository } from "./repository";

export type Election = {
  id: string;
  issue: string;
  createdAt: string;
  status: boolean;
};

export function createService(db: Db) {
  const repository = createRepository(db);

  return {
    getAll: () => {
      return repository.getAll();
    },
    get: async (id: string) => {
      return repository.get(id);
    },
    create: async (issue: string) => {
      const election: Election = {
        id: "e0ed55de-75d1-4994-8536-a6fb87f745b8",
        issue: issue,
        createdAt: "2024-11-23 13:14:28.025678",
        status: true,
      };
      return repository.create(election);
    },
  };
}
