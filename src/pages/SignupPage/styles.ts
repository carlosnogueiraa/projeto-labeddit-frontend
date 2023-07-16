import styled, { css } from 'styled-components';

interface containerProps {
    isErrorInput: boolean;
}

export const Container = styled.div<containerProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 2rem;
    margin-top: 2rem;

    > header {
        display: flex;
        align-items: flex-start;
        margin-top: 2rem;
        margin-bottom: 2rem;

        h2 {
            align-self: flex-start;
            width: 22rem;
            font-size: 1.8rem;

            @media (max-width: 370px) {
                width: 100%;
            }
        }
    }

    > main { 
        form {
            display: flex;
            flex-direction: column;
            gap: 0.7rem;
            padding: 1rem;
            align-items: center;
            margin-top: 2rem;
            margin-bottom: 2rem;

            > label {
                position: relative;
                display: inline-block;

                div {
                    margin: 1rem 0;
                }

                @media (max-width: 380px) {
                    width: 100%;
                }
            }

            > div {
                margin-top: 2rem;
                margin-bottom: 2rem;
                width: 23rem;

                @media (max-width: 360px) {
                    width: 100%;
                    margin: 0;
                }

                > span {
                    display: block;
                    margin-bottom: 1rem;

                    a {
                        cursor: pointer;
                        color: #0000EE;
                    }
                }

                > label:last-child {
                    display: flex;
                    align-items: center;
                    gap: 1rem;

                    > input {
                        width: 1.1rem;
                        height: 1.1rem;
                        flex-shrink: 0;
                    }
                }
            }

            p {
                color: red;
                font-weight: 500;
                margin-top: 0.5rem;
            }

            > input:last-child {
                padding-right: 2.5rem;
            }

            input {
                width: 22rem;
                height: 3.7rem;
                flex-shrink: 0;
                padding: 0.7rem;
                ${({ isErrorInput }) => isErrorInput 
                ? 
                    css`
                        border: 1px solid red;
                    `
                : 
                    css`
                        border: 1px solid #D5D8DE;
                    `
                }

                @media (max-width: 380px) {
                    width: 100%;
                }
            }
        }
    }

    @media (max-width: 603px) {
        span {
            width: 100%;
            margin: 0;
        }
    }
`;