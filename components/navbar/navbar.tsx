import { Logo } from "@/components/navbar/logo";
import { Separator } from "@/components/ui/separator";
import { SettingsDialog } from "@/components/navbar/settings/settings-dialog";

export const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between">
        <Logo />

        <SettingsDialog />
      </div>

      <Separator className="my-4" />
    </nav>
  );
};
