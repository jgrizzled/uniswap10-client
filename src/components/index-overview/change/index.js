// 24hr index change

import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import Card from 'components/common/card.styled';
import Title from 'components/common/title.styled';
import Percent from 'components/common/percent';

export default function Change({ change }) {
  return (
    <Container>
      <Card>
        <Title>24h Change</Title>
        <Percent number={change} />
      </Card>
    </Container>
  );
}

const Container = styled.div`
  grid-area: index-change;
  text-align: center;
  span {
    font-size: 1.5rem;
  }
`;

Change.propTypes = {
  change: propTypes.number.isRequired
};
