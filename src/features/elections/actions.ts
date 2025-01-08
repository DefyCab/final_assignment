"use server";

import { redirect } from "next/navigation";
import { revalidateTag } from "next/cache";
import { electionService } from "./instance";

export async function closeElection(formData: FormData) {
  const id = formData.get("id") as string;

  const representatives = await electionService.getRepresentatives();
  const electionChoices = await electionService.getChoicesOnAllElections(
    "d79eeb99-9eb5-45f2-b5b6-42789214a71f"
  );

  console.log(electionChoices);

  //calculate winning choice

  // get votes from userService votes table
  // which option did representative choose
  // get representatives that choose options
  // add up the sum of votes per representative
  // check biggest number and send as winning choice

  const winningChoice = 1;
  await electionService.update(id, winningChoice);

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
