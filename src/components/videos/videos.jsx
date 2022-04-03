import React, { useState, useEffect } from 'react';
import VideoPlayer from 'react-video-js-player';
import Poster from '@assets/images/cau-vang-bg.webp';
import VideoIntro from '@assets/upload/video-danang.mov';

const svgButtonPause = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Vector" d="M5.76 14.5H3.34C2.1 14.5 1.5 13.9267 1.5 12.74V3.26C1.5 2.07333 2.1 1.5 3.34 1.5H5.76C7 1.5 7.6 2.07333 7.6 3.26V12.74C7.6 13.9267 7 14.5 5.76 14.5ZM3.34 2.5C2.62 2.5 2.5 2.68 2.5 3.26V12.74C2.5 13.32 2.61333 13.5 3.34 13.5H5.76C6.48 13.5 6.6 13.32 6.6 12.74V3.26C6.6 2.68 6.48667 2.5 5.76 2.5H3.34Z" fill="#FDFDFD" fill-opacity="0.95"/>
<path id="Vector_2" d="M12.6604 14.5H10.2404C9.00039 14.5 8.40039 13.9267 8.40039 12.74V3.26C8.40039 2.07333 9.00039 1.5 10.2404 1.5H12.6604C13.9004 1.5 14.5004 2.07333 14.5004 3.26V12.74C14.5004 13.9267 13.9004 14.5 12.6604 14.5ZM10.2404 2.5C9.52039 2.5 9.40039 2.68 9.40039 3.26V12.74C9.40039 13.32 9.51372 13.5 10.2404 13.5H12.6604C13.3804 13.5 13.5004 13.32 13.5004 12.74V3.26C13.5004 2.68 13.3871 2.5 12.6604 2.5H10.2404Z" fill="#FDFDFD" fill-opacity="0.95"/>
</svg>
`;

const svgButtonPlay = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Vector" d="M5.24602 14.1865C4.71935 14.1865 4.21935 14.0598 3.77935 13.8065C2.73935 13.2065 2.16602 11.9865 2.16602 10.3798V5.6265C2.16602 4.01316 2.73935 2.79983 3.77935 2.19983C4.81935 1.59983 6.15935 1.71316 7.55935 2.51983L11.6727 4.89316C13.066 5.69983 13.8393 6.8065 13.8393 8.0065C13.8393 9.2065 13.0727 10.3132 11.6727 11.1198L7.55935 13.4932C6.75268 13.9532 5.96602 14.1865 5.24602 14.1865ZM5.24602 2.81316C4.88602 2.81316 4.56602 2.89316 4.27935 3.05983C3.55935 3.47316 3.16602 4.3865 3.16602 5.6265V10.3732C3.16602 11.6132 3.55935 12.5198 4.27935 12.9398C4.99935 13.3598 5.98602 13.2398 7.05935 12.6198L11.1727 10.2465C12.246 9.6265 12.8393 8.83316 12.8393 7.99983C12.8393 7.1665 12.246 6.37316 11.1727 5.75316L7.05935 3.37983C6.40602 3.0065 5.79268 2.81316 5.24602 2.81316Z" fill="#FDFDFD" fill-opacity="0.95"/>
</svg>`;

