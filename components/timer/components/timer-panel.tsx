"use client";
import { useState } from "react";

import { ModeSelector } from "@/components/timer/components/mode-selector";
import { TimerDisplay } from "@/components/timer/components/timer-display";
import { ToggleButton } from "@/components/timer/components/toggle-button";

import { PomodoroMode } from "@/types/pomodoro";

import { usePomodoro } from "@/hooks/use-pomodoro";

import { defaultSettings } from "@/settings/default";

export const TimerPanel = () => {
  const settings = defaultSettings;

  const [mode, setMode] = useState<PomodoroMode>("pomodoro");

  const { time, isRunning, start, pause } = usePomodoro({
    mode,
    setMode,
    settings,
  });

  return (
    <div className="bg-secondary flex flex-col gap-6 rounded-2xl p-6">
      <ModeSelector mode={mode} setMode={setMode} />
      <TimerDisplay time={time} />
      <ToggleButton
        isRunning={isRunning}
        onToggle={!isRunning ? start : pause}
        // disabled={time <= 0}
      />
    </div>
  );
};
