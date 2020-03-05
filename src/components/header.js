import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  width: 100%;
  background-color: ${props => props.theme.color.primary};
  color: ${props => props.theme.color.onPrimary};
`;

const Menu = styled.span`
  position: absolute;
  margin: 1rem;
  font-size: 2rem;
`;

const Title = styled.h1`
  margin: 1rem auto;
  text-align: center;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Menu>
        <FontAwesomeIcon icon={faBars} />
      </Menu>
      <Title>Uniswap 10</Title>
    </HeaderContainer>
  );
}
