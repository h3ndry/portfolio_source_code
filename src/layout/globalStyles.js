import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

/* Color variables */
:root {
--bg-color: #FAFAFA;
--pri-color: #cb3066;
--sec-color: #ef0078;
--white: #fff;
--black: #2e2e2e;
--grey: rgba(255, 255, 255, .8);

/* NOTE: Fonts family */
--display-font: 'Roboto', sans-serif;
}

/* BASIC RESET */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--bg-color);
  font-family: var(--display-font);
  font-weight: 400;
}

`

 // #ff5f6d; 



//Just testing a banch of colores I can use as a accent colore
// linear-gradient(
//     270deg,
//     #ff5f6d,
//     #ffc371,
//     #c34dbf,
//     #ff4b1f,
//     #ff9068,
//     #16bffd,
//     #a84dc3,
//     #cb3066,
//     #4ca1af,
//     #c4e0e5
//   );
