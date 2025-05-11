import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./style/globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export const metadata: Metadata = {
  title: "Cryptoria",
  description: "The best tool to generate passwords",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
          <main className="w-full h-full min-h-screen bg-stone-950 text-white">
            {children}
          </main>
      </body>
    </html>
  );
}
