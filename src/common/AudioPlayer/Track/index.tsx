import React, { RefObject } from 'react';
import TrackProgress from './TrackProgress';
import TrackControls from './TrackControls';

const AudioTrack = ({
  audioRef,
  audioPlaying,
  setAudioPlaying,
  currentTime,
  duration,
  allowSkip,
}: {
  audioPlaying: boolean;
  audioRef: RefObject<HTMLAudioElement>;
  setAudioPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  duration: number;
  currentTime: number;
  allowSkip?: boolean;
}) => {
  return (
    <div className='w-full flex flex-col gap-4'>
      <TrackProgress
        audioRef={audioRef}
        currentTime={currentTime}
        duration={duration}
        allowSkip={allowSkip}
      />
      <TrackControls
        audioRef={audioRef}
        audioPlaying={audioPlaying}
        setAudioPlaying={setAudioPlaying}
        allowSkip={allowSkip}
      />
    </div>
  );
};

export default AudioTrack;
