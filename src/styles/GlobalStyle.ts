import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Inter", sans-serif;

        background-color: ${({theme}) =>
                theme.colors.background};

        color: ${({theme}) =>
                theme.colors.text};

        line-height: 1.5;

        min-width: 375px;

        transition:
                background-color .25s ease,
                color .25s ease;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        font-family: inherit;
    }

    html {
        overflow-y: scroll;
        scrollbar-gutter: stable;
    }

    html, body {
        min-width: 375px;
        overflow-x: hidden;
    }


    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background: #0f172a;
    }

    ::-webkit-scrollbar-thumb {
        background: #334155;

        border-radius: 20px;
    }
`;