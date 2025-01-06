import { RegisterOpinion } from "@/features/elections/components/register-opinion";
import { electionService } from "@/features/elections/instance";

export default async function Page() {
  const elections = (await electionService.getAll())?.data;

  if (!elections) return <p>No Elections found</p>;
  
  return <RegisterOpinion elections={elections} />;
}
