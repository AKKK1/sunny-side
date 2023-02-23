import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/* *{
    outline: 1px solid red !important;
} */
:root{
    --Dark-cyan: hsl(158, 36%, 37%);
--Cream: hsl(30, 38%, 92%);
--Very-dark-blue: hsl(212, 21%, 14%);
--Dark-grayish-blue: hsl(228, 12%, 48%);
--White: hsl(0, 0%, 100%);
}
*,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    font-family: 'Montserrat', sans-serif;
    font-family: 'Fraunces', serif;
  font-size: 14px; 
    overflow-x: hidden;
    background-color: var(--Cream);
   display: flex; 
    align-items: center;
    justify-content: center; 
    height: 100vh;
    width: 100%;
    color: black;
    gap: 20px; 
}
h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}
a{
    color:inherit;
    text-decoration: none;
}
input, button, textarea, select {
  font: inherit;
}
button{
    outline: none;
    border: none;
    background: none;
    font-family: inherit;
    font-size: inherit;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
}
`;

export default GlobalStyles;
