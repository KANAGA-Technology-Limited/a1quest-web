'use client';
import React, { useState } from 'react';
import AudioControls from './AudioControls';
import LoadingIndicator from '../LoadingIndicator';

const AudioPlayer = ({
  children,
  onEnded,
  allowSkip,
}: {
  children: React.ReactNode;
  onEnded?: () => void;
  allowSkip?: boolean;
}) => {
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [buffering, setBuffering] = useState(false);

  const updateTiming = (duration: number, currentTime: number) => {
    setCurrentTime(currentTime);
    setDuration(duration);
  };

  return (
    <div className='relative w-full h-full'>
      {buffering && (
        <div className='absolute top-6 left-6'>
          <LoadingIndicator />
        </div>
      )}
      <audio
        controls={false} // this hides the player
        controlsList='nodownload'
        ref={audioRef}
        onEnded={() => (onEnded ? onEnded() : null)}
        onTimeUpdate={(e: any) => {
          updateTiming(e.target.duration, e.target.currentTime);
        }}
        onLoadedMetadata={(e: any) => {
          updateTiming(e.target.duration, e.target.currentTime);
        }}
        onWaiting={() => setBuffering(true)}
        onPlaying={() => setBuffering(false)}
      >
        {children}
        Your browser does not support the audio tag.
      </audio>
      <AudioControls
        audioRef={audioRef}
        currentTime={currentTime}
        duration={duration}
        allowSkip={allowSkip}
      />
    </div>
  );
};

export default AudioPlayer;
