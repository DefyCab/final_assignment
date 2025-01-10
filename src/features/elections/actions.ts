"use server";

import { redirect } from "next/navigation";
import { revalidateTag } from "next/cache";
import { electionService } from "./instance";

export async function closeElectionAction(formData: FormData) {
  const id = formData.get("id") as string;

  const { winningChoice, optionVotes } = await electionService.closeElection(
    id
  );

  await electionService.update(id, winningChoice, optionVotes);

  revalidateTag("elections");
  redirect("/elections");
}

export async function createElectionAction(formData: FormData) {
  const issue = formData.get("issue") as string;
  const options = formData.get("options") as string;

  const optionsToArray = options.split(", ").map((item) => item.trim());

  const election = {
    issue: issue,
    options: optionsToArray,
    status: true,
  };

  if (!issue) {
    throw new Error("No content");
  }

  await electionService.create(election);
  revalidateTag("elections");
  redirect("/elections");
}
