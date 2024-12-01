import { userService } from "../instance";

export function RepresentativeCard() {
  const representatives = userService.getAll();

  return (
    <article>
      <p className="mt-4 text-decoration-line: underline font-semibold">
        Representatives
      </p>
      {representatives.map((reps) => (
        <p key={reps.id}>{reps.name}</p>
      ))}
    </article>
  );
}
