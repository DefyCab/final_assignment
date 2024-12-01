import { Db } from "./instance";
import { elections } from "@/db/schema";
import { eq } from "drizzle-orm";
import { Election } from "./service";

export function createRepository(db: Db) {
  return {
    getAll: async () => {
      return await db.select().from(elections).limit(10);
    },
    get: async (id: string) => {
      return await db.select().from(elections).where(eq(elections.id, id));
    },
    // create: (election: Election) => {
    //   return elections.push(election);
    // },
  };
}
