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