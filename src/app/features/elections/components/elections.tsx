"use client";

import { redirect } from "next/navigation";
import { ElectionsCard } from "./elections-card";

export function Elections() {
  const createElection = () => {
    redirect("/elections/create");
  };
  return (
    <>
      <main className="mx-auto flex flex-col h-[calc(100vh-118px)]">
        <h1 className="font-bold text-center text-2xl mt-1">Elections</h1>
        <ElectionsCard />
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
