import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Streaming = () => {
  const [video, setVideo] = useState();
  const downloadVideo = async () => {
    const video = await axios.post('http://localhost:4000/video', {
      videoName: 'sample-video.mp4'
    });
    setVideo(video);
  };
  useEffect(() => {
    downloadVideo();
  }, []);

  return <div>hello!</div>;
};

export default Streaming;
