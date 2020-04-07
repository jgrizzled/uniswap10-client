// index stats page

import React from 'react';
import propTypes from 'prop-types';

import IndexChart from './index-chart';
import CurrentHoldings from './current-holdings';
import HistoricalHoldings from './historical-holdings';
import Change from './change';
import CurrentValue from './current-value';
import Intro from './intro';
import { Container } from './styles';

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

IndexOverview.propTypes = {
  data: propTypes.shape({
    indexByDate: propTypes.array.isRequired,
    holdingsByDate: propTypes.array.isRequired,
    tokens: propTypes.array.isRequired
  }).isRequired
};
