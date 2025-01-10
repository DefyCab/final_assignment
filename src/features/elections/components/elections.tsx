"use client";

import { redirect } from "next/navigation";
import { ElectionsView } from "./elections-view";
import type { Election } from "../service";

type Props = {
  elections: Election[];
};

export function Elections({ elections }: Props) {
  const createElection = () => {
    redirect("/elections/create");
  };
  const registerOpinion = () => {
    redirect("elections/register");
  };
  return (
    <>
      <main className="mx-auto flex flex-col h-[calc(100vh-118px)]">
        <h1 className="font-bold text-center text-2xl mt-1">Elections</h1>
        <ElectionsView elections={elections} />
      </main>
      <div className="flex justify-center gap-4 flex-wrap">
        <button className="btn btn-accent" onClick={createElection}>
          Create Election
        </button>
        <button className="btn btn-accent" onClick={registerOpinion}>
          Register Opinion
        </button>
      </div>
    </>
  );
}
