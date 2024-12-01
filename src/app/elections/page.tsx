import { Elections } from "../../features/elections";
import { Navbar } from "../../features/elections";
import { electionService } from "@/features/elections/instance";

export default async function Page() {
  const elections: any = [];
  const electionsmap = await electionService.getAll();

  electionsmap.map((election) => {
    elections.push(election);
  });

  return (
    <>
      <Navbar />
      <Elections elections={elections} />
    </>
  );
}
