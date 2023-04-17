import React from "react"

import CarouselCars from "../components/Carousel";
import Logo from '../img/logo.png'
import {
    Button,
    ButtonGroup,
    Label,
    Form,
    FormGroup,
    Input,
    UncontrolledDropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle
} from "reactstrap";
import styled from "styled-components";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import { toast } from "react-toastify"
import MapContainer from "../components/MapContainer";
import { Box } from "@mui/material";
import CardCarros from "../components/CardCarros"
import Depoimentos from "../components/Depoimentos";
import { useNavigate } from "react-router";
import ModalSobre from "../components/ModalSobre";

const ContainerMap = styled.div`
 display: flex; 
 flex-direction: row; 
 width: 70%; 
 padding: 0.5rem; 
 justify-content: center; 
 align-items: center; 
 margin: 0 auto;
 
 @media (max-width: 750px) {
    flex-direction: column;
 }
 
 `


function Home() {

    const navigate = useNavigate()

    function RouterCarNacionais() {
        navigate("/CarNacionais")
    }


    function RouterCarInternacionais() {
        navigate("/CarInternacionais")
    }

    function TesteFunction() {
        console.log("Caiu aqui")
        handleClick()
    }

    const handleClick = () => {
        toast.success('Exemplo de Toast!', { position: toast.POSITION.TOP_RIGHT });
    };

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    
    const [modal, setModal] = React.useState(false);

    const toggle = () => setModal(!modal);
    return (
        <>
            <header style={{ position: 'fixed', top: '0', left: '0', right: '0', zIndex: '999', backgroundColor: 'white' }}>
                <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
                    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                        <Box sx={{ width: { xl: "10%", sm: "12%" } }}>
                            <img src={Logo} width="100%" />
                        </Box>
                    </div>

                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", marginRight: "1rem" }}>
                        <ButtonGroup className="my-2">
                            <Button outline color="danger" onClick={() => handleScrollToTop()}>
                                Inicio
                            </Button>
                            <Button outline color="danger" onClick={() => toggle()}>
                                Sobre
                            </Button>
                            <ButtonGroup>
                                <UncontrolledDropdown>
                                    <DropdownToggle caret outline color="danger">
                                        Produtos
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem onClick={() => RouterCarNacionais()}>
                                            Carros Nacionais
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem onClick={() => RouterCarInternacionais()}>
                                            Carros internacionais
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </ButtonGroup>
                        </ButtonGroup>
                    </Box>
                </div>
            </header>

            {/* Carrosel */}
            <div style={{ width: "100%", height: "5%", marginTop: "5rem" }}>
                <CarouselCars />
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", padding: "1rem", width: "100%", flexWrap: "wrap", margin: "0 auto" }}>
                <CardCarros />
            </div>

            <Depoimentos />

            <div style={{ display: "flex", flexDirection: "column", width: "70%", padding: "0.5rem", justifyContent: "center", alignItems: "center", margin: "0 auto" }}>
                <div style={{ justifyContent: "center", display: "flex" }}>
                    <h1 style={{ margin: "0 auto", textAlign: "center" }}>Encontre-nos</h1>
                </div>
            </div>


            <ContainerMap>
                <div style={{ display: "flex", flexDirection: "column", width: '100%', alignItems: "center" }}>
                    <MapContainer />
                </div>

                <div style={{ display: "flex", flexDirection: "column", width: "100%", padding: "1rem" }}>
                    <Form style={{ width: "100%" }} onSubmit={() => TesteFunction()}>
                        <FormGroup>
                            <Label for="nome">
                                Nome
                            </Label>
                            <Input
                                id="nome"
                                name="nome"
                                placeholder="Ex: João Victor Fagundes de matos"
                                type="text"
                                required
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
                                required
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
                                required
                            />
                        </FormGroup>
                        <Button type="submit" style={{ backgroundColor: "red", color: "white" }} >
                            Enviar
                        </Button>
                    </Form>
                </div>
            </ContainerMap>




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
            <ModalSobre modal={modal} toggle={toggle} />

        </>
    );
}

export default Home;
