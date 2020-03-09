import React from 'react';
import styled from 'styled-components';
import IndexChart from './index-chart';
import CurrentHoldings from './current-holdings';
import HistoricalHoldings from './historical-holdings';
import IndexChange from './index-change';
import IndexReturn from './index-return';

const Container = styled.div`
  width: 100%;
  display: grid;
  padding: 0 1rem;
  grid-template-areas:
    'index-return'
    'index-change'
    'chart'
    'current-holdings'
    'historical-holdings';
  grid-template-columns: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    grid-template-columns: 50% 50%;
    grid-template-areas:
      'index-return index-change'
      'chart chart'
      'current-holdings current-holdings'
      'historical-holdings historical-holdings';
  }
`;

export default function IndexOverview({ data }) {
  const { indexByDate, holdingsByDate, tokens } = data;
  const currentHoldings = holdingsByDate[holdingsByDate.length - 1];
  const currentValue = indexByDate[indexByDate.length - 1].index;
  const lastValue = indexByDate[indexByDate.length - 2].index;
  const change = ((currentValue - lastValue) / lastValue) * 100;
  return (
    <Container>
      <IndexReturn value={currentValue} />
      <IndexChange change={change} />
      <IndexChart data={indexByDate} />
      <CurrentHoldings holdings={currentHoldings} tokens={tokens} />
      <HistoricalHoldings data={holdingsByDate} />
    </Container>
  );
}
