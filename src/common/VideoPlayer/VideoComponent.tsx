import React, { RefObject, SyntheticEvent } from 'react';

const VideoComponent = ({
  children,
  setVideoPlaying,
  videoId,
  videoRef,
  updateVideoTiming,
}: {
  videoId: string;
  videoRef: RefObject<HTMLVideoElement>;
  setVideoPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  updateVideoTiming: (duration: number, currentTime: number) => void;
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
        // Send complete notification
        setVideoPlaying(false);
      }}
      onTimeUpdate={(e: any) => {
        updateVideoTiming(e.target.duration, e.target.currentTime);
      }}
      onLoadedMetadata={(e: any) => {
        updateVideoTiming(e.target.duration, e.target.currentTime);
      }}
      className='video-js object-contain rounded-2xl h-full w-full max-h-screen max-w-full [&::-webkit-media-controls-enclosure]:!hidden'
    >
      {children}
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoComponent;