const svgButtonVolumeHigh = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Vector" d="M8.36732 13.7266C7.84065 13.7266 7.26065 13.5399 6.68065 13.1732L4.73398 11.9532C4.60065 11.8732 4.44732 11.8266 4.29398 11.8266H3.33398C1.72065 11.8266 0.833984 10.9399 0.833984 9.32657V6.65991C0.833984 5.04657 1.72065 4.15991 3.33398 4.15991H4.28732C4.44065 4.15991 4.59398 4.11324 4.72732 4.03324L6.67398 2.81324C7.64732 2.20657 8.59398 2.09324 9.34065 2.50657C10.0873 2.91991 10.494 3.77991 10.494 4.93324V11.0466C10.494 12.1932 10.0807 13.0599 9.34065 13.4732C9.04732 13.6466 8.71398 13.7266 8.36732 13.7266ZM3.33398 5.16657C2.28065 5.16657 1.83398 5.61324 1.83398 6.66657V9.33324C1.83398 10.3866 2.28065 10.8332 3.33398 10.8332H4.28732C4.63398 10.8332 4.96732 10.9266 5.26065 11.1132L7.20732 12.3332C7.84732 12.7332 8.45398 12.8399 8.86065 12.6132C9.26732 12.3866 9.50065 11.8199 9.50065 11.0666V4.93991C9.50065 4.17991 9.26732 3.61324 8.86065 3.39324C8.45398 3.16657 7.84732 3.26657 7.20732 3.67324L5.25398 4.88657C4.96732 5.07324 4.62732 5.16657 4.28732 5.16657H3.33398Z" fill="#FDFDFD" fill-opacity="0.95"/>
<path id="Vector_2" d="M12.0002 11.1665C11.8935 11.1665 11.7935 11.1332 11.7002 11.0665C11.4802 10.8999 11.4335 10.5865 11.6002 10.3665C12.6468 8.97319 12.6468 7.02652 11.6002 5.63319C11.4335 5.41319 11.4802 5.09986 11.7002 4.93319C11.9202 4.76652 12.2335 4.81319 12.4002 5.03319C13.7068 6.77986 13.7068 9.21986 12.4002 10.9665C12.3002 11.0999 12.1535 11.1665 12.0002 11.1665Z" fill="#FDFDFD" fill-opacity="0.95"/>
<path id="Vector_3" d="M13.2209 12.8334C13.1142 12.8334 13.0142 12.8 12.9209 12.7334C12.7009 12.5667 12.6542 12.2534 12.8209 12.0334C14.6009 9.66002 14.6009 6.34002 12.8209 3.96669C12.6542 3.74669 12.7009 3.43335 12.9209 3.26669C13.1409 3.10002 13.4542 3.14669 13.6209 3.36669C15.6676 6.09335 15.6676 9.90669 13.6209 12.6334C13.5276 12.7667 13.3742 12.8334 13.2209 12.8334Z" fill="#FDFDFD" fill-opacity="0.95"/>
</svg>
`;

const svgButtonVolumeSlash = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="vuesax/outline/volume-slash">
<g id="vuesax/outline/volume-slash_2">
<g id="volume-slash">
<path id="Vector" d="M4.66732 11.8334H3.33398C1.72065 11.8334 0.833984 10.9467 0.833984 9.33341V6.66674C0.833984 5.05341 1.72065 4.16674 3.33398 4.16674H4.28732C4.44065 4.16674 4.59398 4.12008 4.72732 4.04008L6.67398 2.82008C7.64732 2.21341 8.59398 2.10008 9.34065 2.51341C10.0873 2.92674 10.494 3.78674 10.494 4.94008V5.58008C10.494 5.85341 10.2673 6.08008 9.99398 6.08008C9.72065 6.08008 9.49398 5.85341 9.49398 5.58008V4.94008C9.49398 4.18008 9.26065 3.61341 8.85398 3.39341C8.44732 3.16674 7.84732 3.26674 7.20065 3.67341L5.25398 4.88674C4.96732 5.07341 4.62732 5.16674 4.28732 5.16674H3.33398C2.28065 5.16674 1.83398 5.61341 1.83398 6.66674V9.33341C1.83398 10.3867 2.28065 10.8334 3.33398 10.8334H4.66732C4.94065 10.8334 5.16732 11.0601 5.16732 11.3334C5.16732 11.6067 4.94065 11.8334 4.66732 11.8334Z" fill="#FDFDFD" fill-opacity="0.95"/>
<path id="Vector_2" d="M8.36575 13.7266C7.83908 13.7266 7.25908 13.54 6.67908 13.1733C6.44575 13.0266 6.37242 12.72 6.51908 12.4866C6.66575 12.2533 6.97242 12.18 7.20575 12.3266C7.85242 12.7266 8.45242 12.8333 8.85908 12.6066C9.26575 12.38 9.49908 11.8133 9.49908 11.06V8.6333C9.49908 8.35997 9.72575 8.1333 9.99908 8.1333C10.2724 8.1333 10.4991 8.35997 10.4991 8.6333V11.06C10.4991 12.2066 10.0857 13.0733 9.34575 13.4866C9.04575 13.6466 8.71242 13.7266 8.36575 13.7266Z" fill="#FDFDFD" fill-opacity="0.95"/>
<path id="Vector_3" d="M12.0002 11.1669C11.8935 11.1669 11.7935 11.1335 11.7002 11.0669C11.4802 10.9002 11.4335 10.5869 11.6002 10.3669C12.4402 9.24688 12.6202 7.76021 12.0802 6.47354C11.9735 6.22021 12.0935 5.92688 12.3468 5.82021C12.6002 5.71354 12.8935 5.83354 13.0002 6.08688C13.6802 7.70021 13.4469 9.57354 12.4002 10.9735C12.3002 11.1002 12.1535 11.1669 12.0002 11.1669Z" fill="#FDFDFD" fill-opacity="0.95"/>
<path id="Vector_4" d="M13.2209 12.8335C13.1142 12.8335 13.0142 12.8001 12.9209 12.7335C12.7009 12.5668 12.6542 12.2535 12.8209 12.0335C14.2476 10.1335 14.5609 7.5868 13.6409 5.39347C13.5342 5.14013 13.6542 4.8468 13.9076 4.74013C14.1676 4.63347 14.4542 4.75347 14.5609 5.0068C15.6209 7.5268 15.2609 10.4468 13.6209 12.6335C13.5276 12.7668 13.3742 12.8335 13.2209 12.8335Z" fill="#FDFDFD" fill-opacity="0.95"/>
<path id="Vector_5" d="M1.33427 15.1666C1.2076 15.1666 1.08094 15.12 0.980938 15.02C0.787604 14.8266 0.787604 14.5066 0.980938 14.3133L14.3143 0.979961C14.5076 0.786628 14.8276 0.786628 15.0209 0.979961C15.2143 1.17329 15.2143 1.49329 15.0209 1.68663L1.6876 15.02C1.5876 15.12 1.46094 15.1666 1.33427 15.1666Z" fill="#FDFDFD" fill-opacity="0.95"/>
</g>
</g>
</g>
</svg>
`;

