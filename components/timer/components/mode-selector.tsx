import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PomodoroMode, pomodoroModes } from "@/types/pomodoro";

interface PomodoroTabsProps {
  mode: PomodoroMode;
  setMode: (mode: PomodoroMode) => void;
}

export const ModeSelector = ({ mode, setMode }: PomodoroTabsProps) => {
  return (
    <Tabs
      className="mx-10"
      value={mode}
      onValueChange={(v) => setMode(v as PomodoroMode)}
    >
      <TabsList className="flex w-full gap-6 bg-transparent">
        {pomodoroModes.map((mode) => (
          <TabsTrigger key={mode} value={mode}>
            {mode.replace("_", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};
