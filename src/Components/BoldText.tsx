import React from 'react';
import styled from '../typed-components';

const Text = styled.div`
  font-size: 20px;
`;

const BoldText = ({ children }: { children: string }) => {
  return <Text>{children}</Text>;
};

export default BoldText;
