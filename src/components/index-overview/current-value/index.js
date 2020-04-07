import React from 'react';
import styled from 'styled-components';
import { round } from 'portfolio-tools';

import Card from 'components/common/card.styled';
import Title from 'components/common/title.styled';

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

const Container = styled.div`
  grid-area: index-return;
  text-align: center;
  p {
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
  }
`;
