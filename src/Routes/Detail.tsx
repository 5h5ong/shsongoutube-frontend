import React from 'react';
import { withRouter } from 'react-router-dom';
import VideoPlayer from '../Components/VideoPlayer';

const Detail = ({ match, location }: any) => {
  const { filename, videoId } = match.params;
  return (
    <>
      <div>{filename}</div>
      <VideoPlayer id={parseInt(videoId)} />
    </>
  );
};

export default withRouter(Detail);
