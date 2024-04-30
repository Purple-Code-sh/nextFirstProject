import Link from "next/link";

export default function MoviesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>
        <h1>Welcome to the cinema</h1>
        <p>Recomendation of the day</p>
        <ul>
          <li>
            <Link href={"/movies/genre"}>Genres</Link>
          </li>
          <li>
            <Link href={"/movies/genre/horror"}>Horror movies</Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
}
