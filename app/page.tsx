import Navbar from "@/components/nav/navbar";

import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div>
      {/* nav */}
      <Navbar />
      <Separator className="mt-4" />

      {/* content */}
      <div></div>
    </div>
  );
}
