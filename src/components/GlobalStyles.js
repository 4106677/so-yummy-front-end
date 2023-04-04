import { createGlobalStyle } from 'styled-components';
import modernNormalize from 'modern-normalize';
import Poppins700 from '../Fonts/Poppins/Poppins-Bold.ttf';
import Poppins600 from '../Fonts/Poppins/Poppins-SemiBold.ttf';
import Poppins500 from '../Fonts/Poppins/Poppins-Medium.ttf';
import Poppins400 from '../Fonts/Poppins/Poppins-Regular.ttf';

export const GlobalStyle = createGlobalStyle`
@font-face {
font-family: 'Poppins';
      src: url(${Poppins400}), url(${Poppins500}), url(${Poppins600}), url(${Poppins700});
    }

  body {
  margin: 0;
    padding: 0;
 font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

   background-color: #FAFAFA;
      color: rgb(1,67,97);
      -webkit-tap-highlight-color: transparent;
}
${modernNormalize}

code {
 font-family: 'Poppins', sans-serif;
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
