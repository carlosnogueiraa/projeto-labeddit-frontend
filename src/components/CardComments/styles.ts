import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    width: 22rem;
    padding: 0.5rem 0.6rem;
    flex-direction: column;
    align-self: center;
    gap: 1.1rem;
    border-radius: 0.7rem;
    border: 1px solid #e0e0e0;
    justify-content: center;

    > header {
        background-color: transparent;

        > h2 {
            color: #6f6f6f;
            width: 10rem;
            text-align: start;
            font-family: IBM Plex Sans;
            font-size: 0.7rem;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
    }

    > main {
        span {
            width: 20rem;
            color: #000;
            font-family: IBM Plex Sans;
            font-size: 1.1rem;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
    }

    > footer {
        display: flex;
        gap: 0.5rem;

        div:last-child {
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
            width: 4.1rem;
        }

        div {
            display: flex;
            width: 6.1rem;
            height: 1.7rem;
            padding: 0.2rem;
            justify-content: space-between;
            align-items: center;
            flex-shrink: 0;
            border-radius: 1.7rem;
            border: 1px solid #ececec;

            span {
                color: #6f6f6f;
                text-align: center;
                font-family: IBM Plex Sans;
                font-size: 0.5rem;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
            }

            button {
                display: flex;
                width: 1.2rem;
                height: 1.2rem;
                flex-shrink: 0;
                align-items: center;
                border: none;
                background-color: transparent;

                img {
                    width: 1.2rem;
                    height: 1.2rem;
                }
            }
        }
    }

    @media (max-width: 330px) {
        width: 90%;

        > header {
            > h2 {
            }
        }

        > main {
            span {
            }
        }

        > footer {
            div:last-child {
            }

            div {
                span{
                }

                button {
                    img {
                        width: 1.2rem;
                        height: 1.2rem;
                    }
                }
            }
        }
    }
`