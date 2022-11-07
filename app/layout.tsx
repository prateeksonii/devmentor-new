import { Inter } from "@next/font/google";
import "../styles/globals.css";

const inter = Inter();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={inter.className}>
      <head>
        <title>DevMentor</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
