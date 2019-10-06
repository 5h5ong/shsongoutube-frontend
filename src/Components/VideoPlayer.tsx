import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { gql } from 'apollo-boost';
import ReactPlayer from 'react-player';

// set type inside props
type Props = {
  filename: string;
};

const GET_FILE = gql`
  query getFile($filename: String!) {
    getFile(filename: $filename) {
      url
    }
  }
`;

const VideoPlayer = ({ filename }: Props) => {
  const { data, loading } = useQuery(GET_FILE, { variables: { filename } });
  if (data) {
    console.log(data.getFile.url);
  }
  return (
    <div>
      {loading && <div> loading....</div>}
      {!loading && data && data.getFile.url && (
        <ReactPlayer url={data.getFile.url} playing controls />
      )}
    </div>
  );
};

export default VideoPlayer;
