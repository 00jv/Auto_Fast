import React from 'react';
import Header from "../../components/Header"
import { Table, Button } from "reactstrap"
// import { Container } from './styles';
// AIzaSyBPRcskhPd5YqmkkLNrSMEjMqKyNF-JjSk
function CarNacionais() {
    return (
        <>
            <div>
                <Header nameTitle={"Carros Nacionais"} />
            </div>

            <div>
                <Table
                    responsive
                    striped
                >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Marca</th>
                            <th>Modelo</th>
                            <th>Preço</th>
                            <th>Comprar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Fiat Uno</td>
                            <td>Fiat</td>
                            <td>Uno</td>
                            <td>R$ 50.000,00</td>
                            <td><Button style={{ backgroundColor: "red", color: "white" }}> Comprar </Button></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Chevrolet Onix</td>
                            <td>Chevrolet</td>
                            <td>Onix</td>
                            <td>R$ 60.000,00</td>
                            <td><Button style={{ backgroundColor: "red", color: "white" }}> Comprar </Button></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Ford Ka</td>
                            <td>Ford</td>
                            <td>Ka</td>
                            <td>R$ 55.000,00</td>
                            <td><Button style={{ backgroundColor: "red", color: "white" }}> Comprar </Button></td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Volkswagen Gol</td>
                            <td>Volkswagen</td>
                            <td>Gol</td>
                            <td>R$ 52.000,00</td>
                            <td><Button style={{ backgroundColor: "red", color: "white" }}> Comprar </Button></td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>Renault Kwid</td>
                            <td>Renault</td>
                            <td>Kwid</td>
                            <td>R$ 45.000,00</td>
                            <td><Button style={{ backgroundColor: "red", color: "white" }}> Comprar </Button></td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td>Toyota Corolla</td>
                            <td>Toyota</td>
                            <td>Corolla</td>
                            <td>R$ 100.000,00</td>
                            <td><Button style={{ backgroundColor: "red", color: "white" }}> Comprar </Button></td>
                        </tr>
                        <tr>
                            <th scope="row">7</th>
                            <td>Honda Civic</td>
                            <td>Honda</td>
                            <td>Civic</td>
                            <td>R$ 95.000,00</td>
                            <td><Button style={{ backgroundColor: "red", color: "white" }}> Comprar </Button></td>
                        </tr>
                        <tr>
                            <th scope="row">8</th>
                            <td>Hyundai HB20</td>
                            <td>Hyundai</td>
                            <td>HB20</td>
                            <td>R$ 58.000,00</td>
                            <td><Button style={{ backgroundColor: "red", color: "white" }}> Comprar </Button></td>
                        </tr>
                        <tr>
                            <th scope="row">9</th>
                            <td>Nissan Versa</td>
                            <td>Nissan</td>
                            <td>Versa</td>
                            <td>R$ 65.000,00</td>
                            <td><Button style={{ backgroundColor: "red", color: "white" }}> Comprar </Button></td>
                        </tr>
                        <tr>
                            <th scope="row">10</th>
                            <td>Citroen C4 Cactus</td>
                            <td>Citroen</td>
                            <td>C4 Cactus</td>
                            <td>R$ 70.000,00</td>
                            <td><Button style={{ backgroundColor: "red", color: "white" }}> Comprar </Button></td>
                        </tr>
                        <tr>
                            <th scope="row">11</th>
                            <td>Peugeot 208</td>
                            <td>Peugeot</td>
                            <td>208</td>
                            <td>R$ 62.000,00</td>
                            <td><Button style={{ backgroundColor: "red", color: "white" }}> Comprar </Button></td>
                        </tr>
                        <tr>
                            <th scope="row">12</th>
                            <td>Kia Cerato</td>
                            <td>Kia</td>
                            <td>Cerato</td>
                            <td>R$ 85.000,00</td>
                            <td><Button style={{ backgroundColor: "red", color: "white" }}> Comprar </Button></td>
                        </tr>
                        <tr>
                            <th scope="row">13</th>
                            <td>Chery Tiggo 5X</td>
                            <td>Chery</td>
                            <td>Tiggo 5X</td>
                            <td>R$ 60.000,00</td>
                            <td><Button style={{ backgroundColor: "red", color: "white" }}> Comprar </Button></td>
                        </tr>
                        <tr>
                            <th scope="row">14</th>
                            <td>Jeep Renegade</td>
                            <td>Jeep</td>
                            <td>Renegade</td>
                            <td>R$ 80.000,00</td>
                            <td><Button style={{ backgroundColor: "red", color: "white" }}> Comprar </Button></td>
                        </tr>
                        <tr>
                            <th scope="row">15</th>
                            <td>Hyundai Creta</td>
                            <td>Hyundai</td>
                            <td>Creta</td>
                            <td>R$ 75.000,00</td>
                            <td><Button style={{ backgroundColor: "red", color: "white" }}> Comprar </Button></td>
                        </tr>
                        <tr>
                            <th scope="row">16</th>
                            <td>Renault Duster</td>
                            <td>Renault</td>
                            <td>Duster</td>
                            <td>R$ 68.000,00</td>
                            <td><Button style={{ backgroundColor: "red", color: "white" }}> Comprar </Button></td>
                        </tr>
                        <tr>
                            <th scope="row">17</th>
                            <td>Volkswagen Polo</td>
                            <td>Volkswagen</td>
                            <td>Polo</td>
                            <td>R$ 70.000,00</td>
                            <td><Button style={{ backgroundColor: "red", color: "white" }}> Comprar </Button></td>
                        </tr>
                        <tr>
                            <th scope="row">18</th>
                            <td>Fiat Toro</td>
                            <td>Fiat</td>
                            <td>Toro</td>
                            <td>R$ 90.000,00</td>
                            <td><Button style={{ backgroundColor: "red", color: "white" }}> Comprar </Button></td>
                        </tr>
                        <tr>
                            <th scope="row">19</th>
                            <td>Chevrolet Tracker</td>
                            <td>Chevrolet</td>
                            <td>Tracker</td>
                            <td>R$ 85.000,00</td>
                            <td><Button style={{ backgroundColor: "red", color: "white" }}> Comprar </Button></td>
                        </tr>
                        <tr>
                            <th scope="row">20</th>
                            <td>Toyota Hilux</td>
                            <td>Toyota</td>
                            <td>Hilux</td>
                            <td>R$ 150.000,00</td>
                            <td><Button style={{ backgroundColor: "red", color: "white" }}> Comprar </Button></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default CarNacionais;