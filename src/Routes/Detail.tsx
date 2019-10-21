import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import DetailCard from '../Components/DetailCard';

const GET_FILE = gql`
  query getFile($id: Int!) {
    getFile(id: $id) {
      id
      filename
      url
      preview
      isLiked
    }
  }
`;

const Detail = ({ match }: any) => {
  const { videoId } = match.params;
  // get File data
  const { data, loading } = useQuery(GET_FILE, {
    variables: { id: parseInt(videoId) }
  });

  return (
    <>{!loading && data && data.getFile && <DetailCard {...data.getFile} />}</>
  );
};

export default withRouter(Detail);
