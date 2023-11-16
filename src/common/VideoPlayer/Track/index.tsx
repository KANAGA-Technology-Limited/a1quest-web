import React, { RefObject, useEffect, useState } from 'react';
import TrackProgress from './TrackProgress';
import { FullScreenIcon } from '../icons';
import TrackControls from './TrackControls';

const VideoTrack = ({
  showControls,
  videoId,
  videoRef,
  currentTime,
  duration,
  videoPlaying,
  setVideoPlaying,
  allowSkip,
}: {
  showControls: boolean;
  videoPlaying: boolean;
  videoId: string;
  videoRef: RefObject<HTMLVideoElement>;
  duration: number;
  currentTime: number;
  setVideoPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  allowSkip?: boolean;
}) => {
  const [show, setShow] = useState(showControls);
  useEffect(() => {
    let timeout: string | number | NodeJS.Timeout | undefined;
    if (!showControls) {
      timeout = setTimeout(() => {
        setShow(false);
      }, 6000);
    } else {
      setShow(true);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [showControls]);

  return (
    <div className='absolute bottom-0 right-0 left-0'>
      {show && (
        <div className='w-full p-6 relative'>
          <div className='flex items-center w-full gap-4'>
            <TrackProgress
              videoRef={videoRef}
              duration={duration}
              currentTime={currentTime}
              allowSkip={allowSkip}
            />
            <button
              className='outline-none border-none group'
              onClick={() => videoRef.current?.requestFullscreen()}
            >
              <FullScreenIcon className='group-hover:[&>*]:fill-secondary duration-300' />
            </button>
          </div>
          <TrackControls
            videoRef={videoRef}
            videoPlaying={videoPlaying}
            setVideoPlaying={setVideoPlaying}
            videoId={videoId}
            allowSkip={allowSkip}
          />
        </div>
      )}
    </div>
  );
};

export default VideoTrack;
