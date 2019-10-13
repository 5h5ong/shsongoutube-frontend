import React from 'react';
import { withRouter } from 'react-router-dom';
import VideoPlayer from '../Components/VideoPlayer';

const Detail = ({ match, location }: any) => {
  const { filename } = match.params;
  const { videoId } = location.state;
  return (
    <>
      <div>{filename}</div>
      <VideoPlayer id={parseInt(videoId)} />
    </>
  );
};

export default withRouter(Detail);
