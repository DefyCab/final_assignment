import { Navbar } from "../features/components/navbar";

export default function Elections() {
  return (
    <>
      <Navbar />
      <main>
        <h1 className="font-bold text-center text-2xl mt-1">Elections</h1>
        <div className="mt-4 ml-1 mr-1 flex flex-row justify-between">
          <p className="text-decoration-line: underline">Issue</p>
          <p className="text-decoration-line: underline">Date Created</p>
          <p className="text-decoration-line: underline">Status</p>
        </div>
      </main>
    </>
  );
}
