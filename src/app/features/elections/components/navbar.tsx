import Link from "next/link";

export function Navbar() {
  return (
    <nav className="navbar bg-primary justify-end w-full">
      <Link className="p-2" href="\representatives\">
        Representatives
      </Link>
      <Link className="p-2" href="\elections\">
        Elections
      </Link>
    </nav>
  );
}
