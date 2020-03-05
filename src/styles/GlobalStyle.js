import { createGlobalStyle } from 'styled-components';

// global app styles
export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden; 
    background-color: ${props => props.theme.color.background};
    font-family: ${props => props.theme.font.main};
    color: ${props => props.theme.color.onBackground};
  }

  body > div {
    height: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  a {
    color: ${props => props.theme.color.link};
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;
