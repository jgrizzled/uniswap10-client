import React from 'react';
import styled from 'styled-components';
import Card from 'components/common/card.styled';
import Title from 'components/common/title.styled';

export default function FAQ() {
  return (
    <Card>
      <Title>Frequently Asked Questions</Title>
      <Container>
        <h2>What is Uniswap?</h2>
        <p>
          Uniswap is a decentralized exchange that allows trading of
          assets/tokens on the&nbsp;
          <a
            href='https://ethereum.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Ethereum blockchain
          </a>
          .
        </p>
        <h2>What is DeFi?</h2>
        <p>
          Decentralized Finance, or&nbsp;
          <a
            href='https://defipulse.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            DeFi
          </a>
          &nbsp; for short, refers to the growing ecosystem of blockchain-based
          finance tools, such as exchanges and&nbsp;
          <a
            href='http://dfund.info/'
            target='_blank'
            rel='noopener noreferrer'
          >
            investment funds.
          </a>
        </p>
        <h2>How does Uniswap work?</h2>
        <p>
          In a traditional exchange, traders place orders to be filled at a
          desired price. In Uniswap, traders buy or sell against a pool of
          tokens, where the price is determined by the amount of tokens in the
          pool, relative to the base asset (IE Ether).
        </p>
        <h2>What is the index?</h2>
        <p>
          An index tracks hypothetical investment performance of a given
          investment strategy. In Uniswap10, assets are weighted in proportion
          to market activity. The index value represents the hypothetical growth
          of 100 base units of currency (USD or Ether) since inception.
        </p>
        <h2>Why track Uniswap?</h2>
        <p>
          Since Uniswap is an Autonomous Market Maker rather than an order book
          exchange, liquidity and volume measurements are relatively
          straightforward. This allows creation of a market activity-weighted
          index.
        </p>
        <h2>How are liquidity and volume measured?</h2>
        <p>
          Liquidity for a given token is calculated by summing the token's pool
          balance (denominated in Ether) with the Ether balance of the pool.
          Volume is similarly a sum of traded tokens and ether. A 1-year average
          is used for each.
        </p>
        <h2>How are asset weights calculated?</h2>
        <p>
          Each asset is ranked by 1-yr average liquidity and volume. The top 10
          assets are then weighted by their proportion of total liquidity and
          volume.
        </p>
        <h2>How is the index rebalanced?</h2>
        <p>
          If the rebalance period has passed (default 30 days) and the current
          asset weights are off by more than 1%, a rebalance occurs.
        </p>
        <h2>Why are some liquid tokens not included?</h2>
        <p>
          Some of the assets on Uniswap are not intended as investments and are
          excluded, such as the&nbsp;
          <a
            href='https://makerdao.com/en/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Dai Stablecoin
          </a>
          &nbsp; which tracks a price of $1 US dollar. Other pegged assets,
          derivatives, and known scams are excluded.
        </p>
      </Container>
    </Card>
  );
}

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
  p {
    margin: 0;
  }
`;
