import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;

    padding: 0;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

   background-color: #FAFAFA;
      color: rgb(1,67,97);
      -webkit-tap-highlight-color: transparent;
}

code {
  font-family: 'Poppins', source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

ul {
  list-style: none;
   margin: 0;
    padding: 0;
}

 a {
    text-decoration: none;
   }

  h1, h2, h3, h4, h5, h6, p, button {
    margin: 0;
    padding: 0;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;
