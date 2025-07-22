import Link from "next/link";

import NavLogo from "@/components/nav/nav-logo";

// heroicons
import { UserIcon, CogIcon } from "@heroicons/react/16/solid";
import NavbarSettings from "./items/navbar-settings";
import NavbarSignIn from "./items/navbar-sign-in";
import NavbarEllipsis from "./items/navbar-ellipsis";

export default function Navbar() {
  return (
    <nav className="flex justify-between">
      {/* left side */}
      <NavLogo />

      {/* right side */}
      <div className="flex gap-2">
        <NavbarSettings />
        <NavbarSignIn />
        <NavbarEllipsis />
      </div>
    </nav>
  );
}
