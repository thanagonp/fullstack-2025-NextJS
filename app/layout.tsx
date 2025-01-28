
import "./globals.css";
import { NavLinks } from "./ui/nav-links";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavLinks />
        <div> Title of Main Layout</div>
        <div>{children}</div>
      </body>
    </html>
  );
}
