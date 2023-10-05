import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	*{
    padding: 0;
    font-family: 'Noto Sans KR', sans-serif;
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    font-size: 14px;
    background-color: #fff;
  }
`

export default GlobalStyles;