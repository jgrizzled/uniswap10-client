import styled from 'styled-components';

export default styled.div`
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  overflow: auto;
  padding: 0.25rem;
  margin: 0.25rem;
  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    padding: 1rem;
    margin: 1rem;
  }
  background-color: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.onSurface};
`;
