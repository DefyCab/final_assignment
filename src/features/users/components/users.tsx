import { RepresentativeCard } from "./representativesCard";
import { userService } from "../instance";

export async function Users() {
  const representatives = await userService.getAll();

  if (!representatives) {
    return <p>no representatives found</p>;
  }

  return (
    <>
      <main className="mx-auto flex flex-col h-[calc(100vh-118px)]">
        <h1 className="font-bold text-center text-2xl mt-1">
          List of Representatives
        </h1>
        <RepresentativeCard representatives={representatives} />
      </main>
    </>
  );
}
