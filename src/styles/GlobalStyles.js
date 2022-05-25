import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *{
    margin:0 ;
    padding:0;
    box-sizing:border-box ;
  }

  *,input,button{
    border: none;
    outline: none ;
    font-family: 'Josefin Sans', sans-serif;
  }

  html,body,#root{
    height: 100vh ;
    background: #1D1D1D;

  }
` 