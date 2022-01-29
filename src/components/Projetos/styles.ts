import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    width:100%;
    height: 800px;
`;

export const Card = styled.div`
    border-radius: 5px;
    box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
    padding: 30px;
    margin: 20px;
    width: 400px;
    transition: all 0.3s ease-out;

    :hover {
        transform: translateY(-5px);
        cursor: pointer;
    }
    p {
        color: ${props => props.theme.colors.primary};
        font-size: 16px;
    }
        
    .image {
       float: right;
       max-width: 64px;
       max-height: 64px;
    }   
`;