import React from 'react';
import styled from '../typed-components';

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
      <BoldText>{filename}</BoldText>
    </Container>
  );
};

export default HomeCard;
