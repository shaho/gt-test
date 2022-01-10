import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
    html {
      font-size: 16px;
    }
    body {
      overflow-x: hidden;
      font-size: 1rem;
      line-height: 1.5;
      margin: 0;
      padding: 0;
      font-family: "Open Sans", sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-color: #e5e5e5;
      color: #525252;
    }
    img {
      max-width: 100%;
    }
    ul,
    li {
      padding: 0;
      list-style: none;
    }
    a {
      color: #009688;
      text-decoration: none;
      &:hover {
        color: #26a69a;
      }
    }
    * {
      box-sizing: border-box;
    }
    #root {
      width: 100%;
      float: left;
      overflow: hidden;
    }
    @keyframes loading {
      0% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0 50%;
      }
    }
    .container{
        margin: 0 auto;
        width: 100%;
        max-width: 1240px;
        display: flex;
    }
    h1{
      color:#6F6F6F;
      font-size: 20px;
      line-height: 26px;
      font-weight: 500;
      padding: 0;
      margin: 0;
    }
    main,aside{
      display: block;
    }
    .col{
      width: 100%;
      padding: 0 8px;
    }
    .col-3{
      @media (min-width: 999px) {
        width: 25%;
      }
    }
    .col-6{
      @media (min-width: 999px) {
        width: 50%;
      }
    }
    .box{
      width: 100%;
      border-radius: 2px;
      background-color: white;
      padding:16px 20px;
      display: block;
      box-shadow: 0 4px 24px rgba(93,62,188,0.04);
    }
`;
export default GlobalStyle;
