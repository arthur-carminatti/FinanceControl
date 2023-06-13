import styled from "styled-components";

export const TransactionsContainer = styled.main`
    width: 100%;
    max-width: 500px;
    margin: 4rem auto 0;
    padding: 0 1.5rem;
    align-items: center;
    justify-content: center;

    div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 25px;
    }

    label {
        flex-direction: column;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 50px;
        gap: 4px;
        text-transform: uppercase;
    }

    input {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    button {
        width: 100%;
        height: 50px;
        border: 0;
        align-items: center;
        justify-content: center;
        background: ${props => props.theme['green-500']};
        color: ${props => props.theme['white']};
        font-weight: bold;
        padding: 0 1.25rem;
        border-radius: 8px;
        cursor: pointer;
        transition: 0.2s;

        &:hover {
            background: ${props => props.theme['green-700']};
        }
    } 
`

export const RadioContainer = styled.div`
    position: relative;
    width: 50px;
    height: 50px;
    margin-right: 4px;
`;

export const RadioInput = styled.input`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
`;

export const RadioSquare = styled.div<{ checked: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => (props.checked
        ? props.theme["green-300"]
        : props.theme["gray-100"])
    };
    border: 1px solid ${(props) => props.theme["gray-900"]};
    border-radius: 20%;
    transition: 0.2s;

    &:hover {
        background-color: ${(props) => (props.checked
            ? props.theme["green-300"]
            : props.theme["green-500"])
        };
    }
`;