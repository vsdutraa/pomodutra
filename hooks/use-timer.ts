import { useState, useRef, useEffect, useCallback } from "react";

type UseTimerOptions = {
  initialTime: number;
  onExpire?: () => void;
};

export const useTimer = ({ initialTime, onExpire }: UseTimerOptions) => {
  const [secondsLeft, setSecondsLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const [expired, setExpired] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // tick
  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            setExpired(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      clearInterval(timerRef.current!);
    };
  }, [isRunning]);

  useEffect(() => {
    setSecondsLeft(initialTime);
  }, [initialTime]);

  useEffect(() => {
    if (expired) {
      onExpire?.();
      setExpired(false);
    }
  }, [expired]);

  const start = useCallback(() => {
    setIsRunning(true);
  }, []);

  const pause = useCallback(() => {
    setIsRunning(false);
  }, []);

  const reset = useCallback((t: number) => {
    setSecondsLeft(t);
    setIsRunning(false);
  }, []);

  return {
    secondsLeft,
    isRunning,
    start,
    pause,
    reset,
  };
};
