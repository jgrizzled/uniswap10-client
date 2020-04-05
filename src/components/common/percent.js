import styled from 'styled-components';
import React from 'react';

import { round } from 'portfolio-tools';

const Colored = styled.span`
  color: ${({ color }) => color};
`;

export default function Percent({ number }) {
  let color = 'inherit';
  if (number > 0) color = '#74954F';
  if (number < 0) color = '#FB6464';
  return (
    <Colored color={color}>
      {number > 0 && '+'}
      {round(number * 100, 2)}%
    </Colored>
  );
}
