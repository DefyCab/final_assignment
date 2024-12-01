import { Elections } from "../../features/elections";
import { Navbar } from "../../features/elections";
import { electionService } from "@/features/elections/instance";

export default async function Page() {
  const elections = await electionService.getAll();

  return (
    <>
      <Navbar />
      <Elections elections={elections} />
    </>
  );
}
