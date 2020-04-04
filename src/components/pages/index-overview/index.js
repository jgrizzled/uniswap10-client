import React from 'react';
import styled from 'styled-components';
import IndexChart from './index-chart';
import CurrentHoldings from './current-holdings';
import HistoricalHoldings from './historical-holdings';
import Change from './change';
import CurrentValue from './current-value';
import Intro from './intro';

const Container = styled.div`
  width: 100%;
  display: grid;
  padding: 0 0.25rem;
  grid-template-areas:
    'intro'
    'index-return'
    'index-change'
    'chart'
    'current-holdings'
    'historical-holdings';
  grid-template-columns: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    padding: 0 1rem;
    grid-template-columns: 50% 50%;
    grid-template-areas:
      'intro index-return'
      'intro index-change'
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
  const change = (currentValue - lastValue) / lastValue;
  return (
    <Container>
      <Intro />
      <CurrentValue value={currentValue} />
      <Change change={change} />
      <IndexChart indexByDate={indexByDate} />
      <CurrentHoldings holdings={currentHoldings} tokens={tokens} />
      <HistoricalHoldings holdingsByDate={holdingsByDate} />
    </Container>
  );
}
