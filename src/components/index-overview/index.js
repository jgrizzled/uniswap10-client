import React from 'react';
import styled from 'styled-components';
import IndexChart from './index-chart';
import CurrentHoldings from './current-holdings';
import HistoricalHoldings from './historical-holdings';
import IndexChange from './index-change';
import IndexValue from './index-value';

const Container = styled.div`
  width: 100%;
  display: grid;
  padding: 0 1rem;
  grid-template-columns: 100%;
  grid-template-areas:
    'chart'
    'current-holdings'
    'historical-holdings'
    'index-value'
    'index-change';
`;

export default function IndexOverview(props) {
  const currentHoldings =
    props.data.holdingsByDate[props.data.holdingsByDate.length - 1];
  return (
    <Container>
      <IndexChart data={props.data.indexByDate} />
      <CurrentHoldings data={currentHoldings} />
      <HistoricalHoldings data={props.data.holdingsByDate} />
      <IndexValue />
      <IndexChange />
    </Container>
  );
}
