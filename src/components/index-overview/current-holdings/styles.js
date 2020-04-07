import styled from 'styled-components';

export const Container = styled.div`
  grid-area: current-holdings;
`;

export const HoldingsContainer = styled.div`
  display: flex;
`;

export const HoldingsList = styled.ol`
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
