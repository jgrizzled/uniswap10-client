import React from 'react';
import styled from 'styled-components';
import Card from 'components/common/card.styled';
import Title from 'components/common/title.styled';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export default function About() {
  return (
    <Card>
      <Title>About</Title>
      <Container>
        <p>
          Uniswap 10 is an index of the top 10 cryptocurrencies trading on
          Uniswap. The index indicates market growth of decentralized assets.
          <ul>
            <li>Assets are weighted by 1-yr average liquidity and volume.</li>
            <li>
              Stablecoins, derivatives, pegged assets, and known scams are not
              included.
            </li>
            <li>
              Ether is not included due to it being the base currency of Uniswap
            </li>
            <li>Weights are rounded to nearest 1%.</li>
            <li>
              Trading costs, slippage, and transaction fees are not included in
              historical index performance.
            </li>
          </ul>
        </p>
      </Container>
    </Card>
  );
}
