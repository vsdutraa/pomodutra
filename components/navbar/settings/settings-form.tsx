import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useSettingsContext } from "@/context/settings-context";

export const SettingsForm = () => {
  const settings = useSettingsContext();

  const updateSettings = (formData: FormData) => {
    const focus = formData.get("focus");
    const shortBreak = formData.get("shortBreak");
    const longBreak = formData.get("longBreak");

    // settings
    settings.setDurations({
      focus: Number(focus) * 60,
      shortBreak: Number(shortBreak) * 60,
      longBreak: Number(longBreak) * 60,
    });

    const longBreakInterval = formData.get("longBreakInterval");

    settings.setLongBreakInterval(Number(longBreakInterval));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    updateSettings(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="flex flex-col gap-3">
        {/* Timer Settings */}
        <div className="flex flex-col gap-3">
          <p className="text-sm">
            Time{" "}
            <span className="text-muted-foreground text-xs">(minutes)</span>
          </p>

          <div className="grid grid-cols-3 gap-6">
            <div className="flex flex-col gap-1">
              <Label className="text-muted-foreground text-xs">Pomodoro</Label>
              <Input
                defaultValue={settings.durations.focus / 60}
                name="focus"
                min={1}
              />
            </div>

            <div className="flex flex-col gap-1">
              <Label className="text-muted-foreground text-xs">
                Short Break
              </Label>
              <Input
                defaultValue={settings.durations.shortBreak / 60}
                name="shortBreak"
                min={1}
              />
            </div>

            <div className="flex flex-col gap-1">
              <Label className="text-muted-foreground text-xs">
                Long Break
              </Label>
              <Input
                defaultValue={settings.durations.longBreak / 60}
                name="longBreak"
                min={1}
              />
            </div>
          </div>
        </div>

        {/* Long Break Interval Settings */}
        <div className="flex items-center justify-between">
          <Label className="text-sm">Long Break Interval</Label>
          <Input
            className="w-18"
            defaultValue={settings.longBreakInterval}
            name="longBreakInterval"
            min={1}
          />
        </div>
      </div>

      <div className="flex flex-col">
        <Button className="w-18 self-end" type="submit">
          OK
        </Button>
      </div>
    </form>
  );
};
