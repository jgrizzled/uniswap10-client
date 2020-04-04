import React from 'react';
import styled from 'styled-components';
import Card from 'components/common/card.styled';
import Title from 'components/common/title.styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.5rem;
  font-size: 1.5rem;
  ul {
    padding: 0;
    li {
      margin-bottom: 0.5rem;
    }
  }
`;

export default function Contact() {
  return (
    <Card>
      <Title>Contact</Title>
      <Container>
        Made by Justin Greene
        <ul>
          <li>
            <a
              href='https://jgrizzled.github.io/portfolio'
              target='_blank'
              rel='noopener noreferrer'
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href='https://github.com/jgrizzled'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github
            </a>
          </li>
          <li>
            <a
              href='mailto:justin.greene5@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              Email
            </a>
          </li>
        </ul>
      </Container>
    </Card>
  );
}
