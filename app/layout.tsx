// Metadata
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Pomodutra",
};

// fonts
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
});

// css
import "@/app/globals.css";
import { cn } from "@/lib/utils";

// components
import { Navbar } from "@/components/navbar/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(montserrat.className, "antialiased")}>
      <body>
        <main className="mx-auto min-h-screen w-full max-w-[600px] px-4 py-4">
          <Navbar />

          {children}
        </main>
      </body>
    </html>
  );
}
