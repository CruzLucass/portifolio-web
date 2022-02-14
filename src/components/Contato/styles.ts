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
    color: ${props => props.theme.colors.text};
    margin-bottom: 20px;
    font-size: 18px;
    text-decoration: none;

&:hover {
    color: ${props => props.theme.colors.secundary};
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
    font-size: 24px;
    color: ${props => props.theme.colors.text};
    margin-bottom: 40px;
    font-weight: bold;
`;
