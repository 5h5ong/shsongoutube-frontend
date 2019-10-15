import React from 'react';
import styled from '../typed-components';
import { Link } from 'react-router-dom';

type HomeCardProps = {
  id: number;
  filename: string;
  preview?: string;
};

const Container = styled.div`
  display: flex;
  ${props => props.theme.whiteBox}
  margin: 20px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Preview = styled.img`
  width: 200px;
  height: 150px;
  margin-bottom: 10px;
`;

const BoldText = styled.div`
  font-size: 20px;
`;

const HomeCard = ({ id, filename, preview }: HomeCardProps) => {
  return (
    <Container>
      <Preview src={preview} />
      <Link to={`/streaming/${filename}/${id}`}>
        <BoldText>{filename}</BoldText>
      </Link>
    </Container>
  );
};

export default HomeCard;
