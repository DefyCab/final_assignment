import { userService } from "../instance";
import { NominateUserToRepresentative } from "./nominate-user-to-representative";

export async function Nominate() {
  const users = await userService.getAll();

  return <NominateUserToRepresentative users={users} />;
}
