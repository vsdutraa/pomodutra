"use client";

import { useSettings } from "@/hooks/use-settings";
import { SettingsContext } from "@/context/settings-context";

import { usePomodoro } from "@/hooks/use-pomodoro";
import { PomodoroContext } from "@/context/pomodoro-context";

import { PomodoroPanel } from "@/components/pomodoro/pomodoro-panel";
import { SessionStatus } from "@/components/pomodoro/session-status";
import { Navbar } from "@/components/navbar/navbar";

export default function Home() {
  const settings = useSettings();
  const pomodoro = usePomodoro(settings);

  return (
    <SettingsContext.Provider value={settings}>
      <PomodoroContext.Provider value={pomodoro}>
        <Navbar />

        <div className="mt-10 flex flex-col justify-center md:mx-10">
          <PomodoroPanel />
          <SessionStatus />
        </div>
      </PomodoroContext.Provider>
    </SettingsContext.Provider>
  );
}
