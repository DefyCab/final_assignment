import { electionService } from "../instance";

const elections = electionService.getAll();

export function ElectionsCard() {
  return (
    <div className="mt-4 flex flex-row justify-between">
      <article className="cursor-pointer">
        <p className="text-decoration-line: underline">Issue</p>
        {elections.map((election) => (
          <p key={election.id}>{election.issue}</p>
        ))}
      </article>

      <article>
        <p className="text-decoration-line: underline">Date Created</p>
        {elections.map((election) => (
          <p key={election.id}>{election.createdAt.slice(0, 10)}</p>
        ))}
      </article>

      <article>
        <p className="text-decoration-line: underline">Status</p>
        {elections.map((election) => (
          <p
            className={
              election.status === true ? "text-accent" : "text-warning"
            }
            key={election.id}
          >
            {election.status === true ? "ongoing" : "concluded"}
          </p>
        ))}
      </article>
    </div>
  );
}
