import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./page.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agora - Ecosistemas de propesridad",
  description: "Prueba tecnica Alan Sanchez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    
      <body className={inter.className}>{children}</body>
    </html>
  );
}
