import Link from "next/link";

import { ClockIcon } from "@heroicons/react/16/solid";

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-1.5">
      <ClockIcon className="h-[1.25rem]" />

      <span className="text-xl font-bold select-none">Pomodutra</span>
    </Link>
  );
};
