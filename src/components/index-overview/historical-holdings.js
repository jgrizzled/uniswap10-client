import React from 'react';
import styled from 'styled-components';
import Card from 'styled-tags/card';
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

const Container = styled.div`
  display: grid;
  grid-area: 'historical-holdings';
`;

const Title = styled.h1`
  text-align: center;
`;

export default function CurrentHoldings(props) {
  const isNotMobile = useMedia('(max-width: 40em)');
  return (
    <Container>
      <Card>
        <Title>Historical Holdings</Title>
        <ResponsiveContainer aspect={isNotMobile ? 60 / 22 : 60 / 12}>
          <AreaChart data={props.data}>
            <CartesianGrid strokeDasharray='3 3' />
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
              domain={[0, 1]}
              tickMargin={16}
              orientation='left'
              axisLine={true}
              tickLine={false}
              interval='preserveStartEnd'
              tickFormatter={tick => tick * 100 + '%'}
              minTickGap={5}
            />
            <Tooltip />
            {Object.keys(props.data[0]).map(k => {
              if (k !== 'date') {
                const color = randomColor();
                return (
                  <Area
                    type='monotone'
                    dataKey={k}
                    stackId='1'
                    stroke={color}
                    fill={color}
                  />
                );
              }
            })}
          </AreaChart>
        </ResponsiveContainer>
      </Card>
    </Container>
  );
}
