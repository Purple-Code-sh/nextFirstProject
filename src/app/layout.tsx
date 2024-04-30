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
        <nav>Navbar o header</nav>
        {children}
      </body>
    </html>
  );
}
