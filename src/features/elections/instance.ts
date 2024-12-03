import { db } from "../../db/drizzle";
import type { Election } from "./repository";
import { createService } from "./service";

export type Db = typeof db;

export const electionService = createService(db);
