import React from 'react';
import videojs from 'video.js';

const VideoPlayer = ({
  videoId,
  sources,
}: {
  videoId: string;
  sources: { src: string; type: string }[];
}) => {
  const videoOptions = {
    // controlBar: { remainingTimeDisplay: { displayNegative: false } },
    normalizeAutoplay: true,
    // playbackRates: [1, 1.5, 2],
    controls: true,
    bigPlayButton: false,
    responsive: true,
    controlBar: {
      // fullscreenToggle: false,
      pictureInPictureToggle: false,
      // remainingTimeDisplay: { displayNegative: false },
      // volumePanel: false,
      currentTimeDisplay: true,
      // timeDivider: true,
      // durationDisplay: true,
      // captionsButton: true,
      // chaptersButton: true
      // subtitlesButton: true,

      // progressControl: {
      //   seekBar: false
      // }
    },
  };

  const videoRef: any = React.useRef<any>(null);
  const playerRef: any = React.useRef<any>(null);

  React.useEffect(() => {
    // make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = videoRef.current;

      if (!videoElement) return;
      const player = (playerRef.current = videojs(videoElement, { ...videoOptions }));
    } else {
      // you can update player here [update player through props]
      const player = playerRef.current;

      player.src(sources);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [{ ...videoOptions }, videoRef]);

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current;
    return () => {
      if (player) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  const playVideo = () => {
    videojs(document.getElementById(videoId) || '').muted(false);
    videojs(document.getElementById(videoId) || '').play();
  };

  return (
    <div data-vjs-player>
      <video
        playsInline
        key={videoId}
        ref={videoRef}
        id={videoId}
        style={{
          objectFit: 'contain',
          height: '100%',
          width: '100%',
          position: 'relative',
        }}
        // onPlay={(e) => {
        //   props.onPlay && props.onPlay();
        //   togglePlayMode(true);
        //   // getPercentageChange(e);
        // }}
        // onPause={() => {
        //   props.onPause && props.onPause();
        //   togglePlayMode(false);
        // }}
        onEnded={() => {
          // props.playNextVideo && props.playNextVideo();
          // playVideo();
          // togglePlayMode(true);
        }}
        // onProgress={(progress) => {
        //   console.log(progress);
        //   // setPlayed(progress.playedSeconds);
        // }}
        className='vjs-customizedVideo video-js'
        // onLoadedMetadata={(e) => changeVideoDuration(e.target.duration)}
      >
        {/* <track
          kind='captions'
          src={'/sample-video/2b77dedd-0f74-4f73-9e59-c6127465d35b.vtt' || CustomCaption}
          srcLang='en'
          label='English'
          default
        /> */}
      </video>

      {/* {props.buttonType === 'bigPlay' ? (
            <Box
              className={`${Styles.playIconContainer} ${
                props.hidePlayButton ? Styles.hide : ''
              }`}
              onClick={() => {
                playVideo();
              }}
            >
              <img alt='Play' src={PlayIcon} className={Styles.playIconNormal} />
            </Box>
          ) : (
            <Box className={Styles.playInterviewContainer}>
              <CardButton
                text='Watch Interview'
                onClick={() => {
                  playVideo();
                }}
              />
            </Box>
          )} */}
      {/*          
        </div>
      )} */}
    </div>
  );
};

export default VideoPlayer;
