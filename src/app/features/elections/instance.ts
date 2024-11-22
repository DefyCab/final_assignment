import db from "../db/fixtures/elections.json";

import { createService } from "./service";

export type Db = typeof db

export const electionService = createService(db);
