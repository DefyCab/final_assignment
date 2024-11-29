import { Db } from "./instance";
import { Election } from "./service";

export function createRepository(db: Db) {
  const elections = db;

  return {
    getAll: () => {
      return elections;
    },
    get: (id: string) => {
      const election = elections.filter((election) => election.id === id);
      return election;
    },
    create: (election: Election) => {
      return elections.push(election);
    },
  };
}
