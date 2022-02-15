import styled from 'styled-components';

export const Box = styled.div`
padding: 60px 60px;
/* background: ${props => props.theme.colors.background}; */
bottom: 0;
width: 100%;
text-align: center;

@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 25px;
    color: #68B0AB; 
    margin:30px;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    /* margin-left: 60px; */
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,
    minmax(185px, 1fr));
    grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
	minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
  margin-bottom: 20px;
  text-decoration: none;
  position: relative;
  display: inline-block;
  cursor:pointer;

    &:hover {
        color: ${props => props.theme.colors.text};
	    transition: 200ms ease-in;
        opacity: 0.8;
    }

    img {
            width: 40px;
            height: 40px;
        }
        
    .tooltiptext {
        visibility: hidden;
        width: 120px;
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.text};
        text-align: center;
        padding: 5px 0;
        border-radius: 6px;
 
        /* Position the tooltip text - see examples below! */
        position: absolute;
        z-index: 1;
    }
        /* Show the tooltip text when you mouse over the tooltip container */
    &:hover .tooltiptext {
        visibility: visible;
        bottom:45px;
        left:60px;
    }

`;

export const Heading = styled.p`
    font-size: 16px;
    color: ${props => props.theme.colors.text};
    margin-bottom: 40px;
    font-weight: bold;
    text-decoration: none;
    position: relative;
    display: inline-block;

    img {
            width: 70px;
            height: 70px;
            margin-left: 5px;
            margin-right: 5px;
        }
        .tooltiptext {
        visibility: hidden;
        width: 120px;
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.text};
        text-align: center;
        padding: 5px 0;
        border-radius: 6px;
 
        /* Position the tooltip text - see examples below! */
        position: absolute;
        z-index: 1;
    }
        /* Show the tooltip text when you mouse over the tooltip container */
    &:hover .tooltiptext {
        visibility: visible;
        top:65px;
        left: -15px;
        right: 0px;
    }
`;
