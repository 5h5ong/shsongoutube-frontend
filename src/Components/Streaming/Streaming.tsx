import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Streaming = () => {
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
    const videoUrl = URL.createObjectURL(video.data);
    return videoUrl;
  };
  const makeBlob = (videoData: any) => {
    const blob = new Blob(videoData, { type: 'video/mp4' });
    return blob;
  };
  useEffect(() => {
    downloadVideo();
  });

  return <div>hello!</div>;
};

export default Streaming;
