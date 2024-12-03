import { representatives } from "@/db/schema";
import { Db } from "./instance";

export function createRepository(db: Db) {
  return {
    getAll: async () => {
      return await db.select().from(representatives);
    },
  };
}
