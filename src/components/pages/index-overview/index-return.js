import React from 'react';
import styled from 'styled-components';
import Card from 'components/common/card.styled';
import Percent from 'components/common/percent';

const Container = styled.div`
  grid-area: index-return;
  text-align: center;
`;

export default function IndexReturn({ value }) {
  return (
    <Container>
      <Card>
        <h1>Total Return</h1>
        <Percent number={value - 1} />
      </Card>
    </Container>
  );
}
