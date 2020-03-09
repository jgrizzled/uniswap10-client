import React from 'react';
import styled from 'styled-components';
import Card from 'components/common/card.styled';

const Container = styled.div`
  grid-area: index-return;
`;

export default function IndexReturn({ value }) {
  return (
    <Container>
      <Card>
        <center>
          <h1>Total Return</h1>
          <p>{((value - 1) * 100).toFixed(2)}%</p>
        </center>
      </Card>
    </Container>
  );
}
