import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
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

import Card from 'components/common/card.styled';

const Container = styled.div`
  grid-area: chart;
`;

const Title = styled.h1`
  text-align: center;
`;

export default function IndexChart({ indexByDate }) {
  const theme = useContext(ThemeContext);
  const isNotMobile = useMedia(`(min-width: ${theme.breakpoint.desktop})`);
  return (
    <Container>
      <Card>
        <Title>Index</Title>
        <ResponsiveContainer aspect={isNotMobile ? 60 / 22 : 60 / 44}>
          <LineChart data={indexByDate}>
            <Line
              type='monotone'
              dataKey='index'
              stroke={theme.color.primary}
              strokeWidth={2}
              dot={false}
            />
            <CartesianGrid stroke='#ccc' />
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
              domain={['dataMin', 'dataMax']}
              tickMargin={isNotMobile ? 16 : 8}
              orientation='left'
              tickFormatter={tick => tick.toFixed(1)}
              axisLine={true}
              tickLine={false}
              interval='preserveStartEnd'
              minTickGap={5}
            />
            <Tooltip formatter={val => val.toFixed(2)} />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </Container>
  );
}
