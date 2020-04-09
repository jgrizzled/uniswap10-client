// Chart header with window buttons

import React from 'react';
import propTypes from 'prop-types';

import { Container } from './styles';
import WindowButton from './window-button';

export default function ChartTop({ children, chartWindow, setChartWindow }) {
  return (
    <Container>
      <span>{children}</span>
      <span>
        <WindowButton
          checked={!chartWindow}
          onChange={() => setChartWindow(null)}
        >
          All
        </WindowButton>
        <WindowButton
          checked={chartWindow === 365}
          onChange={() => setChartWindow(365)}
        >
          1y
        </WindowButton>
        <WindowButton
          checked={chartWindow === 90}
          onChange={() => setChartWindow(90)}
        >
          3m
        </WindowButton>
        <WindowButton
          checked={chartWindow === 30}
          onChange={() => setChartWindow(30)}
        >
          1m
        </WindowButton>
      </span>
    </Container>
  );
}

ChartTop.propTypes = {
  children: propTypes.node,
  chartWindow: propTypes.number,
  setChartWindow: propTypes.func.isRequired
};
