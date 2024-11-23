"use server"

import { electionService } from "./instance"

export async function (formData: FormData) { 
    const issue = formData.get("issue") as string
    if(!issue) {
        return
    }
    await electionService.create(issue)
}