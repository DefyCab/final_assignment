import { userService } from "../instance";
import { NominateUserToRepresentative } from "./nominate-user-to-representative";

export async function Nominate()  {
  const users = await userService.getAll();
  const id = await userService.getId()


  

  return <NominateUserToRepresentative users={users} />;
}
