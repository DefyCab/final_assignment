const elections = [
  {
    id: "a9deb747-96c2-4ca5-b21d-34e6a40c1e40",
    issue: "Wildlife preservation",
    options: [
      "Buy land to extend current reservation",
      "Don't extend current reservation",
      "Outsource responsibility to private actors",
    ],
    createdAt: "2024-11-11 16:13:18.045904",
    status: true,
  },
  {
    id: "21f91ee2-1074-4ef6-b7ff-0ee3567430a8",
    issue: "Cats should recieve voting rights",
    createdAt: "2024-10-12 09:49:08.038697",
    status: true,
  },
  {
    id: "c15c98d2-1408-4929-a7dc-248e1fe446e8",
    issue: "New freeway to Arlanda",
    createdAt: "2024-09-28 13:14:28.025678",
    status: false,
  },
  {
    id: "0cc24e41-2b95-477f-a3a4-5951483a2ecb",
    issue: "Renovation of Slussen",
    createdAt: "2024-05-02 10:10:11.023696",
    status: false,
  },
  {
    id: "8ae792ef-8672-457c-9b02-5b42521d73a5",
    issue: "Homeless people emancipation act",
    createdAt: "2024-01-01 17:38:45.013454",
    status: false,
  },
  {
    id: "ed3bbf08-010d-4237-a77a-62432ce740cd",
    issue: "New School in Ulriksdal",
    createdAt: "2023-12-11 09:14:25.038456",
    status: false,
  },
  {
    id: "7e6135e2-6839-448a-b59a-ac9176cee0c1",
    issue: "Free admission to museums",
    createdAt: "2023-11-21 08:34:01.034693",
    status: false,
  },
  {
    id: "7f4c6436-238d-4e3b-8166-d42fe0443a3f",
    issue: "Make overpass for bikes on Drottningholmsvägen",
    createdAt: "2023-10-04 13:11:18.038697",
    status: false,
  },
  {
    id: "5bfa2f13-0954-4e27-81e9-bdb4e34a294d",
    issue: "New swimming arena on Gärdet",
    createdAt: "2023-09-30 18:34:28.038697",
    status: false,
  },
  {
    id: "813e9308-ad39-476c-a832-ffd763431e23",
    issue: "Free cigars for elder citizens",
    createdAt: "2023-04-30 11:00:00.028345",
    status: false,
  },
];

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
