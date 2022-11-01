import React from "react";
import "./estilosFooter.css"
import { Button, HStack, Text } from '@chakra-ui/react'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <>
            <footer className="page-footer">
                <div className="containers ext">
                    <div className="row seccion">
                        <div className="izq">
                            <Text fontSize='2xl'>¿Por que Nosotros?</Text>
                            <p className="grey-text text-lighten-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo facilis corrupti iure ipsa, repellendus, eveniet ratione voluptatum provident accusamus praesentium culpa assumenda saepe veritatis. Iste blanditiis a ipsum quas odit?
                            </p>
                        </div>
                        <div className="der">
                            <Text fontSize='2xl'>Enlaces</Text>
                            <ul>
                                <hr />
                                <li>
                                    <Link to="/sitio-react/" className="grey-text text-lighten-3" >
                                        Inicio
                                    </Link>
                                </li>
                                <hr />
                                <li>
                                    <Link  to="/Sobre_Nosotros" className="grey-text text-lighten-3">
                                        Sobre Nostros
                                    </Link>
                                </li>
                                <hr />
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright down">
                    <div className="containers sub">
                        © 2022 Copyright ALien
                        <div className="grey-text  right">
                            <HStack>
                                <Button colorScheme='facebook' leftIcon={<FaFacebook />}>
                                    Facebook
                                </Button>
                                <Button colorScheme='whatsapp' leftIcon={<FaWhatsapp />}>
                                    Whatsapp
                                </Button>
                            </HStack>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
