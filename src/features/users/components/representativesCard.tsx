"use client";

import type { Representatives } from "../repository";

type Props = {
  representatives: Representatives[];
};

export function RepresentativeCard({ representatives }: Props) {
  return (
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
  );
}
