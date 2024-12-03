"use client";

import type { Representatives } from "../repository";
import { NominateRepresentative } from "./nominate-button";
import { VoteRepresentative } from "./vote-button";

type Props = {
  representatives: Representatives[];
};

export function RepresentativeCard({ representatives }: Props) {

  return (
    <>
      <article>
        <p className="mt-4 text-decoration-line: underline font-semibold">
          Representatives
        </p>

        {representatives
          .filter((rep) => rep.representative)
          .map((reps) => (
            <p key={reps.id}>{reps.name}</p>
          ))}
      </article>
      <div className="flex justify-center gap-4 flex-wrap">
        <NominateRepresentative/>
        <VoteRepresentative />
      </div>
    </>
  );
}
