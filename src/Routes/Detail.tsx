import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from '../typed-components';
import VideoPlayer from '../Components/VideoPlayer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp as fasThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp as farThumbsUp } from '@fortawesome/free-regular-svg-icons';

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
  width: 100%;
  margin-top: 30px;
  flex-direction: row;
  justify-content: flex-start;
`;
const Filename = styled.span`
  font-size: 20px;
  margin-bottom: 40px;
`;
const Icon = styled.div``;

const Detail = ({ match }: any) => {
  const [isLiked, setIsLiked] = useState(false);
  const { filename, videoId } = match.params;
  // functions
  const onClick = () => {
    setIsLiked(i => !i);
  };

  return (
    <Container>
      <Filename>{filename}</Filename>
      <VideoPlayer id={parseInt(videoId)} />
      <ContentContainer>
        <Icon onClick={onClick}>
          {isLiked && <FontAwesomeIcon icon={fasThumbsUp} size='2x' />}
          {!isLiked && <FontAwesomeIcon icon={farThumbsUp} size='2x' />}
        </Icon>
      </ContentContainer>
    </Container>
  );
};

export default withRouter(Detail);
