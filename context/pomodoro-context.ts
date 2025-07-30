import { createContext, useContext } from "react";

import { Pomodoro } from "@/types";

export const PomodoroContext = createContext<Pomodoro | undefined>(undefined);

export function usePomodoroContext() {
  const pomodoro = useContext(PomodoroContext);

  if (pomodoro === undefined) {
    throw new Error("usePomodoroContext must be used with a PomodoroContext");
  }

  return pomodoro;
}
