import React from 'react';
import { Link } from 'react-router-dom';
import styled from '../typed-components';

type FancyLinkProps = {
  to: string;
  children: object;
};
const EditedLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
const FancyLink = ({ to, children }: FancyLinkProps) => {
  return <EditedLink to={to}>{children}</EditedLink>;
};

export default FancyLink;
