'use client';
import React, { useEffect, useRef, useState } from 'react';
import videojs from 'video.js';
import autoAnimate from '@formkit/auto-animate';
import VideoComponent from './VideoComponent';
import VideoControls from './VideoControls';
import videoOptions from './options';

const VideoPlayer = ({
  videoId,
  children,
}: {
  videoId: string;
  children: React.ReactNode;
}) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const playerRef: any = React.useRef<any>(null);
  const [videoPlaying, setVideoPlaying] = React.useState(false);
  const [showControls, setShowControls] = useState(true);
  const parentRef = useRef(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  React.useEffect(() => {
    // make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = videoRef.current;

      // if (!videoElement) return;
      const player = (playerRef.current = videojs(videoElement as any, videoOptions));
    } else {
      // you can update player here [update player through props]
      const player = playerRef.current;

      // player.src(sources);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoOptions, videoRef]);

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, [parentRef]);

  const updateVideoTiming = (duration: number, currentTime: number) => {
    setDuration(duration);
    setCurrentTime(currentTime);
  };

  return (
    <div
      data-vjs-player
      className='relative w-full h-full'
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      ref={parentRef}
    >
      <VideoComponent
        setVideoPlaying={setVideoPlaying}
        videoId={videoId}
        videoRef={videoRef}
        updateVideoTiming={updateVideoTiming}
      >
        {children}
      </VideoComponent>

      <VideoControls
        setVideoPlaying={setVideoPlaying}
        videoId={videoId}
        videoPlaying={videoPlaying}
        showControls={showControls}
        videoRef={videoRef}
        duration={duration}
        currentTime={currentTime}
      />
    </div>
  );
};

export default VideoPlayer;
