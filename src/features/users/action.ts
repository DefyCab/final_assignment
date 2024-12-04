import { userService } from "./instance";

export async function setRepresentative(id: string) {
  return await userService.get(id);
}

export function setId(id: string) {
  return id;
}
