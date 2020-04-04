import React from 'react';
import styled from 'styled-components';
import Card from 'components/common/card.styled';
import Title from 'components/common/title.styled';
import Percent from 'components/common/percent';

const Container = styled.div`
  grid-area: index-change;
  text-align: center;
  span {
    font-size: 1.5rem;
  }
`;

export default function Change({ change }) {
  return (
    <Container>
      <Card>
        <Title>24h Change</Title>
        <Percent number={change} />
      </Card>
    </Container>
  );
}
