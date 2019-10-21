import React, { useEffect, useState } from 'react';
import styled from '../typed-components';
import VideoPlayer from '../Components/VideoPlayer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp as fasThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp as farThumbsUp } from '@fortawesome/free-regular-svg-icons';

interface DetailCardProps {
  filename: string;
  url: string;
  preview: string;
  isLiked: boolean;
}
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

const DetailCard = (props: DetailCardProps) => {
  const [isLiked, setIsLiked] = useState<Boolean>(props.isLiked);
  return (
    <Container>
      <Filename>{props.filename}</Filename>
      <VideoPlayer url={props.url} />
      <ContentContainer>
        <Icon onClick={() => setIsLiked(i => !i)}>
          {isLiked && <FontAwesomeIcon icon={fasThumbsUp} size='2x' />}
          {!isLiked && <FontAwesomeIcon icon={farThumbsUp} size='2x' />}
        </Icon>
      </ContentContainer>
    </Container>
  );
};

export default DetailCard;
