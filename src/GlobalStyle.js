import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    @font-face {
        font-family: "saira";
        src: url("/fonts/Saira.ttf");
    }
    
    body{
        background: "ffffff";
        font-family: saira;
    }
`;

export default GlobalStyle;
