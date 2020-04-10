// index value chart

import React, { useContext, useState, useRef } from 'react';
import propTypes from 'prop-types';
import styled, { ThemeContext } from 'styled-components';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts';
import { useMedia } from 'react-use';
import { round } from 'portfolio-tools';

import Card from 'components/common/card.styled';
import Percent from 'components/common/percent';
import Title from 'components/common/title.styled';
import ChartTop from 'components/common/chart-top';

export default function IndexChart({ indexByDate }) {
  const [chartWindow, setChartWindow] = useState(null);
  const chartRef = useRef(null);
  const { hash } = useLocation();
  const scrollToChart = () => chartRef.current.scrollIntoView();
  if (hash === '#chart' && chartRef.current) scrollToChart();
  const windowedIndex = chartWindow
    ? indexByDate.slice(0 - chartWindow)
    : indexByDate;
  const totalReturn =
    windowedIndex[windowedIndex.length - 1].index / windowedIndex[0].index - 1;
  const theme = useContext(ThemeContext);
  const isNotMobile = useMedia(`(min-width: ${theme.breakpoint.desktop})`);
  return (
    <Container ref={chartRef}>
      <Card>
        <Title>Index</Title>
        <ChartTop chartWindow={chartWindow} setChartWindow={setChartWindow}>
          Total Return:&nbsp;&nbsp;
          <Percent number={totalReturn} />
        </ChartTop>
        <ResponsiveContainer aspect={isNotMobile ? 60 / 22 : 60 / 44}>
          <LineChart data={windowedIndex}>
            <Line
              type='linear'
              dataKey='index'
              stroke={theme.color.primary}
              strokeWidth={2}
              dot={false}
              isAnimationActive={false}
            />
            <CartesianGrid stroke='#ccc' />
            <XAxis
              dataKey='date'
              tickLine={false}
              axisLine={false}
              interval='preserveStartEnd'
              tickMargin={isNotMobile ? 16 : 8}
              minTickGap={116}
              tickFormatter={tick => moment(tick).format('MMM DD')}
            />
            <YAxis
              hide={false}
              type='number'
              domain={['dataMin', 'dataMax']}
              tickMargin={isNotMobile ? 16 : 8}
              orientation='left'
              tickFormatter={tick => tick.toFixed(1)}
              axisLine={false}
              tickLine={false}
              interval='preserveStartEnd'
              tickCount={5}
            />
            <Tooltip
              formatter={val => round(val, 2)}
              labelFormatter={label => moment(label).format('MMM DD, YYYY')}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </Container>
  );
}

const Container = styled.div`
  grid-area: chart;
`;

IndexChart.propTypes = {
  indexByDate: propTypes.array.isRequired
};
