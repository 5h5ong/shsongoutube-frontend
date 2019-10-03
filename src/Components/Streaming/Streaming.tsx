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
        responseType: 'blob',
        headers: {
          'Content-Type': 'video/mp4'
        }
      }
    );
    setBlobUrl(makeBlob(video.data));
  };
  // make object url
  const makeBlob = (videoData: any) => {
    // blob === undifined
    console.log(videoData);
    const blobUrl = URL.createObjectURL(videoData);
    return blobUrl;
  };

  useEffect(() => {
    downloadVideo();
  }, []);

  return (
    <video style={{ width: 750, height: 500 }}>
      <source src={blobUrl} />
    </video>
  );
};

export default Streaming;
