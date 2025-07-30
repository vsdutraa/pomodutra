import { SettingsForm } from "@/components/navbar/settings/settings-form";

import { CogIcon } from "@heroicons/react/16/solid";

import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const SettingsDialog = () => {
  return (
    <div className="flex">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="flex cursor-pointer"
            size="icon"
            variant="secondary"
          >
            <CogIcon />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-muted-foreground text-sm">
              Settings
            </DialogTitle>
          </DialogHeader>

          <SettingsForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};
