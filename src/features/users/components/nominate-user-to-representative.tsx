import { userService } from "../instance";
import { setRepresentative } from "../action";

export async function NominateUserToRepresentative() {
  const users = await userService.getAll();

  function getId(id: string) {
    setRepresentative(id);
  }

  return (
    <article>
      <p className="mt-4 text-decoration-line: underline font-semibold">
        Voters to Nominate
      </p>

      {users
        .filter((user) => !user.representative)
        .map((user) => (
          <p onClick={() => getId(user.id)} key={user.id}>
            {user.name}
          </p>
        ))}
    </article>
  );
}
