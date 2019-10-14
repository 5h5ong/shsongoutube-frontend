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
  width: 100px;
  height: 50px;
  margin: 0 20px;
`;

const BoldText = styled.div`
  font-size: 20px;
`;

const HomeCard = ({ id, filename, url }: HomeCardProps) => {
  return (
    <Container>
      <Link to={`/streaming/${filename}/${id}`}>
        <BoldText>{filename}</BoldText>
      </Link>
    </Container>
  );
};

export default HomeCard;
