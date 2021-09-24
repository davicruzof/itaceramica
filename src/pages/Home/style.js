import styled from 'styled-components';

export const Container = styled.div`
    width: -webkit-fill-available;
`;

export const CardList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

export const Card = styled.div`
    width: 250px;
    height: 450px;
    background: #fff;
    border-radius: 4px;
    margin-right: 25px;
    margin-top: 50px;
    padding: 30px 0;
    @media only screen and (max-width: 870px) {
        width: 45%;
        margin-right: 2%;
    }
`;

export const ContainerDestaque = styled.div`
    display: flex;
    flex-direction: row;
    @media only screen and (max-width: 870px) {
        flex-direction: column;
    }
    @media only screen and (min-width: 1400px) {
        margin-top: 100px;
    }
`;

export const CardDestaque = styled.div`
    width: 45%;
    height: 310px;
    background: #fff;
    border-radius: 4px;
    margin-right: 2%;
    margin-top: 50px;
    padding: 30px 50px;
    flex-direction: row;
    display: flex;
    align-items: center;
    @media only screen and (max-width: 870px) {
        padding: 0;
        padding-right: 30px;
        margin-top: 0;
        width: -webkit-fill-available;
    }
`;

export const ProdutoImgDestaque = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
`;


export const Click = styled.a``;

export const ProdutoImg = styled.img`
    width: 100%;
    height: 150px;
    object-fit: contain;
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
    font-size: 18px;
    font-weight: bold;
    padding-top: 10px;
    margin-bottom: 10px;
    overflow: hidden; // Removendo barra de rolagem
    text-overflow: ellipsis; // Adicionando "..." ao final
    display: -webkit-box;
    -webkit-line-clamp: 2; // Quantidade de linhas
    -webkit-box-orient: vertical;
`;

export const PrecoCard = styled.span`
    font-size: 1.5rem;
    font-weight: 600;
`;

export const PrecoAntigoCard = styled.span`
    color: rgb(140, 140, 140);
    font-size: 0.9em;
`;

export const PrecoCartaoCard = styled.span`
    color: rgb(64, 64, 64);
    font-size: 0.9em;
    line-height: 1.3;
`;