const VideoComponent = props => {
  const [player, setPlayer] = useState(() => {
    return {
      video: {
        src: VideoIntro,
        poster: Poster,
      },
    };
  });

  useEffect(() => {
    let videosTag = document.getElementsByTagName('video')[0];
    let videosClass = document.getElementsByClassName('video-js')[0];
    videosTag.muted = true;
    videosTag.loop = true;
    videosTag.autoplay = true;
    if (!document.getElementById('button-pause-video-intro')) {
      let buttonPause = document.createElement('button');
      let buttonVolume = document.createElement('button');
      buttonPause.setAttribute('id', 'button-videos-intro-pause');
      buttonVolume.setAttribute('id', 'button-videos-intro-volume');
      buttonPause.innerHTML = svgButtonPause;
      videosClass.appendChild(buttonPause);
      videosClass.appendChild(buttonVolume);
      buttonVolume.innerHTML = svgButtonVolumeSlash;
      /** handle click button play videos */
      buttonPause.addEventListener('click', () => {
        if (videosTag.paused) {
          videosTag.play();
          buttonPause.innerHTML = svgButtonPause;
        } else {
          videosTag.pause();
          buttonPause.innerHTML = svgButtonPlay;
        }
      });

      /** handle click button muted */
      buttonVolume.addEventListener('click', () => {
        if (videosTag.muted) {
          videosTag.muted = false;
          buttonVolume.innerHTML = svgButtonVolumeHigh;
        } else {
          videosTag.muted = true;
          buttonVolume.innerHTML = svgButtonVolumeSlash;
        }
      });
    }
    return () => {
      if (typeof videosClass !== 'undefined') {
        videosClass.lastChild.remove();
      }
    };
  }, [player]);

  return (
    <React.Fragment>
      <VideoPlayer
        controls={false}
        bigPlayButton={false}
        bigPlayButtonCentered={false}
        hideControls={['play', 'volume', 'seekbar', 'timer', 'playbackrates', 'fullscreen']}
        src={player.video.src}
        height={'648px'}
        autoplay={true}
        poster={player.video.poster}
        className={'override-video-js'}
      />
    </React.Fragment>
  );
};

export default VideoComponent;
