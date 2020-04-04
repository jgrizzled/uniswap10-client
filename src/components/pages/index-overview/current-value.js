import React from 'react';
import styled from 'styled-components';
import Card from 'components/common/card.styled';
import Title from 'components/common/title.styled';

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
        <p>{value.toFixed(2)}</p>
      </Card>
    </Container>
  );
}
