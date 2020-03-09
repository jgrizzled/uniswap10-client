import styled from 'styled-components';
import propTypes from 'prop-types';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const StyledMenu = styled.nav`
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.primaryLight};
  height: 100vh;
  width: 100vw;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 1;

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    text-decoration: none;
    transition: color 0.3s linear;
    color: ${({ theme }) => theme.color.onPrimary};

    @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
      font-size: 1.5rem;
      text-align: center;
    }
  }
`;

export default function Menu({ open, setOpen }) {
  const { pathname } = useLocation();
  return (
    <StyledMenu open={open}>
      {pathname !== '/' && (
        <Link to='/' onClick={() => setOpen(false)}>
          <span role='img' aria-label='settings'>
            &#x1F4C8;
          </span>
          Index
        </Link>
      )}
      {pathname !== '/settings' && (
        <Link to='/settings' onClick={() => setOpen(false)}>
          <span role='img' aria-label='settings'>
            &#x1F6E0;
          </span>
          Settings
        </Link>
      )}
      {pathname !== '/about' && (
        <Link to='/about' onClick={() => setOpen(false)}>
          <span role='img' aria-label='about'>
            &#x1f914;
          </span>
          About
        </Link>
      )}
      {pathname !== '/contact' && (
        <Link to='/contact' onClick={() => setOpen(false)}>
          <span role='img' aria-label='contact'>
            &#x1f4e9;
          </span>
          Contact
        </Link>
      )}
    </StyledMenu>
  );
}

Menu.propTypes = {
  open: propTypes.bool.isRequired
};
