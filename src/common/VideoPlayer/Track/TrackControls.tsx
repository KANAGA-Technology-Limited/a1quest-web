import React from 'react';
import { BackwardIcon, PauseIcon, PlayIcon } from '../icons';
import videojs from 'video.js';

const TrackControls = ({
  videoRef,
  videoPlaying,
  setVideoPlaying,
  videoId,
}: {
  videoRef: React.RefObject<HTMLVideoElement>;
  videoId: string;
  videoPlaying: boolean;
  setVideoPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const calculateVideoDuration = (videoDuration: number) => {
    // Convert and format the duration
    const h = Math.floor(videoDuration / 3600)
      .toString()
      .padStart(2, '0');
    const m = Math.floor((videoDuration % 3600) / 60)
      .toString()
      .padStart(2, '0');
    const s = Math.floor(videoDuration % 60)
      .toString()
      .padStart(2, '0');

    const newFormat = Number(h) > 0 ? h + ':' + m + ':' + s : m + ':' + s;
    return newFormat;
  };

  const playVideo = () => {
    videojs(document.getElementById(videoId) || '').muted(false);
    videojs(document.getElementById(videoId) || '').play();
    setVideoPlaying(true);
  };

  const pauseVideo = () => {
    videojs(document.getElementById(videoId) || '').pause();
    setVideoPlaying(false);
  };
  return (
    <div className='h-10 flex w-full items-start justify-between pr-[63px]'>
      <div className='flex items-center gap-10'>
        {/* Play/Pause button */}
        {videoPlaying ? (
          <button onClick={pauseVideo} className='outline-none border-none group'>
            <PauseIcon className='w-10 h-10 group-hover:[&>*]:fill-secondary duration-300' />
          </button>
        ) : (
          <button onClick={playVideo} className='outline-none border-none group'>
            <PlayIcon className='w-10 h-10 group-hover:[&>*]:fill-secondary duration-300' />
          </button>
        )}

        {/* Backward Button */}
        <button
          className='outline-none border-none group'
          onClick={() => {
            if (videoRef.current) {
              const newTime = videoRef.current.currentTime - 10;

              if (newTime > 0) {
                videoRef.current.currentTime = Number(newTime);
              } else {
                // Go to the beginning
                videoRef.current.currentTime = 0;
              }
            }
          }}
        >
          <BackwardIcon className='group-hover:[&>*]:fill-secondary duration-300' />
        </button>
      </div>

      {/* Timeline */}
      <span className='text-white text-lg font-semibold'>
        {calculateVideoDuration(Number(videoRef.current?.currentTime || 0))} /{' '}
        {calculateVideoDuration(Number(videoRef.current?.duration || 0))}
      </span>
    </div>
  );
};

export default TrackControls;
