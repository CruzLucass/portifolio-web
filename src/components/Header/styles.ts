import styled from "styled-components";

export const Container = styled.div`
    height:60px;
    background:${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text}; 
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
`;

export const Logo = styled.h1`
    font-family: 'Roboto';
    font-size: 24px;
    color: ${props => props.theme.colors.text}; 
`;

export const ContainerMenu = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

export const ItemMenu = styled.a`
    font-family: 'Roboto';
    font-size: 16px;
    color: ${props => props.theme.colors.text};
    padding: 30px;
    text-decoration: none;
    :hover{
        background-color: ${props => props.theme.colors.background}
    }
`;