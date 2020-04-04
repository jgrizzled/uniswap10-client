import styled from 'styled-components';
import React from 'react';

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
      {(number * 100).toFixed(2)}%
    </Colored>
  );
}
