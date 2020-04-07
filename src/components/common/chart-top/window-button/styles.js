import styled from 'styled-components';

export const RadioInput = styled.input.attrs(({ checked }) => ({
  type: 'radio',
  checked,
}))`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  pointer-events: none;
`;

export const RadioLabel = styled.label`
  position: relative;
  span {
    cursor: pointer;
  }
  ${({ checked }) =>
    checked
      ? `
      span {
        font-weight: bold;
      }`
      : `
      span:hover {
        text-decoration: underline;
      }`}
  &:not(:first-of-type)::before {
    content: ' | ';
  }
`;
