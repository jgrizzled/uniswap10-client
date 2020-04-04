import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Card from 'components/common/card.styled';
import Title from 'components/common/title.styled';

const Container = styled.div`
  display: flex;
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
    fieldset {
      display: flex;
      @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
        display: block;
      }
      border: 0;
      margin: 0.5rem;
      legend {
        font-weight: bold;
      }
      label {
        margin: 0.5rem;
        input[type='radio'] {
          margin-right: 0.75rem;
        }
      }
    }
    button[type='submit'] {
      margin: 1rem auto;
      border-radius: 5px;
      border: 0;
      background-color: ${({ theme }) => theme.color.primary};
      color: ${({ theme }) => theme.color.onPrimary};
      width: 50%;
      padding: 0.25rem;
      &:hover {
        background-color: ${({ theme }) => theme.color.primaryLight};
      }
    }
  }
`;

export default function Settings({ settings, setSettings }) {
  const history = useHistory();
  const [currency, setCurrency] = useState(settings.currency);
  const [rebalancePeriod, setRebalancePeriod] = useState(
    settings.rebalancePeriod
  );
  const [liquidityWeight, setLiquidityWeight] = useState(
    settings.liquidityWeight
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    setSettings({
      currency,
      rebalancePeriod,
      liquidityWeight,
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
                name='currency'
                value='eth'
                checked={currency === 'eth'}
                onChange={(e) => setCurrency(e.target.value)}
              />
              ETH&nbsp;
            </label>
            <label>
              <input
                type='radio'
                name='currency'
                value='usd'
                checked={currency === 'usd'}
                onChange={(e) => setCurrency(e.target.value)}
              />
              USD&nbsp;
            </label>
          </fieldset>
          <fieldset>
            <legend>Rebalance Period:&nbsp;</legend>
            <label>
              <input
                type='radio'
                name='rebalancePeriod'
                value='7'
                checked={rebalancePeriod === '7'}
                onChange={(e) => setRebalancePeriod(e.target.value)}
              />
              Weekly&nbsp;
            </label>
            <label>
              <input
                type='radio'
                name='rebalancePeriod'
                value='30'
                checked={rebalancePeriod === '30'}
                onChange={(e) => setRebalancePeriod(e.target.value)}
              />
              Monthly&nbsp;
            </label>
            <label>
              <input
                type='radio'
                name='rebalancePeriod'
                value='90'
                checked={rebalancePeriod === '90'}
                onChange={(e) => setRebalancePeriod(e.target.value)}
              />
              Quarterly&nbsp;
            </label>
          </fieldset>
          <fieldset>
            <legend>Asset Weighting:&nbsp;</legend>
            <label>
              <input
                type='radio'
                name='liquidityWeight'
                value='1'
                checked={liquidityWeight === '1'}
                onChange={(e) => setLiquidityWeight(e.target.value)}
              />
              Liquidity&nbsp;
            </label>
            <label>
              <input
                type='radio'
                name='liquidityWeight'
                value='0.5'
                checked={liquidityWeight === '0.5'}
                onChange={(e) => setLiquidityWeight(e.target.value)}
              />
              Liquidity and volume&nbsp;
            </label>
            <label>
              <input
                type='radio'
                name='liquidityWeight'
                value='0'
                checked={liquidityWeight === '0'}
                onChange={(e) => setLiquidityWeight(e.target.value)}
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
