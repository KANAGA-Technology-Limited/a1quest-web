import React, { RefObject, SyntheticEvent } from 'react';

const VideoComponent = ({
  children,
  setVideoPlaying,
  videoId,
  videoRef,
  updateVideoTiming,
  onEnded,
  setBuffering,
}: {
  videoId: string;
  videoRef: RefObject<HTMLVideoElement>;
  setVideoPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  updateVideoTiming: (duration: number, currentTime: number) => void;
  onEnded?: () => void;
  setBuffering: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <video
      playsInline
      key={videoId}
      ref={videoRef}
      id={videoId}
      controls={false}
      controlsList='nodownload'
      onPlay={() => {
        setVideoPlaying(true);
      }}
      onPause={() => {
        setVideoPlaying(false);
      }}
      onEnded={() => {
        onEnded ? onEnded() : null;
        setVideoPlaying(false);
      }}
      onTimeUpdate={(e: any) => {
        updateVideoTiming(e.target.duration, e.target.currentTime);
      }}
      onLoadedMetadata={(e: any) => {
        updateVideoTiming(e.target.duration, e.target.currentTime);
      }}
      onContextMenu={(e) => e.preventDefault()}
      className='video-js object-contain rounded-2xl !h-full !w-full'
      onWaiting={() => setBuffering(true)}
      onPlaying={() => setBuffering(false)}
    >
      {children}
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoComponent;
