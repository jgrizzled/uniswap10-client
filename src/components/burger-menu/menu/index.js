// sliding menu

import propTypes from 'prop-types';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { StyledMenu } from './styles';

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
      {pathname !== '/faq' && (
        <Link to='/faq' onClick={() => setOpen(false)}>
          <span role='img' aria-label='faq'>
            &#x1f914;
          </span>
          FAQ
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
  open: propTypes.bool.isRequired,
};
