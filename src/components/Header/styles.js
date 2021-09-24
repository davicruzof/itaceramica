import styled from 'styled-components';
import {
    Link
} from "react-router-dom";

export const Container = styled.div`
    background: #000;
    padding:5px 50px;
`;

export const Logo = styled.img`
    height: 30px;
`;

export const ItemLink = styled(Link)`
    text-decoration: none;
    color: #fff;
`;
