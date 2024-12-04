"use client";

import type { Representatives } from "../repository";
import { setId } from "../action";

type Props = {
  users: Representatives[];
};

export function NominateUserToRepresentative({ users }: Props) {
  return (
    <article>
      <p className="mt-4 text-decoration-line: underline font-semibold">
        Voters to Nominate
      </p>

      {users
        .filter((user) => !user.representative)
        .map((user) => (
          <p
            className="cursor-pointer"
            onClick={() => setId(user.id)}
            key={user.id}
          >
            {user.name}
          </p>
        ))}
    </article>
  );
}
