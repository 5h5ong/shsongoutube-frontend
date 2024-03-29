import React from 'react';
import styled from '../typed-components';
import FancyLink from './FancyLink';
import BoldText from './BoldText';

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

const HomeCard = ({ id, filename, preview }: HomeCardProps) => {
  return (
    <Container>
      <Preview src={preview} />
      <FancyLink to={`/streaming/${filename}/${id}`}>
        <BoldText>{filename}</BoldText>
      </FancyLink>
    </Container>
  );
};

export default HomeCard;
