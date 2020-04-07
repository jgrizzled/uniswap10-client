import React from 'react';

import { RadioLabel, RadioInput } from './styles';

export default function WindowButton({ checked, onChange, children }) {
  return (
    <RadioLabel checked={checked}>
      <RadioInput checked={checked} onChange={onChange} />
      <span>{children}</span>
    </RadioLabel>
  );
}
