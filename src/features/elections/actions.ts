"use server";

import { redirect } from "next/navigation";
import { revalidateTag } from "next/cache";
import { electionService } from "./instance";

export async function closeElection(formData: FormData) {
  const id = formData.get("id") as string;

  const representatives = await electionService.getRepresentatives();
  const electionChoices = await electionService.getChoicesOnElections(id);

  console.log(representatives);
  console.log(electionChoices);

  [
    { choice: 1, election_id: "38989f30-298c-4663-9a1c-8487113f0fdd" },
    { choice: 2, election_id: "638f818b-9a5f-4fd9-b5a4-ff5fa546cf57" },
  ];

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
