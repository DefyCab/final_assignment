import db from "./db/fixtures/users.json"

import { createService } from "./service"

export type Db = typeof db;

export const userService = createService(db);