import styled, { css } from 'styled-components';

interface containerProps {
    isErrorInput: boolean;
}
export const Container = styled.div<containerProps>`
    padding-top: 4rem;

    header {
        display: flex;
        flex-direction: column;
        align-items: center;

        > div {
            img {
                width: 8rem;
                height: 8rem;
            }
        }

        > main {
            span {
                color: #373737;
                font-family: IBM Plex Sans;
                font-size: 2.2rem;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
            }
        }

        footer {
            span {
                color: #000;
                text-align: center;
                font-family: IBM Plex Sans;
                font-size: 1rem;
                font-style: normal;
                font-weight: 300;
                line-height: normal;
            }
        }
    }

    > main {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        padding: 2rem;

        form {
            display: flex;
            flex-direction: column;
            gap: 0.7rem;
            padding: 1rem;

            label {
                position: relative;
                display: inline-block;
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
                border-radius: 4px;
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
            }

            span {
                margin-top: 0.5rem;
                width: 22rem;
                height: 0.06rem;
                background: linear-gradient(to right, #ff6489, #f9b24e), #acacac;
            }
        }
    }

    > footer {
        display: flex;
        justify-content: center;
        margin-top: -30px;

        button {
        display: flex;
        width: 22rem;
        justify-content: center;
        align-items: center;
        padding: 14px;
        gap: 0.6rem;
        border-radius: 2.6rem;

        text-align: center;
        font-family: Noto Sans;
        font-size: 1.1rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;

        border: 1px solid #fe7e02;
        background-color: #ffff;
        color: #fe7e02;
        }
    }

    .showPassword {
        background-color: transparent;
        border: none;
        position: absolute;
        top: 2rem;
        right: 0.8rem;
        transform: translateY(-50%);
    }

    @media (max-width: 388px) {
        header {
            display: flex;
            flex-direction: column;
            align-items: center;

            > header {
                img {
                }
            }

            > main {
                span {
                }
            }

            footer {
                span {
                }
            }
        }

        > main {
            width: 100%;
            padding: 4rem 1rem 4rem 1rem;

            form {
                label {
                    width: 100%;
                }

                > p {
                }

                > input:last-child {
                }

                input {
                    width: 22.6875rem;
                    height: 3.75rem;
                    flex-shrink: 0;
                    padding: 0.7847rem;
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

                    @media (max-width: 388px) {
                        width: 100%;
                    }
                }

                @media (max-width: 388px) {
                    width: 100%;
                }

                span {
                    margin-top: 1rem;
                    width: 22rem;
                    height: 0.06rem;
                    background: linear-gradient(to right, #ff6489, #f9b24e), #acacac;

                    @media (max-width: 388px) {
                        width: 100%;
                    }
                }
            }
        }

        > footer {
            button {
                @media (max-width: 388px) {
                    width: 19.4rem;
                    padding: calc(1rem / 2) calc(8rem / 2);
                    margin-top: -25px;
                }
            }
        }
    }
`;