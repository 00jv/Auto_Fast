import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function ModalSobre({ modal, toggle }) {


    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Sobre nós</ModalHeader>
                <ModalBody>
                    Bem-vindo à Auto Fast, a concessionária de veículos esportivos que oferece uma experiência de compra única para os apaixonados por carros! Se você é um entusiasta de velocidade, luxo e design arrojado, está no lugar certo.

                    Localizada em um showroom moderno e sofisticado, a Auto Fast é o destino dos sonhos para os amantes de carros esportivos. Com uma ampla seleção de veículos de marcas renomadas mundialmente, como Ferrari, Lamborghini, Porsche, Audi e muitas outras, temos o carro perfeito para você realizar seu desejo de possuir um veículo esportivo de alta performance.

                    Nossa equipe de vendas é composta por especialistas apaixonados por carros, prontos para atender às suas necessidades e ajudá-lo a encontrar o veículo dos seus sonhos. Com um atendimento personalizado e profissional, estamos comprometidos em fornecer uma experiência excepcional, desde o momento em que você entra em nossa concessionária até o momento em que sai dirigindo o seu novo carro esportivo.

                    Na Auto Fast, valorizamos a qualidade e a procedência dos veículos que vendemos. Todos os nossos carros passam por rigorosas inspeções técnicas e são cuidadosamente selecionados para garantir que você esteja adquirindo um veículo de alto padrão e confiabilidade. Além disso, oferecemos opções de financiamento e consórcio, para tornar o processo de compra ainda mais conveniente e acessível.

                    Visite a Auto Fast e descubra a emoção de possuir um veículo esportivo que vai além das suas expectativas. Nossa equipe está pronta para recebê-lo e ajudá-lo a encontrar o carro dos seus sonhos. Venha viver a paixão por carros esportivos na Auto Fast, onde a velocidade e o luxo se encontram!

                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={toggle}>
                        Fechar
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalSobre;