"use client";

import { redirect } from "next/navigation";
import { electionService } from "../instance";

const elections = await electionService.getAll();

export function Elections() {
  const getElectionId = async (id: string) => {
    const election = await electionService.get(id);
    return election[0];
  };

  const createElection = () => {
    redirect("/elections/create");
  };
  return (
    <>
      <main className="mx-auto flex flex-col h-[calc(100vh-118px)]">
        <h1 className="font-bold text-center text-2xl mt-1">Elections</h1>
        <div className="mt-4 flex flex-row justify-between">
          <article className="cursor-pointer">
            <p className="text-decoration-line: underline">Issue</p>
            {elections.map((election) => (
              <p onClick={() => getElectionId(election.id)} key={election.id}>
                {election.issue}
              </p>
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
      </main>
      <div className="flex justify-center gap-4 flex-wrap">
        <button className="btn btn-accent" onClick={createElection}>
          Create Election
        </button>
        <button className="btn btn-accent">Register Opinion</button>
        <button className="btn btn-warning">Close Election</button>
      </div>
    </>
  );
}
