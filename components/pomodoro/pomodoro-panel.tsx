import { usePomodoroContext } from "@/context/pomodoro-context";

import { useTimer } from "@/hooks/use-timer";

import { TimerDisplay } from "@/components/pomodoro/timer/timer-display";
import { TimerControls } from "@/components/pomodoro/timer/timer-controls";
import { ModeSelector } from "@/components/pomodoro/mode-selector";

export const PomodoroPanel = () => {
  const { currentDuration, handleExpire } = usePomodoroContext();

  const timer = useTimer({
    initialTime: currentDuration,
    onExpire: handleExpire,
  });

  return (
    <div className="bg-secondary flex flex-col gap-6 rounded-2xl p-6 px-10">
      <ModeSelector />
      <TimerDisplay secondsLeft={timer.secondsLeft} />
      <TimerControls
        isRunning={timer.isRunning}
        start={timer.start}
        pause={timer.pause}
      />
    </div>
  );
};
