import { userService } from "../instance";

type Id = {
  id: string;
};

export async function User({ id }: Id) {
  const user = await userService.get(id);

  return (
    <article>
      {user?.map((user) => (
        <p key={user.id}>{user.name} has been nominated!</p>
      ))}
    </article>
  );
}
