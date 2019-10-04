import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  return (
    <ReactPlayer
      url='https://shsongoutube.s3.ap-northeast-2.amazonaws.com/output/output.m3u8'
      playing
      controls
    />
  );
};

export default VideoPlayer;