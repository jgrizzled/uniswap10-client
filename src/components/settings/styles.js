import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
    fieldset {
      display: flex;
      @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
        display: block;
      }
      border: 0;
      margin: 0.5rem;
      legend {
        font-weight: bold;
      }
      label {
        margin: 0.5rem;
        input[type='radio'] {
          margin-right: 0.75rem;
        }
      }
    }
    button[type='submit'] {
      margin: 1rem auto;
      border-radius: 5px;
      border: 0;
      background-color: ${({ theme }) => theme.color.primary};
      color: ${({ theme }) => theme.color.onPrimary};
      width: 50%;
      padding: 0.25rem;
      &:hover {
        background-color: ${({ theme }) => theme.color.primaryLight};
      }
    }
  }
`;
