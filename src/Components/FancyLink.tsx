import React, { Children } from 'react';
import { Link } from 'react-router-dom';
import styled from '../typed-components';
import { JSXElement } from '@babel/types';

type FancyLinkProps = {
  to: string;
  children: object;
};

export const FancyLink = ({ to, children }: FancyLinkProps) => {
  return (
    <Link to={to} style={{ textDecoration: 'none', color: 'black' }}>
      {children}
    </Link>
  );
};
