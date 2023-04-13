import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 70%;
  padding: 6rem;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const TitleWrapper = styled.div`
  justify-content: center;
  display: flex;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const Title = styled.h1`
  margin: 0 auto;
  text-align: center;
`;

const TestimonialWrapper = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 1rem;

  @media (max-width: 768px) {
    margin-top: 0.5rem;
  }
`;

const Testimonial = styled.p`
  margin: 0 auto;
`;

const TestimonialAuthor = styled.text`
  text-align: end;
`;

// import { Container } from './styles';

function Depoimentos() {
    return (
        <>
            <Container>

            <TitleWrapper>
                <Title>Depoimentos</Title>
            </TitleWrapper>
            <TestimonialWrapper>
                <Testimonial>
                    "Eu sou apaixonado por carros esportivos, e recentemente realizei o meu sonho de adquirir um modelo incrível. A experiência de compra foi simplesmente fantástica! Desde o momento em que entrei na concessionária até o momento em que saí com o meu novo carro, fui tratado com o mais alto nível de profissionalismo e atenção."
                </Testimonial>
                <TestimonialAuthor>João Victor</TestimonialAuthor>
            </TestimonialWrapper>

            <TestimonialWrapper>
                <Testimonial>
                "A primeira coisa que me impressionou foi a seleção de carros esportivos disponíveis na concessionária. Havia uma ampla variedade de marcas e modelos, com opções de customização e recursos de última geração. O vendedor foi extremamente bem informado e me ajudou a encontrar o carro perfeito que atendesse às minhas necessidades e preferências."
                </Testimonial>
                <TestimonialAuthor>Lucas Santo</TestimonialAuthor>
            </TestimonialWrapper>

            <TestimonialWrapper>
                <Testimonial>
                "Além disso, o processo de compra foi transparente e eficiente. Todas as informações sobre o carro, incluindo o histórico de manutenção, foram apresentadas de forma clara, e todas as minhas dúvidas foram prontamente respondidas. O vendedor também me ofereceu opções de financiamento e me ajudou a encontrar a melhor solução para o meu orçamento."
                </Testimonial>
                <TestimonialAuthor>Fernanda Oliveira</TestimonialAuthor>
            </TestimonialWrapper>

            <TestimonialWrapper>
                <Testimonial>
                "Quando chegou o momento de retirar o carro, fui recebido com uma apresentação detalhada de todos os recursos do veículo, desde o motor potente até os recursos de segurança avançados. O carro estava impecavelmente limpo e bem cuidado, e a emoção de dar a partida pela primeira vez foi indescritível."
                </Testimonial>
                <TestimonialAuthor>André Silva</TestimonialAuthor>
            </TestimonialWrapper>

            <TestimonialWrapper>
                <Testimonial>
                "Desde então, tenho aproveitado cada momento ao volante do meu carro esportivo. Ele é uma máquina de desempenho com uma direção suave e responsiva, e as acelerações são simplesmente empolgantes. Dirigir o meu carro esportivo é uma experiência única, que me traz uma enorme satisfação e prazer."
                </Testimonial>
                <TestimonialAuthor>Isabela Pereira</TestimonialAuthor>
            </TestimonialWrapper>

            <TestimonialWrapper>
                <Testimonial>
                "Estou extremamente satisfeito com a minha compra e com o excelente serviço que recebi na concessionária. A equipe foi profissional, cortês e dedicada em tornar a minha experiência de compra de um carro esportivo inesquecível. Mal posso esperar para explorar todas as aventuras que me esperam com o meu novo carro esportivo!"
                </Testimonial>
                <TestimonialAuthor>André Silva</TestimonialAuthor>
            </TestimonialWrapper>

            <TestimonialWrapper>
                <Testimonial>
                "Quando chegou o momento de retirar o carro, fui recebido com uma apresentação detalhada de todos os recursos do veículo, desde o motor potente até os recursos de segurança avançados. O carro estava impecavelmente limpo e bem cuidado, e a emoção de dar a partida pela primeira vez foi indescritível."
                </Testimonial>
                <TestimonialAuthor>Rafael Rodrigues</TestimonialAuthor>
            </TestimonialWrapper>
         </Container>
        </>
    );
}

export default Depoimentos;