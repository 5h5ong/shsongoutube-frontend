import React from 'react';
import styled from '../typed-components';
import { Link } from 'react-router-dom';

type HomeCardProps = {
  id: number;
  filename: string;
  url: string;
};

const Container = styled.div`
  ${props => props.theme.whiteBox}
  margin: 0 20px;
`;

const BoldText = styled.div`
  font-size: 20px;
`;

const HomeCard = ({ id, filename, url }: HomeCardProps) => {
  return (
    <Container>
      <Link to={{ pathname: `/streaming/${filename}`, state: { videoId: id } }}>
        <BoldText>{filename}</BoldText>
      </Link>
    </Container>
  );
};

export default HomeCard;
