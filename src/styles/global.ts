import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "IBM Plex Sans", sans-serif;

        button {
            cursor: pointer;

            &:hover {
                opacity: 80%;
                transition: 0.3s;
            }
        }

        a {
            text-decoration: none;
            color: inherit;
        }
    }
`