import Link from "next/link";

import { Button } from "@/components/ui/button";

import { UserIcon } from "@heroicons/react/16/solid";

export default function NavbarSignIn() {
  return (
    <div>
      {/* desktop */}
      <div className="hidden md:flex">
        <Button asChild size="sm" variant="secondary">
          <Link href="sign-up">
            <UserIcon />
            <span className="text-xs">Sign In</span>
          </Link>
        </Button>
      </div>

      {/* mobile */}
      <div className="md:hidden">
        <Button asChild size="smIcon" variant="secondary">
          <Link href="sign-up">
            <UserIcon />
          </Link>
        </Button>
      </div>
    </div>
  );
}
