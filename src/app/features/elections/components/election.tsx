import { electionService } from "../instance";

export async function Election() {
  const id = "a9deb747-96c2-4ca5-b21d-34e6a40c1e40";

  const election = await electionService.get(id);

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
          <div className="flex justify-between">
            <div>
              {election.map((e) =>
                e.options?.map((options) => (
                  <p className="text-sm ml-2">{options}</p>
                ))
              )}
            </div>
            <div className="mr-2 text-right">
              <p className="text-sm text-red-500">145</p>
              <p className="text-sm text-green-500">1345</p>
              <p className="text-sm text-red-500">398</p>
            </div>
          </div>
        </article>
        <article>
          <div className="m-2 mt-4 flex flex-row justify-between flex-wrap">
            <div className="w-40 h-80">
              <p className="font-semibold">Representatives</p>
              <p>Erik Lindros</p>
              <p>Karin Zetterström</p>
              <p>Bilal Andersson</p>
              <p>Basim Hassan</p>
              <p>Love Ericson</p>
            </div>
            <div className="w-40 h-80">
              <p className="font-semibold">Option voted for</p>
              <p>Two</p>
              <p>Three</p>
              <p>One</p>
              <p>Two</p>
              <p>Two</p>
            </div>
            <div className="w-52 h-80">
              <p className="font-semibold">Votes per representative</p>
              <p>1001</p>
              <p>398</p>
              <p>145</p>
              <p>24</p>
              <p>320</p>
            </div>
            <div className="w-40 h-80">
              <p className="font-semibold text-right">Agreement Rate</p>
              <p className="text-right">52 %</p>
              <p className="text-right">45 %</p>
              <p className="text-right">89 %</p>
              <p className="text-right">25 %</p>
              <p className="text-right">60 %</p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
