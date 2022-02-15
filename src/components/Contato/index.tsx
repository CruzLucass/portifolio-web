import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    Title,
    FooterLink,
    Heading,
} from "./styles";

import github from '../../assets/img/github.png'
import instagram from '../../assets/img/instagram.png'
import linkedin from '../../assets/img/linkedin.png'
import twitter from '../../assets/img/twitter.png'
import pino from '../../assets/img/pin-de-localizacao.png'
import whats from '../../assets/img/whatsapp.png'
import address from '../../assets/img/address.png'
import social from '../../assets/img/social-network.png'
import youtube from '../../assets/img/youtube.png'

const Contato = () => {
    return (
        <Box>
            <Title>Contato</Title>
            <Heading>
                <span className="tooltiptext">
                    Contatos
                </span>
                <img src={social} alt='Mídias Sociais' />
            </Heading>
            <Container>
                <Row>
                    <FooterLink href="https://github.com/CruzLucass" target="_blank">
                        <span className="tooltiptext">
                            Git Hub
                        </span>
                        <img src={github} alt='github' />
                    </FooterLink>
                    <FooterLink href="https://www.linkedin.com/in/lucas-cruzz/" target="_blank">
                        <span className="tooltiptext">
                            Linkedin
                        </span>
                        <img src={linkedin} alt='linkedin' />
                    </FooterLink>
                    <FooterLink href="https://www.instagram.com/cruzlukao/" target="_blank">
                        <span className="tooltiptext">
                            Instagram
                        </span>
                        <img src={instagram} alt='instagram' />
                    </FooterLink>
                    <FooterLink href="https://api.whatsapp.com/send?phone=5535998670259" target="_blank">
                        <span className="tooltiptext">
                            Whatsapp
                        </span>
                        <img src={whats} alt='WhatsApp' />
                    </FooterLink>
                    <FooterLink href="https://twitter.com/CruzLukao" target="_blank">
                        <span className="tooltiptext">
                            Twitter
                        </span>
                        <img src={twitter} alt='twitter' />
                    </FooterLink>
                    <FooterLink href="mailto:lucaas-cruuz@live.com" target="_blank">
                        <span className="tooltiptext">
                            E-mail
                        </span>
                        <img src={address} alt='E-mail' />
                    </FooterLink>
                    <FooterLink target="_blank">
                        <span className="tooltiptext">
                            Localização
                        </span>
                        <img src={pino} alt='localização' />
                    </FooterLink>
                    <FooterLink target="_blank">
                        <span className="tooltiptext">
                            Youtube
                        </span>
                        <img src={youtube} alt='Youtube' />
                    </FooterLink>
                </Row>
            </Container>
        </Box>
    );
};
export default Contato;
