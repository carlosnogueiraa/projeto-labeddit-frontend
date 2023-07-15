import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    header {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: center;
        justify-items: center;
        background: #ededed;
        
        img {
            width: 5.2rem;
            height: 5.2rem;
            grid-column: 2/3;
        }

        button {
            color: #4088cb;
            text-align: center;
            font-family: Noto Sans;
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            border: none;
            text-transform: capitalize;
            background-color: transparent;

            &:active {
                transform: scale(0.9);
            }
        }
    }

    @media (max-width: 320px) {
        header {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
    }
`