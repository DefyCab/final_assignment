import { Db } from "./instance";
import { Election } from "./service";

export function createRepository(db: Db) {
  const data = db;

  console.log(data);

  return {
    getAll: () => {
      return data;
    },

    create: (election: Election) => {
      console.log(election);
      
      return data.push(election);
    },
  };
}
