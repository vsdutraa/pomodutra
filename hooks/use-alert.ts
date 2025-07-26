import { useRef, useEffect } from "react";

import { Alert } from "@/types/pomodoro";

export const useAlert = (alert: Alert) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    audioRef.current = new Audio(alert.src);
    audioRef.current.volume = alert.volume;
    audioRef.current.loop = alert.loop;
  }, [alert]);

  const play = () => {
    audioRef.current?.play();
  };

  return { play };
};
