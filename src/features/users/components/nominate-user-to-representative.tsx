"use client";

import { useRouter } from "next/navigation";
import type { Representatives } from "../repository";

type Props = {
  users: Representatives[];
};

export function NominateUserToRepresentative({ users }: Props) {
  const router = useRouter();
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
            onClick={() => router.push(`/representatives/nominate/${user.id}`)}
            key={user.id}
          >
            {user.name}
          </p>
        ))}
    </article>
  );
}
