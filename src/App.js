import React from "react"

import CarouselCars from "./components/Carousel";
import Logo from './img/logo.png'
import {
  Button,
  ButtonGroup,
  Label,
  Form,
  FormGroup,
  Input
} from "reactstrap";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import Mapa from "./img/mapa.png"
import { Box } from "@mui/material";
import CardCarros from "./components/CardCarros"
import Depoimentos from "./components/Depoimentos";
function App() {
  const [rSelected, setRSelected] = React.useState(null);



  return (
    <div className="App">

      <header>
        <div style={{ display: "flex", flexDirection: "row", width: "100%s" }}>
          <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <Box sx={{ width: { xl: "20%", sm: "20%" } }}>
              <img src={Logo} width="100%" />
            </Box>
          </div>

          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", marginRight: "1rem" }}>
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
          </Box>
        </div>
      </header>
      {/* Carrosel */}
      <div style={{ width: "100%", height: "5%", marginTop: "1rem" }}>
        <CarouselCars />
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", padding: "1rem", width: "100%", flexWrap: "wrap", margin: "0 auto" }}>
        <CardCarros />
      </div>



      <Depoimentos />






      <div style={{ display: "flex", flexDirection: "column", width: "70%", padding: "1rem", justifyContent: "center", alignItems: "center", margin: "0 auto" }}>
        <div style={{ justifyContent: "center", display: "flex" }}>
          <h1 style={{ margin: "0 auto", textAlign: "center" }}>Encontre-nos</h1>
        </div>
      </div>




      <div style={{ display: "flex", flexDirection: "column", width: "100%", padding: "6rem", justifyContent: "center", alignItems: "center", margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <img src={Mapa} style={{ maxWidth: "100%" }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", width: "100%", padding: "1rem" }}>
          <Form style={{ width: "100%" }}>
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

    


      <div>
        <footer style={{ backgroundColor: "red", height: "100px", display: "flex", alignItems: "center", flexDirection: "column", width: "100%" }}>

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
              Copyright © todos os diretos reservados por João Victor Fagundes de matos
            </div>
          </div>

        </footer>
      </div>
    </div>
  );
}

export default App;
