import React from 'react';
import styled from 'styled-components';
import Card from 'components/common/card.styled';

const Container = styled.div`
  grid-area: current-holdings;
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

export default function CurrentHoldings({ holdings, tokens }) {
  const currentHoldings = [];
  for (const k of Object.keys(holdings)) {
    if (k === 'date') continue;
    const { symbol, iconURL, address } = tokens.find(t => t.symbol === k);
    currentHoldings.push({
      symbol,
      value: Number(holdings[k]),
      iconURL,
      address
    });
  }
  currentHoldings.sort((a, b) => b.value - a.value);
  return (
    <Container>
      <Card>
        <Title>Current Holdings</Title>
        <HoldingsContainer>
          <HoldingsList>
            {currentHoldings.map((h, i) => (
              <li key={i}>
                <img src={h.iconURL} height='16px' />
                &nbsp;
                <a href={`https://uniswap.info/token/${h.address}`}>
                  {h.symbol}
                </a>
                : {parseInt(h.value * 100)}%
              </li>
            ))}
          </HoldingsList>
        </HoldingsContainer>
      </Card>
    </Container>
  );
}
