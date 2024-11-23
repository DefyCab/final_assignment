export function CreateElection() {
  return (
    <>
      <form className="flex flex-col justify-center items-center">
        <label htmlFor="issue">Issue</label>
        <input className="w-72" type="text" name="issue" />
      </form>
    </>
  );
}
