import { Elections } from "@/features";
import { electionService } from "@/features/elections/instance";

export default async function Page() {
  const elections = await electionService.getAll();

  if (!elections) return <p>No Elections found</p>;

  return <Elections elections={elections} />;
}
