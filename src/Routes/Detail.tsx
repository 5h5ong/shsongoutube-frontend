import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from '../typed-components';
import VideoPlayer from '../Components/VideoPlayer';

const Container = styled.div`
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;

const Detail = ({ match, location }: any) => {
  const { filename, videoId } = match.params;
  return (
    <Container>
      <div>{filename}</div>
      <VideoPlayer id={parseInt(videoId)} />
    </Container>
  );
};

export default withRouter(Detail);
