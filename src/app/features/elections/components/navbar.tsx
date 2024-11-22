import Link from "next/link";

export function Navbar() {
  return (
    <nav className="navbar bg-primary justify-end w-full">
      <Link href="\elections\">Elections</Link>
    </nav>
  );
}
