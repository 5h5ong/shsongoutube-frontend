import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import styled from '../typed-components';
import VideoPlayer from '../Components/VideoPlayer';
import { IS_LOGGED_IN } from '../globalQueries';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp as fasThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp as farThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { useMutation, useQuery } from 'react-apollo-hooks';

interface DetailCardProps {
  id: string;
  filename: string;
  url: string;
  preview: string;
  isLiked: boolean;
}
const LIKE_VIDEO = gql`
  mutation likeVideo($videoId: Int!) {
    likeVideo(videoId: $videoId)
  }
`;

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
  const {
    data: { isLoggedIn }
  }: any = useQuery(IS_LOGGED_IN);
  const [likeMutation] = useMutation(LIKE_VIDEO, {
    variables: { videoId: parseInt(props.id) }
  });
  const onClick = async () => {
    setIsLiked(i => !i);
    try {
      await likeMutation();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Container>
      <Filename>{props.filename}</Filename>
      <VideoPlayer url={props.url} />
      {isLoggedIn && (
        <ContentContainer>
          <Icon onClick={onClick}>
            {isLiked && <FontAwesomeIcon icon={fasThumbsUp} size='2x' />}
            {!isLiked && <FontAwesomeIcon icon={farThumbsUp} size='2x' />}
          </Icon>
        </ContentContainer>
      )}
    </Container>
  );
};

export default DetailCard;
