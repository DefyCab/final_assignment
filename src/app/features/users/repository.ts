import { Db } from "./instance";

export function createRepository(db: Db) {
  const users = db;
  return {
    getAll: () => {
      return users;
    },
  };
}
