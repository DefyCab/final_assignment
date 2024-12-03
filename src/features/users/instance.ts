import { db } from "../../db/drizzle";

import { createService } from "./service";

export type Db = typeof db;

export const userService = createService(db);
