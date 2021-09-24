import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    padding-bottom: 30px;
`;

export const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    width: 50%;
    @media only screen and (max-width: 870px) {
        width: 80%;
    }
    @media only screen and (min-width: 1400px) {
        width: 30%;
    }
`;

export const TextArea = styled.textarea`
    border-radius: 4px;
    background: transparent;
    border: 1px solid #818181;
    padding-left: 15px;
    margin-bottom: 10px;
    padding-top: 10px;
`;

export const Label = styled.label`
    font-size:14px;
    color: #555;
`;

export const Botao = styled.input`
    width: 100%;
    height: 45px;
    background: var(--color-primary);
    color: #fff;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    padding-left: 0;
    margin-top: 30px;
`;

export const Title = styled.span`
    text-align: center;
    width: 100%;
    font-size: 24px;
    margin-top: 50px;
`;
