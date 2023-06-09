import styled from "styled-components";

export const ManageAccountContainer = styled.main`
    width: 100%;
    max-width: 1120px;
    max-height: 550px;
    margin: 0 auto;
    padding: 2.5rem 1.5rem;
    height: 100vh;

    display: flex;
    justify-content: space-between;
`

export const FirstCollum = styled.div`
    img {
        margin-top: 5px;
        height: 400px;
        width: 500px;
        object-fit: cover;
        border-radius: 6px;
    }
`

export const LastCollum = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

export const NewAccountButton = styled.button`
        width: 400px;
        height: 75px;
        font-size: 20px;
        
        background-color: ${props => props.theme["green-500"]};
        color: ${props => props.theme["white"]};
        
        border: 0;
        font-weight: bold;
        padding: 0 1.25rem;
        border-radius: 6px;

        cursor: pointer;

        &:hover {
            background-color: ${props => props.theme["green-700"]};
            transition: background-color 0.2s;
        }
`