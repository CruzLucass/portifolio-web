import styled from "styled-components";

export const Container = styled.div`
    padding: 100px;
    width: 100%;
    display: block;  
    align-items: center;
    justify-content: center;
    text-align:center;
`;

export const Title = styled.h1`
    font-family: 'Roboto';
    font-size: 70px;
    color: ${props => props.theme.colors.text}; 
`;

export const Subtitle = styled.h3`
    font-family: 'Roboto';
    font-size: 15px;
    color: #68B0AB; 
`;

export const Description = styled.label`
    font-family: 'Roboto';
    font-size: 20px;
    color: #68B0AB; 
`;  