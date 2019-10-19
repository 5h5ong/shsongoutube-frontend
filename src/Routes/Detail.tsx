import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from '../typed-components';
import VideoPlayer from '../Components/VideoPlayer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  ${props => props.theme.whiteBox}
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;
const ContentContainer = styled.div`
  display: flex;
`;
const Filename = styled.span`
  font-size: 20px;
  margin-bottom: 40px;
`;

const Detail = ({ match }: any) => {
  const [isLiked, setIsLiked] = useState(false);
  const { filename, videoId } = match.params;
  return (
    <Container>
      <Filename>{filename}</Filename>
      <VideoPlayer id={parseInt(videoId)} />
      <ContentContainer>
        <FontAwesomeIcon icon={faThumbsUp} />
      </ContentContainer>
    </Container>
  );
};

export default withRouter(Detail);
