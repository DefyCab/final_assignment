import { db } from "@/db";
import { createService } from "./service";
import { userService } from "../users/instance";

export type Db = typeof db;

const getWinningChoice = async () => {
  return await userService.getWinningChoice();
};
const getAll = async () => {
  return await userService.getAll();
};
const getVotes = async () => {
  return await userService.getVotes();
};
const getVotesFromRepresentative = async (id: string) => {
  return await userService.getVotesFromRepresentative(id);
};
const getChoicesOnAllElections = async (id: string) => {
  return await userService.getChoicesOnAllElections(id);
};
const getChoiceOnElection = async (user_id: string, id: string) => {
  return await userService.getChoiceOnElection(user_id, id);
};

export const electionService = createService(
  db,
  getAll,
  getVotes,
  getVotesFromRepresentative,
  getWinningChoice,
  getChoicesOnAllElections,
  getChoiceOnElection
);
