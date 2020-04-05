import React, { useContext, useState, useRef } from 'react';
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
  Tooltip,
} from 'recharts';
import { useMedia } from 'react-use';

import Card from 'components/common/card.styled';
import Percent from 'components/common/percent';
import Title from 'components/common/title.styled';

const Container = styled.div`
  grid-area: chart;
`;

const ChartTop = styled.div`
  padding: 0 1rem 0.5rem 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.5rem;
  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    flex-direction: row;
  }
`;

const RadioInput = styled.input.attrs(({ checked }) => ({
  type: 'radio',
  checked,
}))`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  pointer-events: none;
`;

const RadioLabel = styled.label`
  position: relative;
  span {
    cursor: pointer;
  }
  ${({ checked }) =>
    checked
      ? `
      span {
        font-weight: bold;
      }`
      : `
      span:hover {
        text-decoration: underline;
      }`}
  &:not(:first-of-type)::before {
    content: ' | ';
  }
`;

const Radio = ({ checked, onChange, children }) => (
  <RadioLabel checked={checked}>
    <RadioInput checked={checked} onChange={onChange} />
    <span>{children}</span>
  </RadioLabel>
);

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
        <ChartTop>
          <span>
            Total Return:&nbsp;&nbsp;
            <Percent number={totalReturn} />
          </span>
          <span>
            <Radio checked={!chartWindow} onChange={() => setChartWindow(null)}>
              All
            </Radio>
            <Radio
              checked={chartWindow === 365}
              onChange={() => setChartWindow(365)}
            >
              1y
            </Radio>
            <Radio
              checked={chartWindow === 90}
              onChange={() => setChartWindow(90)}
            >
              3m
            </Radio>
            <Radio
              checked={chartWindow === 30}
              onChange={() => setChartWindow(30)}
            >
              1m
            </Radio>
          </span>
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
              tickLine={false}
              axisLine={false}
              interval='preserveStartEnd'
              tickMargin={isNotMobile ? 16 : 8}
              minTickGap={116}
              tickFormatter={(tick) => moment(tick).format('MMM DD')}
              dataKey='date'
            />
            <YAxis
              hide={false}
              type='number'
              domain={['dataMin', 'dataMax']}
              tickMargin={isNotMobile ? 16 : 8}
              orientation='left'
              tickFormatter={(tick) => tick.toFixed(1)}
              axisLine={true}
              tickLine={false}
              interval='preserveStartEnd'
              minTickGap={5}
            />
            <Tooltip formatter={(val) => val.toFixed(2)} />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </Container>
  );
}
