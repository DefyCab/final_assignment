export function CreateElection() {
  return (
    <>
      <form className="flex flex-col justify-center items-center m-1">
        <label className="m-1" htmlFor="issue">Issue</label>
        <input className="w-72" type="text" name="issue" />
        <button className="btn btn-accent mt-4">Create Election</button>
      </form>
    </>
  );
}
