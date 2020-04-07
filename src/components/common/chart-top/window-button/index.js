// Radio button styled as link

import React from 'react';
import propTypes from 'prop-types';

import { RadioLabel, RadioInput } from './styles';

export default function WindowButton({ checked, onChange, children }) {
  return (
    <RadioLabel checked={checked}>
      <RadioInput checked={checked} onChange={onChange} />
      <span>{children}</span>
    </RadioLabel>
  );
}

WindowButton.propTypes = {
  children: propTypes.node,
  onChange: propTypes.func.isRequired,
  checked: propTypes.bool.isRequired,
};
