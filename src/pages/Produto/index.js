import React from 'react'
import { 
    Container,
    ContainerInfo,
    Description,
    PrecoAntigoCard,
    PrecoCard,
    PrecoCartaoCard,
    ProdutoImgDestaque,
    SubTitleCard,
    TitleCard
} from './style';
import {
    useParams
  } from "react-router-dom";

export default function Produto() {

    let { id } = useParams();

    const produtos = [
        {
            nome: "Areia Média",
            preco: "69,90",
            novoPreco: '59,90',
            precoCartao: '65,90',
            img: "../assets/areia.jpg",
            descricao: "Areia media ensacada 20Kg AB",
            tipo: "Alvenaria"
        },
        {
            nome: "Bloco Estrutural",
            preco: "3,90",
            novoPreco: '3,19',
            precoCartao: '3,59',
            img: "../assets/bloco-estrutural.jpg",
            descricao: "1/2 Bloco 19x19x19cm estrutural sem fundo Ramos",
            tipo: "Alvenaria"
        },
        {
            nome: "Cimento CPII",
            preco: "92,90",
            novoPreco: '89,90',
            precoCartao: '91,59',
            img: "../assets/cimento.jpg",
            descricao: "Cimento Votoran Todas as Obras 50kgs CPII Z 32R",
            tipo: "Alvenaria"
        },
        {
            nome: "Cola Azuleijo",
            preco: "32,90",
            novoPreco: '29,90',
            precoCartao: '31,90',
            img: "../assets/cola-azuleijo.jpg",
            descricao: "Cola para azulejo e pastilha Massapac balde 5Kg Pulvitec",
            tipo: "Revestimento"
        },
        {
            nome: "Lajota",
            preco: "192,90",
            novoPreco: '189,90',
            precoCartao: '191,59',
            img: "../assets/lajota.jpg",
            descricao: "Lajota Conquista 09x19x19cm Vermelho",
            tipo: "ALvenaria"
        },
        {
            nome: "Revestimento Brilhante",
            preco: "42,90",
            novoPreco: '39,90',
            precoCartao: '41,59',
            img: "../assets/piso-brilhante.jpg",
            descricao: "Piso Brilhante Le Blanc Esmaltado 43x43cm (Caixa c/ 2,06m²) Bold Ceral",
            tipo: "Revestimento"
        },
        {
            nome: "Revestimento Brilhante",
            preco: "22,90",
            novoPreco: '19,90',
            precoCartao: '21,59',
            img: "../assets/revestimento-bold.jpg",
            descricao: "Revestimento de parede bold 33x57cm HD 57807 Triunfo",
            tipo: "Revestimento"
        },
        {
            nome: "Telha de Fibrocimento",
            preco: "16,90",
            novoPreco: '14,90',
            precoCartao: '15,59',
            img: "../assets/telha-fibro.jpg",
            descricao: "Telha Brasiat Ondulada de Fibrocimento 244x110cm 6mm Cinza",
            tipo: "Alvenaria"
        },
        {
            nome: "Tinta Coral",
            preco: "116,90",
            novoPreco: '114,90',
            precoCartao: '115,59',
            img: "../assets/tinta.jpg",
            descricao: "Tinta Coral Coralar Econômica Acríaca Fosca Branco 18 atros",
            tipo: "Alvenaria"
        },
        {
            nome: "Grella Ondulada",
            preco: "6,90",
            novoPreco: '4,90',
            precoCartao: '5,59',
            img: "../assets/grela.jpg",
            descricao: "Grela em Abd para banheiro",
            tipo: "Hidraúlica"
        },
        {
            nome: "Chuveiro Rtx",
            preco: "76,90",
            novoPreco: '74,90',
            precoCartao: '75,59',
            img: "../assets/chuveiro.jpg",
            descricao: "Chuveiro Eletrico RTX",
            tipo: "Hidraúlica"
        },
        {
            nome: "Torneira Rtx",
            preco: "26,90",
            novoPreco: '24,90',
            precoCartao: '25,59',
            img: "../assets/torneira.jpg",
            descricao: "Torneira aquecida Hydra",
            tipo: "Hidraúlica"
        },
        {
            nome: "Argamassa",
            preco: "36,90",
            novoPreco: '34,90',
            precoCartao: '35,59',
            img: "../assets/argamassa.jpg",
            descricao: "Argamassa Fortazela para porcelanato",
            tipo: "Alvenaria"
        },
        {
            nome: "Torneira LEX",
            preco: "86,90",
            novoPreco: '84,90',
            precoCartao: '85,59',
            img: "../assets/torneira2.jpg",
            descricao: "Torneira aquecida LEX",
            tipo: "Hidraúlica"
        }
    ];
    
    const item = produtos[id];


    const formartParcelamento = (valor) => {
        let v = +valor.replace(',','.');
        return v > 200 ? "10x de " + ((v/10).toFixed(2).replace('.',',')) 
        : "3x de " + ((v/3).toFixed(2)).replace('.',',');
    }

    return (
        <Container>
            <ProdutoImgDestaque src={item.img} alt={item.nome}/>
            <ContainerInfo>
                <TitleCard>{item.nome}</TitleCard>
                <SubTitleCard>{item.descricao}</SubTitleCard>
                <PrecoAntigoCard>de R$ {item.preco}</PrecoAntigoCard>
                <PrecoCard>R$ {item.novoPreco}</PrecoCard>
                <PrecoCartaoCard>ou R$ {item.precoCartao}</PrecoCartaoCard>
                <PrecoCartaoCard>{formartParcelamento(item.precoCartao)} sem juros</PrecoCartaoCard>
                <Description>
                    Aliquip dolor incididunt dolor laborum deserunt id proident sint aliqua velit veniam. 
                Do laborum laboris do incididunt sit adipisicing sit. Ut velit aute aliqua dolor. 
                Ex elit eiusmod qui sit commodo ipsum ullamco aute ullamco. Lorem consequat aliquip 
                officia esse ad consequat mollit culpa consectetur do consectetur commodo duis.Qui 
                cillum ea quis tempor tempor est pariatur ex nulla. Ullamco commodo enim deserunt 
                labore duis mollit. Aute officia officia officia qui anim labore ut id. Do ut veniam 
                pariatur est nisi est.Non occaecat deserunt Lorem consectetur pariatur qui mollit magna 
                culpa minim nostrud. Eu Lorem laboris deserunt aute veniam anim officia sunt velit velit 
                nulla officia. Commodo reprehenderit nostrud adipisicing amet.
                </Description>
            </ContainerInfo>
        </Container>
    )
}
