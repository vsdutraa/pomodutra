import { Mode } from "@/types";

import { usePomodoroContext } from "@/context/pomodoro-context";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const ModeSelector = () => {
  const { mode, setMode } = usePomodoroContext();

  return (
    <Tabs value={mode} onValueChange={(value) => setMode(value as Mode)}>
      <TabsList className="flex w-full gap-6 bg-transparent">
        <TabsTrigger value={"focus"}>Focus</TabsTrigger>
        <TabsTrigger value={"shortBreak"}>Short Break</TabsTrigger>
        <TabsTrigger value={"longBreak"}>Long Break</TabsTrigger>
      </TabsList>
    </Tabs>
  );
};
