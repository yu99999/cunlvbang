import {createGlobalStyle} from "styled-components"
import style from "./assets/global-style"

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    color: #333;
  }
  html{
    height: 100%;
    background-color: #F8F8F8;
    font-size: 0.266666666666666667vw;

    @media (min-width: 900px){
      font-size: 0.18vw;
    }
    @media (min-width: 1350px){
      font-size: 0.11vw;
    }

    body{
      background-color: #F8F8F8;
      height: 100%;
      font-size: ${style["font-size-m"]};
    }
  }
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  button{
    outline: none;
    border: none;
    display: block;
  }
  input{
    outline: none;
    border: none;
  }
  textarea{
    outline: none;
    border: none;
    resize: none;
    width: 100%;
    background-color: transparent;
    letter-spacing: 0.5px;
  }
`