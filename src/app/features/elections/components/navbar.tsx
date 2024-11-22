import Link from "next/link";

export function Navbar() {
  return (
    <>
      <nav className="navbar bg-slate-200 justify-end">
        <Link href="\elections\">Elections</Link>
      </nav>
    </>
  );
}
