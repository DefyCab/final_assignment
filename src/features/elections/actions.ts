"use server";

import { redirect } from "next/navigation";
import { revalidateTag } from "next/cache";
import { electionService } from "./instance";

export async function closeElection(formData: FormData) {
  const id = formData.get("id") as string;

  const representatives = await electionService.getRepresentatives();

  if (!representatives) {
    throw new Error("Something went wrong");
  }

  let optionOne = 0;
  let optionTwo = 0;
  let optionThree = 0;

  for (let i = 0; i < representatives.length; i++) {
    const userId = representatives[i].id;

    const choice = await electionService.getChoiceOnElection(
      representatives[i].id,
      id
    );

    if (choice === 1) {
      const votes = await electionService.getVotesFromRepresentative(userId);
      optionOne = optionOne + votes;
    }

    if (choice === 2) {
      const votes = await electionService.getVotesFromRepresentative(userId);
      optionTwo = optionTwo + votes;
    }

    if (choice === 3) {
      const votes = await electionService.getVotesFromRepresentative(userId);
      optionThree = optionThree + votes;
    }
  }

  let winningChoice = 0;
  const highestCount = Math.max(optionOne, optionThree, optionThree);

  for (let i = 0; i < 3; i++) {
    if (highestCount === optionOne) {
      winningChoice = 1;
    }
    if (highestCount === optionTwo) {
      winningChoice = 2;
    }
    if (highestCount === optionThree) {
      winningChoice = 3;
    }
  }

  const optionVotes = [optionOne, optionTwo, optionThree];

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
