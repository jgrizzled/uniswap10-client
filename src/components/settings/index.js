// index settings form

import React, { useState } from 'react';
import propTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import Card from 'components/common/card.styled';
import Title from 'components/common/title.styled';
import { Container } from './styles';

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
    history.push('/#chart');
  };
  return (
    <Card>
      <Title>Settings</Title>
      <Container>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Currency:&nbsp;</legend>
            <label>
              <input
                type='radio'
                checked={currency === 'eth'}
                onChange={() => setCurrency('eth')}
              />
              ETH&nbsp;
            </label>
            <label>
              <input
                type='radio'
                checked={currency === 'usd'}
                onChange={() => setCurrency('usd')}
              />
              USD&nbsp;
            </label>
          </fieldset>
          <fieldset>
            <legend>Rebalance Period:&nbsp;</legend>
            <label>
              <input
                type='radio'
                checked={rebalancePeriod === 1}
                onChange={e => setRebalancePeriod(1)}
              />
              Daily&nbsp;
            </label>
            <label>
              <input
                type='radio'
                checked={rebalancePeriod === 7}
                onChange={e => setRebalancePeriod(7)}
              />
              Weekly&nbsp;
            </label>
            <label>
              <input
                type='radio'
                checked={rebalancePeriod === 30}
                onChange={e => setRebalancePeriod(30)}
              />
              Monthly&nbsp;
            </label>
            <label>
              <input
                type='radio'
                checked={rebalancePeriod === 90}
                onChange={e => setRebalancePeriod(90)}
              />
              Quarterly&nbsp;
            </label>
          </fieldset>
          <fieldset>
            <legend>Asset Weighting:&nbsp;</legend>
            <label>
              <input
                type='radio'
                checked={liquidityWeight === 1}
                onChange={e => setLiquidityWeight(1)}
              />
              Liquidity&nbsp;
            </label>
            <label>
              <input
                type='radio'
                checked={liquidityWeight === 0.5}
                onChange={e => setLiquidityWeight(0.5)}
              />
              Liquidity and volume&nbsp;
            </label>
            <label>
              <input
                type='radio'
                checked={liquidityWeight === 0}
                onChange={e => setLiquidityWeight(0)}
              />
              Volume&nbsp;
            </label>
          </fieldset>
          <button type='submit'>Apply</button>
        </form>
      </Container>
    </Card>
  );
}

Settings.propTypes = {
  settings: propTypes.shape({
    currency: propTypes.string.isRequired,
    rebalancePeriod: propTypes.number.isRequired,
    liquidityWeight: propTypes.number.isRequired
  }).isRequired,
  setSettings: propTypes.func.isRequired
};
