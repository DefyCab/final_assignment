import { Election } from "@/app/features/elections/components/election";

type Params = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: Params) {
  const id = (await params).id;

  return <Election id={id} />;
}