"use server";

import { electionService } from "./instance";

export async function createElectionAction(formData: FormData) {
  const issue = formData.get("issue") as string;
  const options = formData.get("options") as unknown;

  const election = {
    issue: issue,
    options: options,
    status: true,
  };

  if (!issue) {
    throw new Error("No content");
  }

  await electionService.create(election);
}
