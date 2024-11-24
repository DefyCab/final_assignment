import { Db } from "./instance";
import { createRepository } from "../users/repository";

export function createService(db: Db) {
  const repository = createRepository(db);

  return {
    getAll: () => {
      return repository.getAll();
    },
  };
}
