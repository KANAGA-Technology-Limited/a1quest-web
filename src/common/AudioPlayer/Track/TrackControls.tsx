import {
  BackwardIcon,
  ForwardIcon,
  PauseIcon,
  PlayIcon,
} from '@/common/VideoPlayer/icons';
import React from 'react';

const TrackControls = ({
  audioRef,
  audioPlaying,
  setAudioPlaying,
  allowSkip,
}: {
  audioRef: React.RefObject<HTMLAudioElement>;
  audioPlaying: boolean;
  setAudioPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  allowSkip?: boolean;
}) => {
  const calculateAudioDuration = (audioDuration: number) => {
    // Convert and format the duration
    const h = Math.floor(audioDuration / 3600)
      .toString()
      .padStart(2, '0');
    const m = Math.floor((audioDuration % 3600) / 60)
      .toString()
      .padStart(2, '0');
    const s = Math.floor(audioDuration % 60)
      .toString()
      .padStart(2, '0');

    const newFormat = Number(h) > 0 ? h + ':' + m + ':' + s : m + ':' + s;
    return newFormat;
  };

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
    <div className='flex w-full items-center justify-between'>
      <div className='flex items-center gap-10'>
        {/* Play/Pause button */}
        {audioPlaying ? (
          <button onClick={pauseAudio} className='outline-none border-none group'>
            <PauseIcon className='w-10 h-10 group-hover:[&>*]:fill-secondary duration-300' />
          </button>
        ) : (
          <button onClick={playAudio} className='outline-none border-none group'>
            <PlayIcon className='w-10 h-10 group-hover:[&>*]:fill-secondary duration-300' />
          </button>
        )}

        {/* Backward Button */}
        <button
          className='outline-none border-none group'
          onClick={() => {
            if (audioRef.current) {
              const newTime = audioRef.current.currentTime - 10;

              if (newTime > 0) {
                audioRef.current.currentTime = Number(newTime);
              } else {
                // Go to the beginning
                audioRef.current.currentTime = 0;
              }
            }
          }}
        >
          <BackwardIcon className='group-hover:[&>*]:fill-secondary duration-300' />
        </button>

        {/* Forward Button */}
        {allowSkip && (
          <button
            className='outline-none border-none group'
            onClick={() => {
              if (audioRef.current) {
                const newTime = audioRef.current.currentTime + 10;

                if (newTime < audioRef.current.duration) {
                  audioRef.current.currentTime = Number(newTime);
                } else {
                  // Go to the beginning
                  audioRef.current.currentTime = audioRef.current.duration;
                }
              }
            }}
          >
            <ForwardIcon className='group-hover:[&>*]:fill-secondary duration-300' />
          </button>
        )}
      </div>

      {/* Timeline */}
      <span className='text-white text-lg font-semibold'>
        {calculateAudioDuration(Number(audioRef.current?.currentTime || 0))} /{' '}
        {calculateAudioDuration(Number(audioRef.current?.duration || 0))}
      </span>
    </div>
  );
};

export default TrackControls;
