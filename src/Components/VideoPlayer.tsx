import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  return (
    <ReactPlayer
      url='https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8'
      playing
    />
  );
};

export default VideoPlayer;
