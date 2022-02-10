import styled from "styled-components";


export const Container = styled.div`
    padding: 100px;
    width: 100%;
    display: flex;  
    align-items: center;
    justify-content: center;
    text-align:center;    
    flex-direction: column;    
    /* margin-top: 100px; */
`;

export const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 25px;
    color: #68B0AB; 
    margin:30px;
`;

export const Subtitle = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 40px;
    color: ${props => props.theme.colors.text}; 
`;

export const ContainerDescription = styled.div`
    text-align: justify;
    /* padding: 50px; */
    width: 100%;
    margin-top: 30px;
`;

export const Description = styled.label`
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    color: ${props => props.theme.colors.text};
`;  