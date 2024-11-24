import { electionsTable } from "./db/schema";
import { Db } from "./instance";
import { Election } from "./service";

export function createRepository(db: Db) {

  return {
    getAll: async () => {
      return await db.select().from(electionsTable)
    },
    get: (id: string) => {
      
    },
    create: (election: Election) => {
      
    },
  };
}
