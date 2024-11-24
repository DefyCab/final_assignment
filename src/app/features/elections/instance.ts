import { db } from "./db/index"

import { createService } from "./service";

export type Db = typeof db;

export const electionService = createService(db);
