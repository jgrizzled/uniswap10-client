import React from 'react';
import styled from 'styled-components';
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

import Card from 'styled-tags/card';

const Container = styled.div`
  display: grid;
  grid-area: 'chart';
`;

const Title = styled.h1`
  text-align: center;
`;

export default function IndexChart(props) {
  const isNotMobile = useMedia('(max-width: 40em)');
  return (
    <Container>
      <Card>
        <Title>Index</Title>
        <ResponsiveContainer aspect={isNotMobile ? 60 / 22 : 60 / 12}>
          <LineChart data={props.data}>
            <Line
              type='monotone'
              dataKey='indexETH'
              stroke='#8884d8'
              strokeWidth={2}
              dot={false}
            />
            <Line
              type='monotone'
              dataKey='indexUSD'
              stroke='#AF4FAC'
              strokeWidth={2}
              dot={false}
            />
            <CartesianGrid stroke='#ccc' />
            {/*<XAxis dataKey='date' tickFormatter={monthTickFormatter} />*/}
            <XAxis
              tickLine={false}
              axisLine={false}
              interval='preserveStartEnd'
              tickMargin={14}
              minTickGap={116}
              tickFormatter={tick => moment(tick).format('MMM DD')}
              dataKey='date'
            />
            <YAxis
              hide={false}
              type='number'
              domain={['dataMin', 'dataMax']}
              tickMargin={16}
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
