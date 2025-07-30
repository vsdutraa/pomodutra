// Metadata
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Pomodutra",
};

// fonts
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "500", "700", "900"],
});

// css
import "@/app/globals.css";
import { cn } from "@/lib/utils";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(poppins.className, "antialiased")}>
      <body>
        <main className="mx-auto min-h-screen w-full max-w-[600px] px-4 py-4">
          {children}
        </main>
      </body>
    </html>
  );
}
