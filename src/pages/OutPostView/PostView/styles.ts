import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        gap: 1rem;

        span {
                margin: 1rem 0 -2rem 0;
                width: 22rem;
                height: 0.06rem;
                background: linear-gradient(to right, #ff6489, #f9b24e), #acacac;
            }

        textarea {
            width: 22rem;
            height: 8rem;
            flex-shrink: 0;
            border-radius: 0.7rem;
            background: #ededed;
            padding: 1rem;
        }
    }

    > section {
        display: flex;
        flex-direction: column-reverse;
        gap: 0.6rem;
        margin-top: 1rem;
    }

    @media (max-width: 330px) {
        form {
            textarea {
                width: 100%;
            }
        }
    }
`