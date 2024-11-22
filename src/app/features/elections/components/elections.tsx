import { electionService } from "../instance";

export async function Elections() {
  const elections = await electionService.getAll();

  return (
    <>
      <main className="mx-auto flex flex-col h-[calc(100vh-118px)]">
        <h1 className="font-bold text-center text-2xl mt-1">Elections</h1>
        <div className="mt-4 flex flex-row justify-between">
          <article>
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
                  election.status === "ongoing"
                    ? "text-primary"
                    : "text-warning"
                }
                key={election.id}
              >
                {election.status}
              </p>
            ))}
          </article>
        </div>
      </main>
      <div className="flex justify-center gap-4">
        <button className="btn btn-primary">Create Election</button>
        <button className="btn btn-primary">Register Opinion</button>
        <button className="btn btn-warning">Close Election</button>
      </div>
    </>
  );
}
