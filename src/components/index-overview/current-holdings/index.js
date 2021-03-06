// index current holdings

import React from 'react';
import propTypes from 'prop-types';
import { round } from 'portfolio-tools';

import Card from 'components/common/card.styled';
import Title from 'components/common/title.styled';
import { tokenIconUrl } from 'tokenIconUrl';
import { Container, HoldingsContainer, HoldingsList } from './styles';

export default function CurrentHoldings({ holdings, tokens }) {
  const currentHoldings = [];
  for (const k of Object.keys(holdings)) {
    if (k === 'date' || holdings[k] <= 0) continue;
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
                  : {round(h.value * 100, 0)}%
                </span>
              </li>
            ))}
          </HoldingsList>
        </HoldingsContainer>
      </Card>
    </Container>
  );
}

CurrentHoldings.propTypes = {
  holdings: propTypes.object.isRequired,
  tokens: propTypes.array.isRequired
};
