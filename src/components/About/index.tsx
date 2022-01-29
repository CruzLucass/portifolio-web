import React from 'react';

import { Container, Description, Subtitle, Title, ContainerDescription } from './styles';

const About: React.FC = () => {
    return (
        <Container>
            <Title>Sobre</Title>
            <Subtitle>Um pouco sobre minha história até aqui...</Subtitle>
            <ContainerDescription>
                <Description>Desenvolvedor de sites e aplicativos, apaixonado por desafios e novos aprendizados. Graduando de Ciência da Computação na Unifenas, curso pelo qual sou apaixonado mesmo sendo uma total surpresa a escolha, pois antes de conhecer o curso nunca havia passado pela cabeça em fazer Computação, mas foi em 2018 que conheci a programação e decidi que isso era o que eu queria trabalhar pelo resto da minha vida. <br /><br /></Description>
                <Description>Estar por dentro do mundo da tecnologia e ver tudo o que ela pode fazer e ajudar a vida das pessoas me faz aprender e evoluir mais nesse mundo de conteúdo infinito, onde o limite é a nossa imaginação.<br /><br /></Description>
                <Description>Estou sempre em busca de novos desafios e novos aprendizados, em busca de um lugar onde posso contribuir e evoluir junto ao meu time, pois nunca podemos para de buscar e almejar estar em lugar melhor, isso é a evolução!</Description>
            </ContainerDescription>
        </Container>
    );
}

export default About;