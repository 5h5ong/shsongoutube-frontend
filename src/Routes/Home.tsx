import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { gql } from 'apollo-boost';
import styled from '../typed-components';
import HomeCard from '../Components/HomeCard';

const GET_ALL_FILE = gql`
  {
    getAllFile {
      id
      filename
      preview
    }
  }
`;

const GridContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const Home = () => {
  const { data, loading } = useQuery(GET_ALL_FILE);
  console.log(data);
  return (
    <GridContainer>
      {loading && <div>Loading...</div>}
      {!loading &&
        data &&
        data.getAllFile &&
        data.getAllFile.map((file: any) => (
          <HomeCard key={file.id} {...file} />
        ))}
    </GridContainer>
  );
};

export default Home;
