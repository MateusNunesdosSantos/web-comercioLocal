import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 2rem;
    gap: 0.5rem;
`;

export const InputStyled = styled.input`
    border: none;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    border-radius: 8px;
    height: 28px;
    font-size: 24px;
    padding: 10px;
`;