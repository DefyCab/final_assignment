"use client";

import { redirect } from "next/navigation";
import { createElectionAction } from "../actions";

export function CreateElection() {
  const redirectOnClick = () => {
    redirect("/elections");
  };

  return (
    <>
      <form
        action={createElectionAction}
        className="flex flex-col justify-center items-center m-1"
      >
        <label className="m-1" htmlFor="issue">
          Issue
        </label>
        <input className="w-72" type="text" name="issue" />
        <button
          onClick={redirectOnClick}
          type="submit"
          className="btn btn-accent mt-4"
        >
          Create Election
        </button>
      </form>
    </>
  );
}
