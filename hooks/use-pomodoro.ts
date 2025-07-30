import { useState, useCallback } from "react";

import { Mode, Settings } from "@/types";

export const usePomodoro = (settings: Settings) => {
  const { durations, longBreakInterval } = settings;

  const [mode, setMode] = useState<Mode>("focus");
  console.log("Current mode: ", mode);

  const currentDuration = durations[mode];

  const [streak, setStreak] = useState(1);

  const handleExpire = useCallback(() => {
    if (mode === "focus") {
      const newStreak = streak + 1;
      setStreak(newStreak);

      const nextMode =
        streak > 0 && streak % longBreakInterval === 0
          ? "longBreak"
          : "shortBreak";

      setMode(nextMode);
    } else {
      setMode("focus");
    }
  }, [mode, streak]);

  return {
    mode,
    setMode,
    currentDuration,
    handleExpire,
    streak,
    // setStreak,
  };
};
