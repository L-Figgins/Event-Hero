import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    
  }
  body {
    height: 100%;
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    background: #141414;
    font-family: 'Muli', Helvetica, Arial, sans-serif;
  }
  body.jsFontLoaded{
    font-family: 'Muli', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    line-height: 1.5em;
  }

  body::-webkit-scrollbar {
    width: .25em;
  }
  
  body::-webkit-scrollbar-track {
      background-color: #161616;
  }
  
  body::-webkit-scrollbar-thumb {
    background-color: #7f7e77;
    outline: 1px solid slategrey;
  }
`;

export default GlobalStyle;
