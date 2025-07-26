import { NavbarActions } from "@/components/navbar/navbar-actions";
import { Logo } from "@/components/navbar/logo";
import { Separator } from "@/components/ui/separator";

export const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between">
        {/* left side */}
        <Logo />

        {/* right side */}
        <NavbarActions />
      </div>

      <Separator className="my-4" />
    </nav>
  );
};
