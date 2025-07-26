import { Button } from "@/components/ui/button";
import { CogIcon } from "@heroicons/react/16/solid";
import { cn } from "@/lib/utils";

interface SettingsActionProps {
  variant?: "desktop" | "mobile";
}

export const SettingsButton = ({
  variant = "desktop",
}: SettingsActionProps) => {
  const isMobile = variant === "mobile";

  return (
    <div className={cn(isMobile ? "md:hidden" : "hidden md:flex")}>
      <Button size={isMobile ? "icon" : "sm"} variant="secondary">
        {/* dialog here */}
        {/* pomodoro, short breaks, long breaks */}
        <CogIcon />
        {!isMobile && <span>Settings</span>}
      </Button>
    </div>
  );
};

export const SettingsAction = () => {
  return (
    <>
      <SettingsButton variant="desktop" />
      <SettingsButton variant="mobile" />
    </>
  );
};
