import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: grid;
  padding: 0 0.25rem;
  grid-template-areas:
    'intro'
    'index-return'
    'index-change'
    'chart'
    'current-holdings'
    'historical-holdings';
  grid-template-columns: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    padding: 0 1rem;
    grid-template-columns: 50% 50%;
    grid-template-areas:
      'intro index-return'
      'intro index-change'
      'chart chart'
      'current-holdings current-holdings'
      'historical-holdings historical-holdings';
  }
`;
