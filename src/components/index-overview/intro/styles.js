import styled from 'styled-components';

export const Container = styled.div`
  grid-area: intro;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-evenly;
  padding: 0 3rem;
  h2 {
    margin-bottom: 0.5rem;
  }
  div {
    margin-bottom: 2rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    text-align: left;
  }
`;
