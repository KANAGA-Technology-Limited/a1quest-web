import React, { RefObject } from 'react';
import { PauseIcon, PlayIcon } from './icons';
import videojs from 'video.js';
import VideoTrack from './Track';

const VideoControls = ({
  setVideoPlaying,
  videoId,
  videoPlaying,
  showControls,
  videoRef,
  currentTime,
  duration,
}: {
  videoId: string;
  setVideoPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  videoPlaying: boolean;
  showControls: boolean;
  videoRef: RefObject<HTMLVideoElement>;
  duration: number;
  currentTime: number;
}) => {
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
    <div className='absolute top-0 bottom-0 right-0 left-0 rounded-2xl '>
      {showControls && (
        <div className='bg-[#00000030] absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center flex-col rounded-2xl '>
          {/* Play Icons */}
          {videoPlaying ? (
            <button onClick={pauseVideo} className='outline-none border-none group'>
              <PauseIcon className='group-hover:[&>*]:fill-secondary duration-300' />
            </button>
          ) : (
            <button onClick={playVideo} className='outline-none border-none group'>
              <PlayIcon className='group-hover:[&>*]:fill-secondary duration-300' />
            </button>
          )}
        </div>
      )}

      {/* Track */}
      <VideoTrack
        showControls={showControls}
        videoId={videoId}
        videoRef={videoRef}
        duration={duration}
        currentTime={currentTime}
        videoPlaying={videoPlaying}
        setVideoPlaying={setVideoPlaying}
      />
    </div>
  );
};

export default VideoControls;
