import { redirect } from "next/navigation";

export function NominateRepresentative() {

  return (
    <button
      onClick={() => redirect("/representatives/nominate/")}
      className="btn btn-accent"
    >
      Nominate Representative
    </button>
  );
}
