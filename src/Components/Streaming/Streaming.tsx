import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Streaming = () => {
  const [blobUrl, setBlobUrl] = useState('');
  const downloadVideo = async () => {
    const video = await axios.post(
      'http://localhost:4000/video',
      {
        videoName: 'sample-video.mp4'
      },
      {
        responseType: 'blob'
      }
    );
    // make object url
    const blobUrl = URL.createObjectURL(video.data);
    setBlobUrl(blobUrl);
  };

  useEffect(() => {
    downloadVideo();
  });

  return <div>hello!</div>;
};

export default Streaming;
