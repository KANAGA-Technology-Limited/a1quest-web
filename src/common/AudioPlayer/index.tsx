'use client';
import React, { useState } from 'react';
import AudioControls from './AudioControls';

const AudioPlayer = ({ children }: { children: React.ReactNode }) => {
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const updateTiming = (duration: number, currentTime: number) => {
    setCurrentTime(currentTime);
    setDuration(duration);
  };

  return (
    <div className='relative w-full h-full'>
      <audio
        controls={false} // this hides the player
        controlsList='nodownload'
        ref={audioRef}
        onEnded={() => {
          // Send complete notification
        }}
        onTimeUpdate={(e: any) => {
          updateTiming(e.target.duration, e.target.currentTime);
        }}
        onLoadedMetadata={(e: any) => {
          updateTiming(e.target.duration, e.target.currentTime);
        }}
      >
        {children}
        Your browser does not support the audio tag.
      </audio>
      <AudioControls audioRef={audioRef} currentTime={currentTime} duration={duration} />
    </div>
  );
};

export default AudioPlayer;
