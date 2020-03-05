import React from 'react';
import styled from 'styled-components';
import Card from 'styled-tags/card';

const Container = styled.div`
  display: grid;
  grid-area: 'index-value';
`;

export default function IndexValue() {
  return (
    <Container>
      <Card>
        <center>
          <h1>Current Value</h1>
          <p>1.5</p>
        </center>
      </Card>
    </Container>
  );
}
