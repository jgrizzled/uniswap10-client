import React from 'react';
import styled from 'styled-components';
import Card from 'styled-tags/card';

const Container = styled.div`
  display: grid;
  grid-area: 'current-holdings';
`;

const Title = styled.h1`
  text-align: center;
`;

const HoldingsContainer = styled.div`
  display: flex;
`;

const HoldingsList = styled.ol`
  margin: 1rem auto;
  padding: 0;
  li {
    width: 100%;
  }
`;

export default function CurrentHoldings(props) {
  const currentHoldings = [];
  for (const k of Object.keys(props.data)) {
    if (k === 'date') continue;
    currentHoldings.push({ name: k, value: Number(props.data[k]) });
  }
  currentHoldings.sort((a, b) => b.value - a.value);
  return (
    <Container>
      <Card>
        <Title>Current Holdings</Title>
        <HoldingsContainer>
          <HoldingsList>
            {currentHoldings.map(h => (
              <li>
                {h.name}: {h.value * 100}%
              </li>
            ))}
          </HoldingsList>
        </HoldingsContainer>
      </Card>
    </Container>
  );
}
