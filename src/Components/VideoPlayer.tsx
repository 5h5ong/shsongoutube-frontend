import React from 'react';
import ReactPlayer from 'react-player';
import styled from '../typed-components';

// set type inside props
interface VideoPlayerProps {
  url: string;
}

const Container = styled.div``;

const VideoPlayer = (props: VideoPlayerProps) => {
  return (
    <Container>
      <div>
        <ReactPlayer url={props.url} playing controls />
      </div>
    </Container>
  );
};

export default VideoPlayer;
