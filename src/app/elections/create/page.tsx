import { Navbar } from "@/features/elections";
import { CreateElection } from "@/features/elections/components/create-elections";

export default function Page() {
  return (
    <>
      <Navbar />
      <CreateElection />
    </>
  );
}
