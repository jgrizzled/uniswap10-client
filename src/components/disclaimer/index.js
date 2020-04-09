import React from 'react';
import styled from 'styled-components';

export default function Disclaimer() {
  return (
    <Container>
      <h3>Disclaimer</h3>
      <p>
        This website is for informational purposes only. This is not investment
        advice or an endorsement of any product or service. Index performance is
        hypothetical only. Data is not guaranteed to be accurate. We have no
        affiliation with Uniswap or any token listed on this site. Use this
        website at your own risk.
      </p>
    </Container>
  );
}

const Container = styled.div`
  font-size: 0.8rem;
  color: #808080;
  text-align: center;
  margin: 1rem auto;
  max-width: 80%;
  > * {
    margin: 0 auto;
  }
`;
