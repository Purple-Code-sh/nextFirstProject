import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      Navbar
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/someshi"}>Someshitte</Link>
        </li>
        <li>
          <Link href={"/movies"}>Movies Section</Link>
        </li>
        <li>
          <Link href={"/posts"}>Posts Section</Link>
        </li>
      </ul>
    </nav>
  );
}
