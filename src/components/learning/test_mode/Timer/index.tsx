'use client';

import { formatTime } from '@/functions/stringManipulations';
import React, {  useEffect, useMemo } from 'react';

const Timer = ({
  setTimerCount,
  timerCount,
  testDuration,
}: {
  timerCount: number;
  testDuration: number;
  setTimerCount: React.Dispatch<React.SetStateAction<number>>;
}) => {
  useEffect(() => {
    let interval: any;
    interval = setInterval(() => setTimerCount((old) => old + 1), 1000);

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const remainingTime = useMemo(
    () => testDuration * 60 - timerCount,
    [timerCount, testDuration]
  );

  const remainingPercentage = useMemo(
    () => (remainingTime / (testDuration * 60)) * 100,
    [remainingTime, testDuration]
  );

  return (
    <p
      className='text-lg font-semibold'
      style={{
        color:
          remainingPercentage < 30 && remainingPercentage > 10
            ? '#ff8c00'
            : remainingPercentage < 10
            ? '#DC2626'
            : '#000',
      }}
    >
      {formatTime(remainingTime)}
    </p>
  );
};

export default Timer;
