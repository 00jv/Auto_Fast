import React from 'react';
import Header from "../../components/Header"
import { Table, Button } from "reactstrap"
// import { Container } from './styles';

function CarInternacionais() {
    return (
        <>
            <div>
                <Header nameTitle={"Carros internacionais"} />
            </div>

            <div>
                <Table responsive={true} striped>
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
                            <td>Ford Mustang</td>
                            <td>Ford</td>
                            <td>Mustang</td>
                            <td>$32,500</td>
                            <td><Button style={{ backgroundColor: "red", color: "white" }}> Comprar </Button></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Chevrolet Camaro</td>
                            <td>Chevrolet</td>
                            <td>Camaro</td>
                            <td>$28,000</td>
                            <td><Button style={{ backgroundColor: "red", color: "white" }}> Comprar </Button></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Toyota Corolla</td>
                            <td>Toyota</td>
                            <td>Corolla</td>
                            <td>$24,000</td>
                            <td><Button style={{ backgroundColor: "red", color: "white" }}> Comprar </Button></td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Honda Civic</td>
                            <td>Honda</td>
                            <td>Civic</td>
                            <td>$22,500</td>
                            <td><Button style={{ backgroundColor: "red", color: "white" }}> Comprar </Button></td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>Nissan Altima</td>
                            <td>Nissan</td>
                            <td>Altima</td>
                            <td>$23,500</td>
                            <td><Button style={{ backgroundColor: "red", color: "white" }}> Comprar </Button></td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td>BMW 3 Series</td>
                            <td>BMW</td>
                            <td>3 Series</td>
                            <td>$35,000</td>
                            <td><Button style={{ backgroundColor: "red", color: "white" }}> Comprar </Button></td>
                        </tr>
                        <tr>
                            <th scope="row">7</th>
                            <td>Mercedes-Benz C-Class</td>
                            <td>Mercedes-Benz</td>
                            <td>C-Class</td>
                            <td>$38,500</td>
                            <td><Button style={{ backgroundColor: "red", color: "white" }}> Comprar </Button></td>
                        </tr>
                        <tr>
                            <th scope="row">8</th>
                            <td>Audi A4</td>
                            <td>Audi</td>
                            <td>A4</td>
                            <td>$33,000</td>
                            <td><Button style={{ backgroundColor: "red", color: "white" }}> Comprar </Button></td>
                        </tr>
                        <tr>
                            <th scope="row">9</th>
                            <td>Volkswagen Golf</td>
                            <td>Volkswagen</td>
                            <td>Golf</td>
                            <td>$21,000</td>
                            <td><Button style={{ backgroundColor: "red", color: "white" }}> Comprar </Button></td>
                        </tr>
                        <tr>
                            <th scope="row">10</th>
                            <td>Subaru Outback</td>
                            <td>Subaru</td>
                            <td>Outback</td>
                            <td>$27,500</td>
                            <td><Button style={{ backgroundColor: "red", color: "white" }}> Comprar </Button></td>
                        </tr>
                        <tr>
                            <th scope="row">11</th>
                            <td>Toyota Camry</td>
                            <td>Toyota</td>
                            <td>Camry</td>
                            <td>$26,000</td>
                            <td><Button style={{ backgroundColor: "red", color: "white" }}> Comprar </Button></td>
                        </tr>
                        <tr>
                            <th scope="row">12</th>
                            <td>Honda Accord</td>
                            <td>Honda</td>
                            <td>Accord</td>
                            <td>$25,000</td>
                            <td><Button style={{ backgroundColor: "red", color: "white" }}> Comprar </Button></td>
                        </tr>
                        <tr>
                            <th scope="row">13</th>
                            <td>Hyundai Sonata</td>
                            <td>Hyundai</td>
                            <td>Sonata</td>
                            <td>$23,500</td>
                            <td><Button style={{ backgroundColor: "red", color: "white" }}> Comprar </Button></td>
                        </tr>
                        <tr>
                            <th scope="row">14</th>
                            <td>Kia Optima</td>
                            <td>Kia</td>
                            <td>Optima</td>
                            <td>$22,000</td>
                            <td><Button style={{ backgroundColor: "red", color: "white" }}> Comprar </Button></td>
                        </tr>
                        <tr>
                            <th scope="row">15</th>
                            <td>Ford Fusion</td>
                            <td>Ford</td>
                            <td>Fusion</td>
                            <td>$24,500</td>
                            <td><Button style={{ backgroundColor: "red", color: "white" }}> Comprar </Button></td>
                        </tr>
                        <tr>
                            <th scope="row">16</th>
                            <td>Chevrolet Malibu</td>
                            <td>Chevrolet</td>
                            <td>Malibu</td>
                            <td>$23,000</td>
                            <td><Button style={{ backgroundColor: "red", color: "white" }}> Comprar </Button></td>
                        </tr>
                        <tr>
                            <th scope="row">17</th>
                            <td>Nissan Sentra</td>
                            <td>Nissan</td>
                            <td>Sentra</td>
                            <td>$20,500</td>
                            <td><Button style={{ backgroundColor: "red", color: "white" }}> Comprar </Button></td>
                        </tr>
                        <tr>
                            <th scope="row">18</th>
                            <td>Mazda 6</td>
                            <td>Mazda</td>
                            <td>6</td>
                            <td>$26,000</td>
                            <td><Button style={{ backgroundColor: "red", color: "white" }}> Comprar </Button></td>
                        </tr>
                        <tr>
                            <th scope="row">19</th>
                            <td>Volvo S60</td>
                            <td>Volvo</td>
                            <td>S60</td>
                            <td>$30,000</td>
                            <td><Button style={{ backgroundColor: "red", color: "white" }}> Comprar </Button></td>
                        </tr>
                        <tr>
                            <th scope="row">20</th>
                            <td>Jeep Wrangler</td>
                            <td>Jeep</td>
                            <td>Wrangler</td>
                            <td>$28,500</td>
                            <td><Button style={{ backgroundColor: "red", color: "white" }}> Comprar </Button></td>
                        </tr>
                    </tbody>
                </Table>

            </div>
        </>
    );
}

export default CarInternacionais;