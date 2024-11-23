import { electionService } from "../instance";

export async function Election() {
  const election = await electionService.get(
    "a9deb747-96c2-4ca5-b21d-34e6a40c1e40"
  );

  return (
    <main className="mr-4 ml-4 flex justify-center">
      <section className="w-full h-[calc(100vh-112px)] bg-base-300 mt-4 border-solid border-2 border-primary rounded">
        <article>
          {election.map((e) => (
            <h3 className="font-bold text-2xl text-center" key={e.id}>
              {e.issue}
            </h3>
          ))}
          <div className="m-2 flex justify-between">
            <p className="font-semibold">Options</p>
            <p className="font-semibold">Number of Votes</p>
          </div>
          {election.map((e) =>
            e.options?.map((option) => (
              <p className="text-sm ml-2">{option.one}</p>
            ))
          )}
          {election.map((e) =>
            e.options?.map((option) => (
              <p className="text-sm ml-2">{option.two}</p>
            ))
          )}
          {election.map((e) =>
            e.options?.map((option) => (
              <p className="text-sm ml-2">{option.three}</p>
            ))
          )}
        </article>
      </section>
    </main>
  );
}
