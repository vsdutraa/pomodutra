import { Button } from "@/components/ui/button";

import { CogIcon } from "@heroicons/react/16/solid";

export default function NavbarSettings() {
  return (
    <div>
      {/* desktop */}
      <div className="hidden md:flex">
        <Button size="sm" variant="secondary">
          {/* dialog here */}
          {/* pomodoro, short breaks, long breaks */}
          <CogIcon />
          <span className="text-xs">Settings</span>
        </Button>
      </div>

      {/* mobile */}
      <div className="md:hidden">
        <Button size="smIcon" variant="secondary">
          {/* dialog here */}
          {/* pomodoro, short breaks, long breaks */}
          <CogIcon />
        </Button>
      </div>
    </div>
  );
}
