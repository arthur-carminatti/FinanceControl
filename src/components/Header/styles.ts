import styled from "styled-components";

export const HeaderContainer = styled.header`
    background: ${props => props.theme["gray-900"]};
    padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
    width: 100%;
    height: 50px;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        color: white;
        text-decoration: none;
    }

    span {
        color: ${props => props.theme["green-300"]};
    }

    nav a {
        justify-content: flex-end;
        font-size: 20px;
        color: white;
        text-decoration: none;
        margin: 20px;
        transition: 0.2s;
    }

    nav a:hover {
        color: ${props => props.theme["green-300"]};
    }
`

export const NewTransactionButton = styled.button`
    height: 50px;
    border: 0;

    background-color: ${props => props.theme["green-500"]};
    color: ${props => props.theme["white"]};

    font-weight: bold;
    padding: 0 1.25rem;
    border-radius: 6px;

    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme["green-700"]};
        transition: background-color 0.2s;
    }
`