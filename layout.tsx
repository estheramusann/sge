import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Student Enterprise Initiative",
  description: "Funding and structured business development support for student entrepreneurs in Nigeria."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
