import { useEffect } from "react";

import { PomodoroMode, pomodoroModes } from "@/types/pomodoro";

import { useTimer } from "@/hooks/use-timer";
import { useAlert } from "@/hooks/use-alert";

import { SettingsSchema } from "@/settings/schema";

type UsePomodoroOptions = {
  mode: PomodoroMode;
  setMode: (mode: PomodoroMode) => void;
  settings: SettingsSchema;
};

export const usePomodoro = ({
  mode,
  setMode,
  settings,
}: UsePomodoroOptions) => {
  const { durations, alert } = settings;

  const { play } = useAlert(alert);

  const advanceMode = () => {
    const index = pomodoroModes.indexOf(mode);
    const nextIndex = (index + 1) % pomodoroModes.length;
    setMode(pomodoroModes[nextIndex]);
  };

  const duration = durations[mode];

  const { time, isRunning, start, pause, reset } = useTimer({
    duration,
    onComplete: () => {
      play();
      advanceMode();
    },
  });

  useEffect(() => {
    reset(duration);
  }, [mode, durations]);

  return {
    mode,
    setMode,
    time,
    isRunning,
    start,
    pause,
    reset,
  };
};
