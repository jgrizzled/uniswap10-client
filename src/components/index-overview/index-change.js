import React from 'react';
import styled from 'styled-components';
import Card from 'styled-tags/card';

const Container = styled.div`
  display: grid;
  grid-area: 'index-change';
`;

export default function IndexChange() {
  return (
    <Container>
      <Card>
        <center>
          <h1>24h Change</h1>
          <p>+1%</p>
        </center>
      </Card>
    </Container>
  );
}
