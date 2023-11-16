import React, { useEffect, useState } from 'react';
import { PauseIcon, PlayIcon } from '../VideoPlayer/icons';
import autoAnimate from '@formkit/auto-animate';
import AudioTrack from './Track';

const AudioControls = ({
  audioRef,
  currentTime,
  duration,
  allowSkip,
}: {
  audioRef: React.RefObject<HTMLAudioElement>;
  duration: number;
  allowSkip?: boolean;
  currentTime: number;
}) => {
  const [audioPlaying, setAudioPlaying] = React.useState(false);
  const parentRef: any = React.useRef<any>(null);
  let timeout: string | number | NodeJS.Timeout | undefined;

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, [parentRef]);

  useEffect(() => {
    return () => {
      clearTimeout(timeout);
    };
  }, [timeout]);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current.play();
      setAudioPlaying(true);
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setAudioPlaying(false);
    }
  };

  return (
    <div
      className='rounded-2xl absolute top-0 bottom-0 left-0 right-0 flex flex-col gap-7 flex-1 p-6 py-[22px] items-center'
      ref={parentRef}
    >
      {/* Play Icons */}

      {audioPlaying ? (
        <button onClick={pauseAudio} className='outline-none border-none group'>
          <PauseIcon className='group-hover:[&>*]:fill-secondary duration-300 w-[60px] h-[60px]' />
        </button>
      ) : (
        <button onClick={playAudio} className='outline-none border-none group'>
          <PlayIcon className='group-hover:[&>*]:fill-secondary duration-300 w-[60px] h-[60px]' />
        </button>
      )}

      {/* Track Controls */}
      <AudioTrack
        audioRef={audioRef}
        audioPlaying={audioPlaying}
        setAudioPlaying={setAudioPlaying}
        currentTime={currentTime}
        duration={duration}
        allowSkip={allowSkip}
      />
    </div>
  );
};

export default AudioControls;
