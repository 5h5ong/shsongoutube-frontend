import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from '../typed-components';
import VideoPlayer from '../Components/VideoPlayer';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;
const Filename = styled.span`
  font-size: 20px;
  margin-bottom: 40px;
`;

const Detail = ({ match }: any) => {
  const { filename, videoId } = match.params;
  return (
    <Container>
      <Filename>{filename}</Filename>
      <VideoPlayer id={parseInt(videoId)} />
    </Container>
  );
};

export default withRouter(Detail);
