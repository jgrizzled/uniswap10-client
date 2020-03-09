import React from 'react';
import styled from 'styled-components';
import Card from 'components/common/card.styled';

const Container = styled.div`
  grid-area: index-change;
`;

export default function IndexChange({ change }) {
  return (
    <Container>
      <Card>
        <center>
          <h1>24h Change</h1>
          <p>{change.toFixed(2)}%</p>
        </center>
      </Card>
    </Container>
  );
}
