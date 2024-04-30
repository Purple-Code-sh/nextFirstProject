import Navbar from "../components/Navbar";

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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
