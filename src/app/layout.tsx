import Navbar from "../components/Navbar";

export const metadata = {
  title: "SHM page",
  description: "This is the Home page of SHM website",
  keywords: "tienda, online, ecomerce, comprar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
