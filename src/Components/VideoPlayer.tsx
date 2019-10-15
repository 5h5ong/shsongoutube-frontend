import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { gql } from 'apollo-boost';
import ReactPlayer from 'react-player';
import styled from '../typed-components';

// set type inside props
type Props = {
  id: number;
};

// styled-components
const Container = styled.div``;

const GET_FILE = gql`
  query getFile($id: Int!) {
    getFile(id: $id) {
      url
    }
  }
`;

const VideoPlayer = ({ id }: Props) => {
  const { data, loading } = useQuery(GET_FILE, { variables: { id } });
  return (
    <Container>
      <div>
        {loading && <div> loading....</div>}
        {!loading && data && data.getFile && data.getFile.url && (
          <ReactPlayer url={data.getFile.url} playing controls />
        )}
      </div>
    </Container>
  );
};

export default VideoPlayer;
