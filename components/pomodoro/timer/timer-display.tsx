interface TimerDisplayProps {
  secondsLeft: number;
}

export const TimerDisplay = ({ secondsLeft }: TimerDisplayProps) => {
  console.log("Time left (ms): ", secondsLeft);

  const mm = Math.floor(secondsLeft / 60)
    .toString()
    .padStart(2, "0");
  const ss = (secondsLeft % 60).toString().padStart(2, "0");

  return (
    <span className="flex justify-center text-8xl font-bold select-none md:text-9xl">
      {mm}:{ss}
    </span>
  );
};
