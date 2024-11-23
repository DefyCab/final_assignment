import { electionService } from "../instance";

export async function Election() {
  const election = await electionService.get(
    "a9deb747-96c2-4ca5-b21d-34e6a40c1e40"
  );

  return (
    <main className="flex justify-center">
      <section className="w-80 h-48 bg-base-300 mt-4 border-solid border-2 border-primary rounded">
        <h1>Election</h1>
        <article>
          {election.map((e) => (
            <p key={e.id}>{e.issue}</p>
          ))}
        </article>
      </section>
    </main>
  );
}
