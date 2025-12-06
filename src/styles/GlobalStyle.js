import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }     

    body {
        max-width: 1440px;
        width: 100%;
        height: 100vh;
        background-color: #FFFFFF;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, ".SFNSText-Regular", sans-serif;
    }

    /* 링크 기본값 */
    a {
        color: inherit;
        text-decoration: none;
    }
`