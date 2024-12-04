import { db } from "@/db/drizzle"
import { userService } from "./instance"

export async function setRepresentative(id: string) {

    await userService.update()
}