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

const Contato = () => {
    return (
        <Box>
            <Title>Contato</Title>
            <Container>
                <Row>
                    <Column>
                        <Heading>Localização</Heading>
                        <FooterLink href="#">Alfenas</FooterLink>
                        <FooterLink href="#">Minas Gerais</FooterLink>
                        <FooterLink href="#">Brasil</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Envie um Email</Heading>
                        <FooterLink href="#">lucaas-cruuz@live.com</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Contato ou WhatsApp</Heading>
                        <FooterLink href="#">(+55) 35 99821-3599</FooterLink>
                        <FooterLink href="#">ou</FooterLink>
                        <FooterLink href="#">(+55) 35 99867-0259</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="#">
                            <i className="fab fa-facebook-f">
                                <span style={{ marginLeft: "10px" }}>
                                    Linkedin
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram">
                                <span style={{ marginLeft: "10px" }}>
                                    Instagram
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-twitter">
                                <span style={{ marginLeft: "10px" }}>
                                    Twitter
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-youtube">
                                <span style={{ marginLeft: "10px" }}>
                                    GitHub
                                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
};
export default Contato;
