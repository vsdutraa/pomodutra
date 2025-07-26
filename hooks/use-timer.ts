import { useState, useRef, useEffect, useCallback } from "react";

type UseTimerOptions = {
  duration: number;
  onComplete?: () => void;
};

export const useTimer = ({ duration, onComplete }: UseTimerOptions) => {
  const [time, setTime] = useState(duration);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const tick = useCallback(() => {
    timerRef.current = setTimeout(() => {
      setTime((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          onComplete?.();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, [onComplete]);

  useEffect(() => {
    if (isRunning) tick();
    return () => clearTimeout(timerRef.current!);
  }, [isRunning, tick]);

  const start = () => setIsRunning(true);
  const pause = () => setIsRunning(false);
  const reset = (newDuration = duration) => {
    clearTimeout(timerRef.current!);
    setTime(newDuration);
    setIsRunning(false);
  };

  return { time, isRunning, start, pause, reset };
};
