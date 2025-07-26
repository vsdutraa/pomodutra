import { SettingsSchema } from "@/settings/schema";

export const defaultSettings: SettingsSchema = {
  durations: {
    pomodoro: 0.05 * 60,
    short_break: 0.05 * 60,
    long_break: 0.05 * 60,
  },
  alert: {
    volume: 0.6,
    loop: false,
    src: "/sounds/alert.mp3",
  },
};
