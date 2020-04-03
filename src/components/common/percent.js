import styled from 'styled-components';
import React from 'react';

const Colored = styled.p`
  color: ${({ color }) => color};
  font-weight: bold;
`;

export default function Percent({ number }) {
  let color = 'inherit';
  if (number > 1) color = '#74954F';
  if (number < 1) color = '#FB6464';
  return <Colored color={color}>{(number * 100).toFixed(2)}%</Colored>;
}
