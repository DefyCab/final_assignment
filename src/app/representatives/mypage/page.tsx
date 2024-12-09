export default async function MyPage() {
  const user = "Love Ericson";
  return (
    <section>
      <div className="flex flex-col">
        <h1 className="font-bold">My Representative</h1>
        <p className="font-semibold text-primary text-lg">Erik Lindros</p>
      </div>

      <article>
        <div className="flex flex-row justify-start">
          <h1 className="font-bold text-2xl">Your Choices</h1>
          <h1 className="font-bold text-2xl ml-40">Representative Choices</h1>
        </div>
        <div className="flex flex-row justify-start mb-4">
          <div>
            <p>Wildlife Preservation</p>
            <p>New FreeWay to Arlanda</p>
          </div>
          <div className="ml-10">
            <p className="text-primary">Yes</p>
            <p className="text-primary">Yes</p>
          </div>
          <div className="ml-32">
            <p className="text-red-400">No</p>
            <p className="text-green-500">Yes</p>
          </div>
        </div>
      </article>
    </section>
  );
}
