import styled from 'styled-components';

export const BurgerButton = styled.button`
  position: relative;
  top: 0.1rem;
  left: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: ${({ theme }) => theme.color.primaryLight};
  color: ${({ theme }) => theme.color.onPrimary};
  border: none;
  cursor: pointer;
  padding: 1.5rem;
  z-index: 10;
  font-size: 2rem;
  border-radius: 50%;

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    left: 2rem;
  }

  &:focus {
    outline: none;
  }
  svg {
    position: relative;
    left: -0.85rem;
  }
`;
