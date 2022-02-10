import React from "react";
import { Title } from "../About/styles";
import { Card, Container, ContainerCard } from "./styles";

const Projetos: React.FC = () => {
    return (
        <Container>
            <Title>Projetos</Title>
            <ContainerCard>
                <Card>
                    <p>Portifólio Web</p>
                    <image></image>
                </Card>
                <Card>
                    <p>Feira Delivery</p>
                    <image></image>
                </Card>
                <Card>
                    <p>Ong Doe Luz</p>
                    <image></image>
                </Card>
                <Card>
                    <p>Catálogo de aulas Dev</p>
                    <image></image>
                </Card>
            </ContainerCard>
        </Container >
    );
}

export default Projetos;