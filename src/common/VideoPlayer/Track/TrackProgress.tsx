import React, { ChangeEvent, RefObject, useMemo } from 'react';
import { sendFeedback } from '@/functions/feedback';

const TrackProgress = ({
  videoRef,
  currentTime,
  duration,
}: {
  videoRef: RefObject<HTMLVideoElement>;
  duration: number;
  currentTime: number;
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
          const currentTime = videoRef.current?.currentTime || 0;
          if (videoRef.current) {
            // Disable forward seeking
            if (selectedTime > currentTime) {
              sendFeedback('Cannot skip forward');
            } else {
              videoRef.current.currentTime = selectedTime;
            }
          }
        }}
      />
    </div>
  );
};

export default TrackProgress;
