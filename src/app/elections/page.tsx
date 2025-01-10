import { Elections } from "@/features";
import { electionService } from "@/features/elections/instance";

export default async function Page() {
  const data = await electionService.getAll();

  const elections = data.data;

  if (!elections) return <p>No Elections found</p>;

  return <Elections elections={elections} />;
}
