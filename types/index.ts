import type { Dispatch, SetStateAction } from "react";

export interface Pomodoro {
  mode: Mode;
  setMode: Dispatch<SetStateAction<Mode>>;
  currentDuration: number;
  handleExpire: () => void;
  streak: number;
}

export type Mode = "focus" | "shortBreak" | "longBreak";

export type Durations = Record<Mode, number>;

export interface Settings {
  durations: Durations;
  setDurations: Dispatch<SetStateAction<Durations>>;
  longBreakInterval: number;
  setLongBreakInterval: Dispatch<SetStateAction<number>>;
}
