"use client";
import type { Election } from "../service";
import { useRouter } from "next/navigation";

type Props = {
  elections: Election[];
};

export function RegisterOpinion({ elections }: Props) {
  const router = useRouter();

  const openElections = elections.filter(
    (election) => election.status === true
  );

  return (
    <>
      <h1 className="font-bold text-center text-2xl mt-1">Open Elections</h1>
      <div className="mt-4 flex flex-row justify-between">
        <article className="cursor-pointer">
          <p className="font-semibold text-decoration-line: underline">Issue</p>
          {openElections.map((election) => (
            <p
              key={election.id}
              onClick={() => router.push(`/elections/election/${election.id}`)}
            >
              {election.issue}
            </p>
          ))}
        </article>

        <article>
          <p className="font-semibold text-decoration-line: underline">
            Date Created
          </p>
          {openElections.map((election) => (
            <p key={election.id}>{election.createdAt.slice(0, 10)}</p>
          ))}
        </article>
      </div>
    </>
  );
}
