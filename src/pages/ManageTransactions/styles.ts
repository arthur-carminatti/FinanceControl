import styled from "styled-components";

export const TransactionsContainer = styled.main`
    width: 100%;
    max-width: 1120px;
    margin: 4rem auto 0;
    padding: 0 1.5rem;

    div {
        display: flex;
    }

    button {
        display: block;
        border: 1px solid red;
        width: 300px;
        height: 120px;
        margin-right: 40px;
        border: 0;
        background: ${props => props.theme['green-500']};
        color: ${props => props.theme['white']};
        font-weight: bold;
        padding: 0 1.25rem;
        border-radius: 8px;
        cursor: pointer;

        input {
            background-color: transparent;
        }
    } 
`