// burger icon button to toggle menu

import React from 'react';
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { BurgerButton } from './styles';

export default function Burger({ open, setOpen }) {
  return (
    <BurgerButton onClick={() => setOpen(!open)}>
      <FontAwesomeIcon icon={faBars} />
    </BurgerButton>
  );
}

Burger.propTypes = {
  open: propTypes.bool.isRequired,
  setOpen: propTypes.func.isRequired,
};
