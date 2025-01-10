import { Elections } from "@/features";
import { electionService } from "@/features/elections/instance";

export default async function Page() {
  const data = await electionService.getAll();

  if (!data) {
    return <p>No data found</p>;
  }

  const elections:
    | {
        id: string;
        options: string[];
        status: boolean;
        issue: string;
        createdAt: string;
      }[]
    | undefined = data.data;

  if (!elections) return <p>No Elections found</p>;

  return <Elections elections={elections} />;
}
