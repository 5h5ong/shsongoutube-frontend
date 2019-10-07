import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { gql } from 'apollo-boost';
import ReactPlayer from 'react-player';

// set type inside props
type Props = {
  id: number;
};

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
    <div>
      {loading && <div> loading....</div>}
      {!loading && data && data.getFile && data.getFile.url && (
        <ReactPlayer url={data.getFile.url} playing controls />
      )}
    </div>
  );
};

export default VideoPlayer;
