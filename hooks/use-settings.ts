import { useState } from "react";

import { Durations } from "@/types";

export const useSettings = () => {
  const [durations, setDurations] = useState<Durations>({
    focus: 0.05 * 60,
    shortBreak: 0.1 * 60,
    longBreak: 0.15 * 60,
  });

  const [longBreakInterval, setLongBreakInterval] = useState(4);

  return { durations, setDurations, longBreakInterval, setLongBreakInterval };
};
