import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  z-index: 2;
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.onPrimary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  /*
    Fluid typography formula
    min(calc(minFnt px + (maxFnt - minFnt) * (100vw - minScr px) / (maxScr - minScr), maxFnt px);
  */
  font-size: min(calc(8px + (16 - 8) * (100vw - 320px) / (800 - 320)), 16px);
  padding: 1em 0.2em 10em 0.2em;
  h1 {
    border: 5px solid ${({ theme }) => theme.color.onPrimary};
    font-size: 4em;
    padding: 0.5em 1em;
    margin: 0.5em;
  }
  h2 {
    font-size: 1.8em;
  }
  button {
    font-size: 1.7em;
    background-color: ${({ theme }) => theme.color.onPrimary};
    color: ${({ theme }) => theme.color.primary};
    border: 2px solid ${({ theme }) => theme.color.primary};
    border-radius: 10px;
    padding: 1em 3em;
    letter-spacing: 0.1em;
    font-weight: bold;
    &:hover {
      background-color: inherit;
      border: 2px solid ${({ theme }) => theme.color.onPrimary};
      color: ${({ theme }) => theme.color.onPrimary};
    }
  }
`;
