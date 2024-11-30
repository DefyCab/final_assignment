import { Db } from "./instance";
import { Election } from "./service";
import { elections } from "@/db/schema";

export function createRepository(db: Db) {
  return {
    getAll: async () => {
      await db.select().from(elections);
    },
    // get: (id: string) => {
    //   const election = elections.filter((election) => election.id === id);
    //   return election;
    // },
    // create: (election: Election) => {
    //   return elections.push(election);
    // },
  };
}
