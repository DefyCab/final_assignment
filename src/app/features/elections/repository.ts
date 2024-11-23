import { Db } from "./instance";
import { Election } from "./service";

export function createRepository(db: Db) {
  const data = db;

  return {
    getAll: () => {
      return data;
    },

    create: (election: Election) => {
      return data.push(election);
    },
  };
}
