import { Navbar } from "@/app/features/elections";
import { CreateElection } from "@/app/features/elections/components/create-elections";

export default function Page() {
  return (
    <>
      <Navbar />
      <CreateElection />
    </>
  );
}
