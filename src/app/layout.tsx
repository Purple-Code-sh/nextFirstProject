import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>SHM pgae</title>
      </head>
      <body>
        <nav>
          Navbar
          <ul>
            <li>
              <a href={"/"}>Home</a>
            </li>
            <li>
              <Link href={"/someshi"}>Someshitte</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
