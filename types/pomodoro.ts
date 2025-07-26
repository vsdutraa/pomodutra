export type PomodoroMode = "pomodoro" | "short_break" | "long_break";

export const pomodoroModes: PomodoroMode[] = [
  "pomodoro",
  "short_break",
  "long_break",
];

export type Alert = {
  volume: number;
  loop: boolean;
  src: string;
};

export type Durations = Record<PomodoroMode, number>;
