// stateful splash page

import React, { useState, useEffect } from 'react';

import { Container } from './styles';

export default function SplashPage({ sv }) {
  // show splash page on first visit
  const [visited, setVisited] = useState(
    localStorage.getItem('visited') === 'true'
  );
  useEffect(() => {
    localStorage.setItem('visited', 'true');
  }, []);
  if (visited) return null;

  return (
    <Container>
      <h1>UNISWAP10</h1>
      <h2>
        Track the top cryptocurrencies on the most popular decentralized
        exchange
      </h2>
      <button onClick={() => setVisited(true)}>GET STARTED</button>
    </Container>
  );
}
