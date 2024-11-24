import { Db } from "./instance";
import { Election } from "./service";

export function createRepository(db: Db) {
  const data = db;

  return {
    getAll: () => {
      return data;
    },
    get: (id: string) => {
      const election = data.filter((election) => election.id === id);
      return election;
    },
    create: (election: Election) => {
      return data.push(election);
    },
  };
}
