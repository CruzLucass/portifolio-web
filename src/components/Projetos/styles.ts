import styled from "styled-components";

export const Container = styled.div`
    justify-content: center;
    align-items: center;   
    text-align: center;
    
    /* background: ${props => props.theme.colors.background}; */
`;

export const ContainerCard = styled.div`
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-content: center;
    justify-items: center;
    padding: 30px;
`;

export const Card = styled.div`
    border-radius: 10px;
    box-shadow: 10px 10px 20px 0px rgba(50, 50, 50, 0.22);
    width: 300px;
    height: 400px;
    transition: all 0.3s ease-out;
    border-left: 3px solid ${props => props.theme.colors.secundary};
    padding: 20px;
    flex-direction: column;

    :hover {
        transform: translateY(-5px);
        cursor: pointer;
    }
    p {
        color: ${props => props.theme.colors.text};
        font-size: 16px;
    }
        
    .image {
       float: right;
       max-width: 64px;
       max-height: 64px;
    }   
`;