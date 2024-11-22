import { Db } from "./instance";
import { createRepository } from "./repository";

export function createService(db: Db) {
  const repository = createRepository(db);

  return {
    getAll: async () => {
      return repository.getAll();
    },
  };
}
