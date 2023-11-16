import React, { ChangeEvent, RefObject, useMemo } from 'react';
import { sendFeedback } from '@/functions/feedback';

const TrackProgress = ({
  audioRef,
  currentTime,
  duration,
  allowSkip,
}: {
  audioRef: RefObject<HTMLAudioElement>;
  duration: number;
  currentTime: number;
  allowSkip?: boolean;
}) => {
  const progress = useMemo(
    () => ((currentTime || 0) / (duration || 1)) * 100,
    [duration, currentTime]
  );

  return (
    <div className='bg-transparent w-full rounded-md h-[10px]'>
      <input
        type='range'
        min={0}
        max={100}
        value={progress}
        className='rounded-md h-full w-full [&::-moz-focus-outer]:border-none cursor-pointer'
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const selectedTime = (Number(event.target.value) / 100) * duration;
          const currentTime = audioRef.current?.currentTime || 0;
          if (audioRef.current) {
            // Disable forward seeking
            if (!allowSkip && selectedTime > currentTime) {
              sendFeedback('Cannot skip forward');
            } else {
              audioRef.current.currentTime = selectedTime;
            }
          }
        }}
      />
    </div>
  );
};

export default TrackProgress;
