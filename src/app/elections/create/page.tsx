import { Navbar } from "@/features";
import { CreateElection } from "@/features/elections/components/create-elections";

export default function Page() {
  return (
    <>
      <Navbar />
      <CreateElection />
    </>
  );
}
