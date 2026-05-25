import { useEffect, useRef, useState } from "react";

export const useQuizTimer = (
  durationSec: number,
  active: boolean,
  resetKey: string | number,
  onExpire: () => void
) => {
  const [timeLeft, setTimeLeft] = useState(durationSec);
  const onExpireRef = useRef(onExpire);
  const startedAtRef = useRef<number>(Date.now());
  onExpireRef.current = onExpire;

  useEffect(() => {
    if (!active) return;

    setTimeLeft(durationSec);
    startedAtRef.current = Date.now();

    const interval = setInterval(() => {
      const elapsed = (Date.now() - startedAtRef.current) / 1000;
      const remaining = Math.max(0, durationSec - elapsed);
      setTimeLeft(remaining);

      if (remaining <= 0) {
        clearInterval(interval);
        onExpireRef.current();
      }
    }, 100);

    return () => clearInterval(interval);
  }, [active, durationSec, resetKey]);

  const getResponseTimeMs = () =>
    Math.min(
      Math.round(Date.now() - startedAtRef.current),
      durationSec * 1000
    );

  const timeTakenSec = durationSec - timeLeft;

  return { timeLeft: Math.ceil(timeLeft), timeTakenSec, getResponseTimeMs };
};
