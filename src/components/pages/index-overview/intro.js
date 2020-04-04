import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  grid-area: intro;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-evenly;
  padding: 0 3rem;
  h2 {
    margin-bottom: 0.5rem;
  }
  div {
    margin-bottom: 2rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    text-align: left;
  }
`;

export default function IndexReturn({ value }) {
  return (
    <Container>
      <div>
        <h2>Track the top trading tokens on Uniswap</h2>
        Uniswap10 is an index of the top 10 traded tokens on&nbsp;
        <a href='https://uniswap.io/' target='_blank' rel='noopener noreferrer'>
          Uniswap
        </a>
        .
      </div>
      <div>
        <h2>Invest in liquid DeFi assets</h2>
        Tokens are ranked by market activity.&nbsp;
        <Link to='/faq'>Learn more</Link>.
      </div>
      <div>
        <h2>Customize it!</h2>
        Try out the <Link to='/settings'>settings</Link>.
      </div>
    </Container>
  );
}
