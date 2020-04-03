import React from 'react';
import styled from 'styled-components';
import Card from 'components/common/card.styled';
import Percent from 'components/common/percent';

const Container = styled.div`
  grid-area: index-change;
  text-align: center;
`;

export default function IndexChange({ change }) {
  return (
    <Container>
      <Card>
        <h1>24h Change</h1>
        <Percent number={change} />
      </Card>
    </Container>
  );
}
