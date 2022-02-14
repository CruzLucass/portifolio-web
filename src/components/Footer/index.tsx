import React from "react";
import core from '../../assets/img/coracao.png'
import { Container, Description } from "./styles";

const Footer: React.FC = () => {
    return (
        <Container>
            <Description>© Todos direitos reservados</Description>
            <Description>Feito com <img src={core} alt='love' /> por Lucas Cruz</Description>
        </Container>
    )
}

export default Footer;