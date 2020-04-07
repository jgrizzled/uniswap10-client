import styled from 'styled-components';

export const StyledMenu = styled.nav`
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.primaryLight};
  height: 100vh;
  width: 100vw;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 1;

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 20rem;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    text-decoration: none;
    transition: color 0.3s linear;
    color: ${({ theme }) => theme.color.onPrimary};

    @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
      font-size: 1.5rem;
      text-align: center;
    }
  }
`;
