import { Button } from "@/components/ui/button";

interface TimerControlProps {
  isRunning: boolean;
  start: () => void;
  pause: () => void;
}

export const TimerControls = ({
  isRunning,
  start,
  pause,
}: TimerControlProps) => {
  return (
    <Button
      className="py-6 text-lg font-bold"
      onClick={() => (isRunning ? pause() : start())}
    >
      {isRunning ? "PAUSE" : "START"}
    </Button>
  );
};
