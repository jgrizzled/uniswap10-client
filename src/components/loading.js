import styled from 'styled-components';
import React from 'react';

const Container = styled.h2`
  position: relative;
  &::after {
    position: absolute;
    overflow: hidden;
    display: inline-block;
    vertical-align: bottom;
    text-align: left;
    animation: ellipsis steps(4, end) 2000ms infinite;
    content: '...';
    width: 0px;
  }

  @keyframes ellipsis {
    to {
      width: 1.25em;
    }
  }

  margin: 2rem auto;
  text-align: center;
  font-weight: normal;
  color: ${({ theme }) => theme.color.onBackground};
`;

export default function Loading() {
  return <Container>Loading</Container>;
}
