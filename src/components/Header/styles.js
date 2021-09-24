import styled from 'styled-components';
import {
    Link
} from "react-router-dom";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    background: #000;
    padding:0 50px;
    /* height: 70px; */
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width: 870px) {
        /* flex-direction: column; */
    }
`;

export const Logo = styled.img`
    height: 30px;
`;

// export const MenuIcon = styled.img`
//     height: 15px;
//     display: none;
//     @media only screen and (max-width: 870px) {
//         display: ${props => props.checked ? "none" : "block"};
//     }
// `;

// export const MenuIconClose = styled.img`
//     height: 15px;
//     position: absolute;
//     right: 30px;
//     top: 20px;
//     display: ${props => props.checked ? "flex" : "none"};
// `;

// export const Menu = styled.ul`
//     display: flex;
//     flex-direction: row;
//     list-style: none;

//     @media only screen and (max-width: 870px) {
//         display: ${props => props.checked ? "flex" : "none"};
//         flex-direction: column;
//         z-index: 99999;
//         height: -webkit-fill-available;
//         padding: 100px 0;
//         align-items: center;
//     }
// `;

export const ItemLink = styled(Link)`
    text-decoration: none;
    color: #fff;
`;

// export const ContainerMenu = styled.div`
//     display: flex;
//     @media only screen and (max-width: 870px) {
//         flex-direction: row;
//         justify-content:space-between;
//         align-items: center;
//         z-index: 99999;
//         width: 100%;
//     }
// `;
