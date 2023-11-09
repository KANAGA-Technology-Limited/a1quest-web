import React, { RefObject } from 'react';
import TrackProgress from './TrackProgress';
import TrackControls from './TrackControls';

const AudioTrack = ({
  audioRef,
  audioPlaying,
  setAudioPlaying,
  currentTime,
  duration,
}: {
  audioPlaying: boolean;
  audioRef: RefObject<HTMLAudioElement>;
  setAudioPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  duration: number;
  currentTime: number;
}) => {
  return (
    <div className='w-full flex flex-col gap-4'>
      <TrackProgress audioRef={audioRef} currentTime={currentTime} duration={duration} />
      <TrackControls
        audioRef={audioRef}
        audioPlaying={audioPlaying}
        setAudioPlaying={setAudioPlaying}
      />
    </div>
  );
};

export default AudioTrack;
