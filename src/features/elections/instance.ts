import { db } from "@/db";
import { createService } from "./service";

export type Db = typeof db;

export const electionService = createService(db);
