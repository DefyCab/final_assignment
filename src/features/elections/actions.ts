"use server";

import { electionService } from "./instance";

export async function createElectionAction(formData: FormData) {
  const issue = formData.get("issue") as string;
  if (!issue) {
    return;
  }

  await electionService.create(issue);
}
