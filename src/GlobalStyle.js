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
        .main-container{

            padding-left: 4rem;
        }
        background: "ffffff";
        font-family: saira;
        a{
            text-decoration: none;
        }
        input:focus {
	outline: none;
}
#user-bg {
    pointer-events: none;
    z-index: -1;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    object-fit: cover;
  }
    }

::selection{
  background: #7a7a7a83;
  color: #ffffff;
}

::-webkit-scrollbar {
  width: 0.4rem;
}
::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #7a7a7a83;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #b3b3b383;
}

::-webkit-scrollbar-corner{
    background: transparent;
}
`;

export default GlobalStyle;
