"use server";

import { redirect } from "next/navigation";
import { revalidateTag } from "next/cache";
import { electionService } from "./instance";

export async function closeElection(formData: FormData) {
  const id = formData.get("id") as string;
  revalidateTag("elections");
  await electionService.update(id);
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

  revalidateTag("elections");

  await electionService.create(election);
}
