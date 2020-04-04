import React from 'react';
import styled from 'styled-components';
import Card from 'components/common/card.styled';
import Title from 'components/common/title.styled';

const Container = styled.div`
  display: flex;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 40rem;
  margin: 0 auto;
  line-height: 1.5rem;
  h2 {
    margin-top: 3rem;
  }
`;

export default function FAQ() {
  return (
    <Card>
      <Title>Frequently Asked Questions</Title>
      <Container>
        <h2>What is Uniswap?</h2>
        Uniswap is a decentralized exchange that allows trading of assets/tokens
        on the Ethereum blockchain.
        <h2>What is DeFi?</h2>
        Decentralized Finance, or DeFi for short, refers to the growing
        ecosystem of blockchain-based finance tools.
        <h2>How does Uniswap work?</h2>
        In a traditional exchange, traders place orders to be filled at a
        desired price. In Uniswap, traders buy or sell against a pool of tokens,
        where the price is determined by the amount of tokens in the pool,
        relative to the base asset (IE Ether).
        <h2>What is the index?</h2>
        An index tracks hypothetical investment performance of a given
        investment strategy. In Uniswap10, assets are weighted in proportion to
        market activity.
        <h2>Why track Uniswap?</h2>
        Since Uniswap is an Autonomous Market Maker rather than an order book
        exchange, liquidity and volume measurements are relatively
        straightforward. This allows creation of a market-activity weighted
        index.
        <h2>How are liquidity and volume measured?</h2>
        Liquidity for a given token is calculated by summing the token's pool
        balance (denominated in Ether) with the Ether balance of the pool.
        Volume is similarly a sum of traded tokens and ether. A 1-year average
        is used for each.
        <h2>Why are some liquid tokens not included?</h2>
        Some of the assets on Uniswap are not intended as investments and are
        excluded, such as the Dai Stablecoin that tracks a price of $1 US
        dollar. Other pegged assets, derivatives, and known scams are excluded.
      </Container>
    </Card>
  );
}
