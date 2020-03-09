import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Card from 'components/common/card.styled';
import Title from 'components/common/title.styled';

export default function Settings({ settings, setSettings }) {
  const history = useHistory();
  const [currency, setCurrency] = useState(settings.currency);
  const [rebalancePeriod, setRebalancePeriod] = useState(
    settings.rebalancePeriod
  );
  const [liquidityWeight, setLiquidityWeight] = useState(
    settings.liquidityWeight
  );
  const handleSubmit = e => {
    e.preventDefault();
    setSettings({
      currency,
      rebalancePeriod,
      liquidityWeight
    });
    history.push('/');
  };
  return (
    <Card>
      <Title>Settings</Title>
      <form onSubmit={handleSubmit}>
        <div>
          Currency:
          <input
            type='radio'
            name='currency'
            value='eth'
            checked={currency === 'eth'}
            onChange={e => setCurrency(e.target.value)}
          />
          ETH
          <input
            type='radio'
            name='currency'
            value='usd'
            checked={currency === 'usd'}
            onChange={e => setCurrency(e.target.value)}
          />
          USD
        </div>
        <div>
          Rebalance Period:
          <input
            type='radio'
            name='rebalancePeriod'
            value='7'
            checked={rebalancePeriod === '7'}
            onChange={e => setRebalancePeriod(e.target.value)}
          />
          Weekly
          <input
            type='radio'
            name='rebalancePeriod'
            value='30'
            checked={rebalancePeriod === '30'}
            onChange={e => setRebalancePeriod(e.target.value)}
          />{' '}
          Monthly
          <input
            type='radio'
            name='rebalancePeriod'
            value='90'
            checked={rebalancePeriod === '90'}
            onChange={e => setRebalancePeriod(e.target.value)}
          />
          Quarterly
        </div>
        <div>
          Asset Weighting:
          <input
            type='radio'
            name='liquidityWeight'
            value='1'
            checked={liquidityWeight === '1'}
            onChange={e => setLiquidityWeight(e.target.value)}
          />
          Liquidity
          <input
            type='radio'
            name='liquidityWeight'
            value='0.5'
            checked={liquidityWeight === '0.5'}
            onChange={e => setLiquidityWeight(e.target.value)}
          />
          Liquidity and volume
          <input
            type='radio'
            name='liquidityWeight'
            value='0'
            checked={liquidityWeight === '0'}
            onChange={e => setLiquidityWeight(e.target.value)}
          />
          Volume
        </div>
        <button type='submit'>Apply</button>
      </form>
    </Card>
  );
}
