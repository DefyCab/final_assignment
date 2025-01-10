import { db } from "@/db";
import { createService } from "./service";
import { userService } from "../users/instance";

export type Db = typeof db;

export const electionService = createService(db, userService);

