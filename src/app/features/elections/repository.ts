import { Db } from "./instance";

export function createRepository(db: Db) {
  return {
    getAll: () => {
      return db;
    },
  };
}
