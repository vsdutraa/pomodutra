import { usePomodoroContext } from "@/context/pomodoro-context";

export const SessionStatus = () => {
  const { streak, mode } = usePomodoroContext();

  const message = mode === "focus" ? "Time to focus!" : "Time for a break!";

  return (
    <div className="flex flex-col items-center gap-0.75 p-6">
      <p className="text-muted-foreground text-sm">#{streak}</p>

      <p>{message}</p>
    </div>
  );
};
