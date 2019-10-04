import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Streaming = () => {
  const [blobUrl, setBlobUrl] = useState('');

  return (
    <video style={{ width: 750, height: 500 }} controls>
      <source
        src='https://shsongoutube.s3.ap-northeast-2.amazonaws.com/sample-video.mp4'
        type='video/mp4'
      />
    </video>
  );
};

export default Streaming;
