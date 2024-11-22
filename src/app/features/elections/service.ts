import { createRepository } from "./repository";

export function createService(db: any) {
  const repository = createRepository(db);

  return {
    async getAll() {
      return repository.getAll()
    },
  };
}
