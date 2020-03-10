import styled from 'styled-components';

export default styled.div`
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 1rem;
  margin: 1rem;
  background-color: ${props => props.theme.color.surface};
  color: ${props => props.theme.color.onSurface};
`;
