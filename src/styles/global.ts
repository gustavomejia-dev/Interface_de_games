import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;

    }
    body{
        background-color: black;
    }
    button{
        cursor: pointer;
        background: transparent;
        border: none;
    }
    ul, ol{
        list-style: none;
        padding: 0;
        margin: 0;
    }
    li{
        list-style: 0;
    }
    img{
        width: 360px;
        max-width: 100%;
        height: 150px;
        
    }
`

export const ColorsTheme = {
    colors: {
        white: "#FFFFFF",
        red: "#F55859",
        blue: "#0F81EC",
        gray15: "rgba(217,217,217, 0.15)",
        white20: "rgba(217, 217, 217, 0.15)",
        white50: "rgba(255, 255, 255, .5)",
        
    }
}
