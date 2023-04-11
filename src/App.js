import React from "react"

import CarouselCars from "./components/Carousel";
import Logo from './img/logo.png'
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardText,
  CardSubtitle,
  CardTitle,
  Label,
  Form,
  FormGroup,
  Input
} from "reactstrap";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import Car2 from "./img/Car2.jpg"
import Car3 from "./img/Car3.jpg"
import Car4 from "./img/Car4.jpg"
import Car5 from "./img/Car5.jpg"
import Mapa from "./img/mapa.png"

function App() {
  const [rSelected, setRSelected] = React.useState(null);

  return (
    <div className="App">
      <header>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <div>
              <img src={Logo} width="20%" />
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", marginRight: "1rem" }}>
            <ButtonGroup>
              <Button
                color="danger"
                outline
                onClick={() => setRSelected(1)}
                active={rSelected === 1}
              >
                Home
              </Button>
              <Button
                color="danger"
                outline
                onClick={() => setRSelected(2)}
                active={rSelected === 2}
              >
                Produtos
              </Button>
              <Button
                color="danger"
                outline
                onClick={() => setRSelected(3)}
                active={rSelected === 3}
              >
                Contato
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </header>
      {/* Carrosel */}
      <CarouselCars />

      <div style={{ width: "100%", minHeight: "100vh", display: "flex" }}>
        <div>



          {/* Cards   */}
          <div style={{ display: "flex", justifyContent: "space-between", padding: "1rem", width: "100%" }}>
            <div style={{ flexDirection: "column", display: "flex", margin: "0 auto", marginBottom: "1rem", width: "100%", marginRight: "5rem" }}>
              <Card
                style={{
                  width: '18rem',
                  height: "40rem"
                }}
              >
                <img
                  alt="Sample"
                  src={Car2}
                />
                <CardBody>
                  <CardTitle tag="h5">
                    Carrera S
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    Porsche
                  </CardSubtitle>
                  <CardText style={{ fontSize: "0.8rem" }}>
                    O Porsche 911 Carrera S é uma obra-prima da engenharia automobilística que personifica o luxo, desempenho e a elegância clássica da marca Porsche. Com seu design atemporal e esportivo, o 911 Carrera S é um carro esportivo verdadeiramente emblemático.

                    A aparência do Porsche 911 Carrera S é imediatamente reconhecível, com suas linhas curvas, faróis arredondados e carroceria baixa. As rodas esportivas de liga leve e os detalhes aerodinâmicos sutis complementam seu visual sofisticado e agressivo.
                  </CardText>
                  <Button style={{ backgroundColor: "red", color: "white", marginTop: "4rem" }}>
                    Saiba Mais
                  </Button>
                </CardBody>
              </Card>
            </div>


            <div style={{ flexDirection: "column", display: "flex", margin: "0 auto", marginBottom: "1rem", width: "100%", marginRight: "5rem" }}>
              <Card
                style={{
                  width: '18rem',
                  height: "40rem"
                }}
              >
                <img
                  alt="Sample"
                  src={Car3}
                />
                <CardBody>
                  <CardTitle tag="h5">
                    Camaro
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    Chevrollet
                  </CardSubtitle>
                  <CardText style={{ fontSize: "0.8rem" }}>
                    O Chevrolet Camaro é um carro esportivo americano que combina estilo agressivo, desempenho poderoso e uma tradição de velocidade. Com seu design musculoso e esportivo, motor V8 potente e uma ampla gama de opções de personalização, o Camaro é um ícone da cultura automotiva americana. Seu interior é projetado para oferecer conforto e conveniência, enquanto sua performance impressionante proporciona uma experiência de condução empolgante e cheia de adrenalina.
                  </CardText>
                  <Button style={{ backgroundColor: "red", color: "white", marginTop: "5rem" }}>
                    Saiba Mais
                  </Button>
                </CardBody>
              </Card>
            </div>


            <div style={{ flexDirection: "column", display: "flex", margin: "0 auto", marginBottom: "1rem", width: "100%", marginRight: "5rem" }}>
              <Card
                style={{
                  width: '18rem',
                  height: "40rem"
                }}
              >
                <img
                  alt="Sample"
                  src={Car4}
                />
                <CardBody>
                  <CardTitle tag="h5">
                    Ferrari PortoFino
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    Ferrari
                  </CardSubtitle>
                  <CardText style={{ fontSize: "0.8rem" }}>
                    A Ferrari Portofino é um conversível de luxo que personifica a excelência italiana em design e performance. Com sua carroceria elegante, motor V8 turboalimentado de alta potência e interior luxuoso, a Portofino é um verdadeiro símbolo de status e exclusividade. Seu desempenho excepcional, com aceleração impressionante e suspensão esportiva avançada, fazem dela uma escolha desejável para os amantes de carros esportivos de alto nível.
                  </CardText>
                  <Button style={{ backgroundColor: "red", color: "white", marginTop: "5rem" }}>
                    Saiba Mais
                  </Button>
                </CardBody>
              </Card>
            </div>

            <div style={{ flexDirection: "column", display: "flex", margin: "0 auto", marginBottom: "1rem" }}>
              <Card
                style={{
                  width: '18rem',
                  height: "40rem"
                }}
              >
                <img
                  alt="Sample"
                  src={Car5}
                />
                <CardBody>
                  <CardTitle tag="h5">
                    Audi R8
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    Audi
                  </CardSubtitle>
                  <CardText style={{ fontSize: "0.8rem" }}>
                    O Audi R8 é um supercarro icônico que exala esportividade e sofisticação em cada detalhe. Seu design futurista e aerodinâmico é de tirar o fôlego, com linhas agressivas que destacam sua performance de alto nível. Seu motor V10 de alta potência proporciona uma aceleração impressionante, levando o carro de 0 a 100 km/h em questão de segundos. O interior do Audi R8 é um exemplo de luxo e tecnologia, com acabamentos de alta qualidade e uma cabine repleta de recursos avançados, tornando cada viagem uma experiência única e emocionante.
                  </CardText>
                  <Button style={{ backgroundColor: "red", color: "white", marginTop: "1rem" }}>
                    Saiba Mais
                  </Button>
                </CardBody>
              </Card>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", width: "70%", padding: "6rem", justifyContent: "center", alignItems: "center", margin: "0 auto" }}>
            <div style={{ justifyContent: "center", display: "flex" }}>
              <h1 style={{ margin: "0 auto", textAlign: "center" }}>Depoimentos</h1>
            </div>
            <div style={{ justifyContent: "center", display: "flex", flexDirection: "column", textAlign: "center", marginTop: "1rem" }}>
              <p style={{ margin: "0 auto" }}>
                "Eu sou apaixonado por carros esportivos, e recentemente realizei o meu sonho de adquirir um modelo incrível. A experiência de compra foi simplesmente fantástica! Desde o momento em que entrei na concessionária até o momento em que saí com o meu novo carro, fui tratado com o mais alto nível de profissionalismo e atenção."
              </p>
              <text style={{ textAlign: "end" }}>João Victor</text>
            </div>
            <div style={{ justifyContent: "center", display: "flex", flexDirection: "column", textAlign: "center", marginTop: "1rem" }}>
              <p style={{ margin: "0 auto" }}>
                "A primeira coisa que me impressionou foi a seleção de carros esportivos disponíveis na concessionária. Havia uma ampla variedade de marcas e modelos, com opções de customização e recursos de última geração. O vendedor foi extremamente bem informado e me ajudou a encontrar o carro perfeito que atendesse às minhas necessidades e preferências."
              </p>
              <text style={{ textAlign: "end" }}>Lucas Santos</text>
            </div>
            <div style={{ justifyContent: "center", display: "flex", flexDirection: "column", textAlign: "center", marginTop: "1rem" }}>
              <p style={{ margin: "0 auto" }}>
                "Além disso, o processo de compra foi transparente e eficiente. Todas as informações sobre o carro, incluindo o histórico de manutenção, foram apresentadas de forma clara, e todas as minhas dúvidas foram prontamente respondidas. O vendedor também me ofereceu opções de financiamento e me ajudou a encontrar a melhor solução para o meu orçamento."
              </p>
              <text style={{ textAlign: "end" }}>Fernanda Oliveira</text>
            </div>
            <div style={{ justifyContent: "center", display: "flex", flexDirection: "column", textAlign: "center", marginTop: "1rem" }}>
              <p style={{ margin: "0 auto" }}>
                "Quando chegou o momento de retirar o carro, fui recebido com uma apresentação detalhada de todos os recursos do veículo, desde o motor potente até os recursos de segurança avançados. O carro estava impecavelmente limpo e bem cuidado, e a emoção de dar a partida pela primeira vez foi indescritível."
              </p>
              <text style={{ textAlign: "end" }}>André Silva</text>
            </div>
            <div style={{ justifyContent: "center", display: "flex", flexDirection: "column", textAlign: "center", marginTop: "1rem" }}>
              <p style={{ margin: "0 auto" }}>
                "Desde então, tenho aproveitado cada momento ao volante do meu carro esportivo. Ele é uma máquina de desempenho com uma direção suave e responsiva, e as acelerações são simplesmente empolgantes. Dirigir o meu carro esportivo é uma experiência única, que me traz uma enorme satisfação e prazer."
              </p>
              <text style={{ textAlign: "end" }}>Isabela Pereira</text>
            </div>
            <div style={{ justifyContent: "center", display: "flex", flexDirection: "column", textAlign: "center", marginTop: "1rem" }}>
              <p style={{ margin: "0 auto" }}>
                "Estou extremamente satisfeito com a minha compra e com o excelente serviço que recebi na concessionária. A equipe foi profissional, cortês e dedicada em tornar a minha experiência de compra de um carro esportivo inesquecível. Mal posso esperar para explorar todas as aventuras que me esperam com o meu novo carro esportivo!"
              </p>
              <text style={{ textAlign: "end" }}>Rafael Rodrigues</text>
            </div>
          </div>


          <div style={{ display: "flex", flexDirection: "column", width: "70%", padding: "1rem", justifyContent: "center", alignItems: "center", margin: "0 auto" }}>
            <div style={{ justifyContent: "center", display: "flex" }}>
              <h1 style={{ margin: "0 auto", textAlign: "center" }}>Encontre-nos</h1>
            </div>
          </div>




          <div style={{ display: "flex", flexDirection: "column", width: "70%", padding: "6rem", justifyContent: "center", alignItems: "center", margin: "0 auto" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ display: "flex", flexDirection: "column", marginRight: "5rem" }}>
                <img src={Mapa} />
              </div>

              <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                <Form>
                  <FormGroup>
                    <Label for="nome">
                      Nome
                    </Label>
                    <Input
                      id="nome"
                      name="nome"
                      placeholder="Ex: João Victor Fagundes de matos"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">
                      Email
                    </Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="Ex: jvmatosfagundes@gmail.com"
                      type="email"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleText">
                      Mensagem
                    </Label>
                    <Input
                      id="exampleText"
                      name="text"
                      type="textarea"
                    />
                  </FormGroup>
                  <Button style={{ backgroundColor: "red", color: "white" }}>
                    Enviar
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <footer style={{ backgroundColor: "red", height: "100px", display: "flex", alignItems: "center", flexDirection: "column" }}>

          <div style={{ display: 'flex', flexDirection: "row", alignItems: "center", alignSelf: "center", width: "100%", height: "100%" }}>
            <div style={{ display: "flex", justifyContent: "center", flexDirection: "row", width: "100%" }}>

              <div style={{ display: "flex", flexDirection: "column", marginRight: "0.5rem" }}>
                <InstagramIcon style={{ color: "white", fontSize: "1.5rem" }} />
              </div>


              <div style={{ display: "flex", flexDirection: "column", marginRight: "0.5rem" }}>
                <LinkedInIcon style={{ color: "white", fontSize: "1.5rem" }} />
              </div>


              <div style={{ display: "flex", flexDirection: "column", marginRight: "0.5rem" }}>
                <WhatsAppIcon style={{ color: "white", fontSize: "1.5rem" }} />
              </div>

              <div style={{ display: "flex", flexDirection: "column", marginRight: "0.5rem" }}>
                <TwitterIcon style={{ color: "white", fontSize: "1.5rem" }} />
              </div>
            </div>


          </div>

          <div style={{ display: 'flex', flexDirection: "column", alignItems: "center", alignSelf: "center", width: "100%" }}>
            <div style={{ color: "white", fontSize: "1rem" }}>
              Copyright © todos os diretos reservados
            </div>
          </div>

        </footer>
      </div>
    </div>
  );
}

export default App;
