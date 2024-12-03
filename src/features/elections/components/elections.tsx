"use client";

import { redirect } from "next/navigation";
import { ElectionsCard } from "./elections-card";
import type { Election } from "../repository";

type Props = {
  elections: Election[];
};

export function Elections({ elections }: Props) {
  const createElection = () => {
    redirect("/elections/create");
  };
  return (
    <>
      <main className="mx-auto flex flex-col h-[calc(100vh-118px)]">
        <h1 className="font-bold text-center text-2xl mt-1">Elections</h1>
        <ElectionsCard elections={elections} />
      </main>
      <div className="flex justify-center gap-4 flex-wrap">
        <button className="btn btn-accent" onClick={createElection}>
          Create Election
        </button>
        <button className="btn btn-accent">Register Opinion</button>
      </div>
    </>
  );
}
