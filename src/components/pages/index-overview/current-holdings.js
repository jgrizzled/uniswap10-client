import React from 'react';
import styled from 'styled-components';
import Card from 'components/common/card.styled';
import { tokenIconUrl } from 'tokenIconUrl';

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
    font-size: 1.5rem;
    margin: 0.5rem;
  }
  li span {
    font-size: 1.25rem;
  }
`;

export default function CurrentHoldings({ holdings, tokens }) {
  const currentHoldings = [];
  for (const k of Object.keys(holdings)) {
    if (k === 'date') continue;
    const { symbol, address } = tokens.find(t => t.symbol === k);
    currentHoldings.push({
      symbol,
      value: Number(holdings[k]),
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
                <img
                  src={tokenIconUrl(h.address)}
                  height={16 * 1.25 + 'px'}
                  alt={h.symbol}
                />
                &nbsp;
                <span>
                  <a
                    href={`https://uniswap.info/token/${h.address}`}
                    target='blank'
                  >
                    {h.symbol}
                  </a>
                  : {parseInt(h.value * 100)}%
                </span>
              </li>
            ))}
          </HoldingsList>
        </HoldingsContainer>
      </Card>
    </Container>
  );
}
