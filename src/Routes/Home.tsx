import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { gql } from 'apollo-boost';
import HomeCard from '../Components/HomeCard';

const GET_ALL_FILE = gql`
  {
    getAllFile {
      id
      url
      filename
    }
  }
`;

const Home = () => {
  const { data, loading } = useQuery(GET_ALL_FILE);
  console.log(data);
  return (
    <>
      {loading && <div>Loading...</div>}
      {!loading &&
        data &&
        data.getAllFile &&
        data.getAllFile.map((file: any) => (
          <HomeCard key={file.id} {...file} />
        ))}
    </>
  );
};

export default Home;
