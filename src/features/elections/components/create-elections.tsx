"use client";

import { createElectionAction } from "../actions";
import { Back } from "./back";

export function CreateElection() {
  return (
    <>
      <form
        action={createElectionAction}
        className="flex flex-col justify-center items-center m-1"
      >
        <label className="m-1" htmlFor="issue">
          Issue
        </label>
        <input
          required
          className="w-72"
          type="text"
          name="issue"
          placeholder="Your issue"
        />
        <label className="m-1" htmlFor="issue">
          Options
        </label>
        <input
          required
          className="w-72"
          type="text"
          name="options"
          placeholder="Option 1, Option 2, Option 3"
        />
        <button type="submit" className="btn btn-accent mt-4">
          Create Election
        </button>
        <Back />
      </form>
    </>
  );
}
