// site header

import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderContainer } from './styles';

export default function Header() {
  return (
    <HeaderContainer>
      <Link to='/'>
        <h1>Uniswap 10</h1>
      </Link>
    </HeaderContainer>
  );
}
