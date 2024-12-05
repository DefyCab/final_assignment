import { userService } from "../instance";
import { Back } from "./back";

type Id = {
  id: string;
};

export async function User({ id }: Id) {
  const user = await userService.get(id);

  await userService.update(id);

  if (!user) return;
  return (
    <>
      <article>
        {user.map((user) => (
          <p key={user.id}>{user.name} has been nominated!</p>
        ))}
      </article>
      <Back />
    </>
  );
}
