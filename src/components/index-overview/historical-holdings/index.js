// index historical holdings chart

import React, { useContext, useState } from 'react';
import propTypes from 'prop-types';
import styled, { ThemeContext } from 'styled-components';
import moment from 'moment';
import randomColor from 'randomcolor';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';
import { useMedia } from 'react-use';
import { round } from 'portfolio-tools';

import Card from 'components/common/card.styled';
import Title from 'components/common/title.styled';
import ChartTop from 'components/common/chart-top';

export default function HistoricalHoldings({ holdingsByDate }) {
  const [chartWindow, setChartWindow] = useState(null);
  const [colors, setColors] = useState(
    Object.keys(holdingsByDate[0]).map(_ => randomColor())
  );
  const theme = useContext(ThemeContext);
  const isNotMobile = useMedia(`(min-width: ${theme.breakpoint.desktop})`);
  const windowedHoldings = chartWindow
    ? holdingsByDate.slice(0 - chartWindow)
    : holdingsByDate;
  return (
    <Container>
      <Card>
        <Title>Historical Holdings</Title>
        <ChartTop chartWindow={chartWindow} setChartWindow={setChartWindow} />
        <ResponsiveContainer aspect={isNotMobile ? 60 / 22 : 60 / 44}>
          <AreaChart data={windowedHoldings}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis
              tickLine={false}
              axisLine={false}
              interval='preserveStartEnd'
              tickMargin={isNotMobile ? 16 : 8}
              minTickGap={116}
              tickFormatter={tick => moment(tick).format('MMM DD')}
              dataKey='date'
            />
            <YAxis
              hide={false}
              type='number'
              domain={[0, 1]}
              tickMargin={isNotMobile ? 16 : 8}
              orientation='left'
              axisLine={true}
              tickLine={false}
              interval='preserveStartEnd'
              tickFormatter={tick => parseInt(tick * 100) + '%'}
              minTickGap={5}
            />
            <Tooltip
              formatter={val => round(val * 100, 2) + '%'}
              labelFormatter={label => moment(label).format('MMM DD, YYYY')}
            />
            {Object.keys(holdingsByDate[0]).map((k, i) => {
              if (k !== 'date') {
                return (
                  <Area
                    type='monotoneX'
                    dataKey={k}
                    stackId='1'
                    stroke={colors[i]}
                    fill={colors[i]}
                    key={k}
                    isAnimationActive={false}
                  />
                );
              }
              return null;
            })}
          </AreaChart>
        </ResponsiveContainer>
      </Card>
    </Container>
  );
}

const Container = styled.div`
  grid-area: historical-holdings;
`;

HistoricalHoldings.propTypes = {
  holdingsByDate: propTypes.array.isRequired
};
