import db from "../db/fixtures/elections.json";

import { createService } from "./service";

export const electionService = createService(db);
