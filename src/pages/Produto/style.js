import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background: #fff;
    border-radius: 4px;
    margin-right: 2%;
    margin-top: 50px;
    padding: 30px 50px;
    flex-direction: row;
    display: flex;
    align-items: center;
    @media only screen and (max-width: 870px) {
        margin-top: 0;
        width: -webkit-fill-available;
        flex-direction:column;
        padding: 30px;
    }
`;

export const ProdutoImgDestaque = styled.img`
    width: 40%;
    height: auto;
    object-fit: contain;
    @media only screen and (max-width: 870px) {
        width: 90%;
        margin: 50px 0;
    }
`;


export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 25px;
    @media only screen and (max-width: 870px) {
        padding: 10px;
    }
`;

export const TitleCard = styled.span`
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 5px;
    overflow: hidden; // Removendo barra de rolagem
    text-overflow: ellipsis; // Adicionando "..." ao final
    display: -webkit-box;
    -webkit-line-clamp: 2; // Quantidade de linhas
    -webkit-box-orient: vertical;
`;

export const SubTitleCard = styled.span`
    font-size: 1rem;
    font-weight: bold;
    overflow: hidden; // Removendo barra de rolagem
    text-overflow: ellipsis; // Adicionando "..." ao final
    display: -webkit-box;
    -webkit-line-clamp: 2; // Quantidade de linhas
    -webkit-box-orient: vertical;
`;

export const PrecoCard = styled.span`
    font-size: 2.0rem;
    font-weight: 600;
`;

export const PrecoAntigoCard = styled.span`
    color: rgb(140, 140, 140);
    font-size: 1em;
`;

export const PrecoCartaoCard = styled.span`
    color: rgb(64, 64, 64);
    font-size: 1.0em;
    line-height: 1.3;
`;

export const Description = styled.p`
    margin-top: 30px;
    text-align: justify;
`;

export const Voltar = styled.a`
    color: #000;
    font-weight: bold;
    position: absolute;
    top: 100px;
    @media only screen and (max-width: 870px) {
        left: 40px;
    }
`;