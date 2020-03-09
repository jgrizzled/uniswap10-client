import React from 'react';
import styled from 'styled-components';
import Card from 'components/common/card.styled';
import Title from 'components/common/title.styled';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Contact() {
  return (
    <Card>
      <Title>Contact</Title>
      <Container>
        <p>
          Made by Justin Greene
          <ul>
            <li>
              <a href='https://jgrizzled.github.io/portfolio'>Portfolio</a>
            </li>
            <li>
              <a href='https://github.com/jgrizzled' target='_blank'>
                Github
              </a>
            </li>
            <li>
              <a href='mailto:justin.greene5@gmail.com' target='_blank'>
                Email
              </a>
            </li>
          </ul>
        </p>
      </Container>
    </Card>
  );
}
