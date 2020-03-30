import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.color.primary};

  font-weight: bold;
  letter-spacing: 0.05rem;
  color: ${({ theme }) => theme.color.onPrimary};
  padding: 0.5rem;
  p {
    text-align: center;
    margin: 0;
  }
  h1 {
    text-transform: uppercase;
    margin: 0;
  }
  a {
    color: ${({ theme }) => theme.color.onPrimary};
    &:hover {
      text-decoration: none;
    }
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Link to='/'>
        <h1>Uniswap 10</h1>
        <p>Top Token Index</p>
      </Link>
    </HeaderContainer>
  );
}
