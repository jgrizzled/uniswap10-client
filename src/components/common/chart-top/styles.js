import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 1rem 0.5rem 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.5rem;
  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    flex-direction: row;
  }
`;
