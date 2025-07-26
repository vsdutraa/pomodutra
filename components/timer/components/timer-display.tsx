interface TimerDisplayProps {
  time: number;
}

export const TimerDisplay = ({ time }: TimerDisplayProps) => {
  const minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (time % 60).toString().padStart(2, "0");

  return (
    <span
      className="mx-10 flex justify-center text-8xl font-bold select-none"
      role="timer"
      aria-live="polite"
    >
      {minutes}:{seconds}
    </span>
  );
};
