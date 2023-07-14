import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    width: 22rem;
    padding: 1rem 8rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border: none;
    border-radius: 27px;
    text-align: center;
    font-family: Noto Sans;
    font-size: 1.1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    background: linear-gradient(to right, #ff6489, #f9b24e);
    color: #fff;

    .custom-loader {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 60%;
        background: conic-gradient(#0000 10%, #f2f4e8);
        -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 5px), #000 0);
        animation: s3 1s infinite linear;
    }

    @keyframes s3 {
        to {
            transform: rotate(1turn);
        }
    }

    @media (max-width: 388px) {
        width: 100%;
        padding: calc(1rem / 2) calc(8rem / 2);
    }
`