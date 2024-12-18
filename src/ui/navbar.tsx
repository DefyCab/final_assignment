import Link from "next/link";

export function Navbar() {
  const user = "Love Ericson";
  return (
    <>
      <nav className="navbar bg-primary justify-between w-full">
        <div className="flex justify-start">
          <p className="text-warning font-bold">{user}</p>
        </div>
        <div>
          <Link className="p-2 hover:text-slate-200" href="\representatives\">
            Representatives
          </Link>
          <Link className="p-2 hover:text-slate-200" href="\elections\">
            Elections
          </Link>
        </div>
      </nav>
    </>
  );
}
