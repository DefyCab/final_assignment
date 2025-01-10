import { ElectionChoice } from "../users/types";
import { Db, electionService } from "./instance";
import { createRepository } from "./repository";
import type { User } from "./types";
import { z } from "zod";

const electionsSchema = z.object({
  id: z.string().uuid(),
  issue: z.string(),
  options: z.array(z.string()),
  createdAt: z.string(),
  status: z.boolean(),
});

const createElectionsSchema = z.object({
  issue: z.string(),
  options: z.array(z.string()),
  status: z.boolean(),
});

export type Election = z.infer<typeof electionsSchema>;
export type CreateElection = z.infer<typeof createElectionsSchema>;

export function createService(
  db: Db,
  getAll: () => Promise<
    | {
        name: string;
        email: string;
        representative: boolean;
        id: string;
      }[]
    | undefined
  >,
  getVotes: () => Promise<
    | {
        id: string;
        votes: number;
        user_id: string;
      }[]
    | undefined
  >,
  getVotesFromRepresentative: (id: string) => Promise<number>,
  getWinningChoice: () => Promise<void>,
  getChoicesOnAllElections: (id: string) => Promise<ElectionChoice[]>,
  getChoiceOnElection: (user_id: string, id: string) => Promise<number>
) {
  const repository = createRepository(db);
  return {
    getAll: async () => {
      const data = await repository.getAll();
      const electionsArray = z.array(electionsSchema);
      try {
        const electionsToValidate = electionsArray.safeParse(data);

        if (!electionsToValidate.success) {
          console.log(electionsToValidate.error.message);
        }
        return {
          data: electionsToValidate.data,
          tags: ["elections"],
        };
      } catch (error) {
        console.log(error);
      }
    },
    get: async (id: string) => {
      return await repository.get(id);
    },
    create: async (election: CreateElection) => {
      try {
        const electionToValidate = createElectionsSchema.safeParse(election);

        if (!electionToValidate.success) {
          console.log(electionToValidate.error.message);
        }
        return await repository.create(election);
      } catch (error) {
        console.log(error);
      }
    },
    update: async (
      id: string,
      winningChoice: number,
      optionVotes: number[]
    ) => {
      return await repository.update(id, winningChoice, optionVotes);
    },
    getRepresentatives: async () => {
      const users = await getAll();

      if (!users) return;

      const representatives = users.filter(
        (user: User) => user.representative === true
      );

      return representatives;
    },
    getVotes: async () => {
      return await getVotes();
    },
    getVotesFromRepresentative: async (id: string) => {
      return await getVotesFromRepresentative(id);
    },
    getWinningChoice: async () => {
      return await getWinningChoice();
    },
    getChoicesOnAllElections: async (id: string) => {
      return await getChoicesOnAllElections(id);
    },
    getChoiceOnElection: async (user_id: string, id: string) => {
      return await getChoiceOnElection(user_id, id);
    },
    closeElection: async (election_id: string) => {
      const representatives = await electionService.getRepresentatives();

      if (!representatives) {
        throw new Error("Something went wrong");
      }

      console.log(representatives);

      let optionOne = 0;
      let optionTwo = 0;
      let optionThree = 0;

      for (let i = 0; i < representatives.length; i++) {
        const userId = representatives[i].id;

        const choice = await electionService.getChoiceOnElection(
          representatives[i].id,
          election_id
        );

        if (choice === 1) {
          const votes = await electionService.getVotesFromRepresentative(
            userId
          );
          optionOne = optionOne + votes;
          console.log(optionOne);
        }

        if (choice === 2) {
          const votes = await electionService.getVotesFromRepresentative(
            userId
          );
          optionTwo = optionTwo + votes;
          console.log(optionTwo);
        }

        if (choice === 3) {
          const votes = await electionService.getVotesFromRepresentative(
            userId
          );
          optionThree = optionThree + votes;
          console.log(optionThree);
        }
      }

      let winningChoice = 0;
      const highestCount = Math.max(optionOne, optionThree, optionThree);

      for (let i = 0; i < 3; i++) {
        if (highestCount === optionOne) {
          winningChoice = 1;
        }
        if (highestCount === optionTwo) {
          winningChoice = 2;
        }
        if (highestCount === optionThree) {
          winningChoice = 3;
        }
      }

      const optionVotes = [optionOne, optionTwo, optionThree];
      return await electionService.update(
        election_id,
        winningChoice,
        optionVotes
      );
    },
  };
}
