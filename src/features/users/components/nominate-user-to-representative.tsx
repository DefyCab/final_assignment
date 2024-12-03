import { userService } from "../instance";

export async function NominateUserToRepresentative() {
  const users = await userService.getAll();
  return (
    <article>
      <p className="mt-4 text-decoration-line: underline font-semibold">
        Voters to Nominate
      </p>

      {users
        .filter((user) => !user.representative)
        .map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
    </article>
  );
}
