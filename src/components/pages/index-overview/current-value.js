import React from 'react';
import styled from 'styled-components';

import Card from 'components/common/card.styled';
import Title from 'components/common/title.styled';
import { round } from 'portfolio-tools';

const Container = styled.div`
  grid-area: index-return;
  text-align: center;
  p {
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
  }
`;

export default function CurrentValue({ value }) {
  return (
    <Container>
      <Card>
        <Title>Current Value</Title>
        <p>{round(value, 2)}</p>
      </Card>
    </Container>
  );
}
