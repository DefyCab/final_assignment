import { userService } from "../instance";
import { NominateUserToRepresentative } from "./nominate-user-to-representative";
import { Back } from "./back";

export async function Nominate() {
  const users = await userService.getAll();

  return (
    <>
      <NominateUserToRepresentative users={users} />
      <Back />
    </>
  );
}
