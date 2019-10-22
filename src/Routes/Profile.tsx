import React from 'react';
import styled from '../typed-components';
import { useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import HomeCard from '../Components/HomeCard';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;
// contain simple user information
const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 20px;
`;
// contain list of like videos
const LikeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
const InfoText = styled.div`
  display: flex;
  font-size: 30px;
`;

const GET_USER = gql`
  query {
    me {
      username
      email
      files {
        id
        filename
        preview
      }
    }
  }
`;
const Profile = () => {
  // query user information
  const { data, loading } = useQuery(GET_USER);
  return (
    <Container>
      {!loading && (
        <>
          <InfoContainer>
            <InfoText>{data.me.username}</InfoText>
            <InfoText>{data.me.email}</InfoText>
          </InfoContainer>
          <LikeContainer>
            {data.me.files.map((file: any) => (
              <HomeCard {...file} />
            ))}
          </LikeContainer>
        </>
      )}
    </Container>
  );
};

export default Profile;
