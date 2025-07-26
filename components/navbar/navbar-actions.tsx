import { SignInAction } from "@/components/navbar/actions/sign-in-action";
import { SettingsAction } from "@/components/navbar/actions/settings-action";
import { DropdownAction } from "./actions/dropdown-action";

export const NavbarActions = () => {
  return (
    <div className="flex gap-1.5">
      <SettingsAction />
      <SignInAction />
      <DropdownAction />
    </div>
  );
};
