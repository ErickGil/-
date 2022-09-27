import React from 'react';
import "materialize-css/dist/css/materialize.min.css";
import { Button, Text } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom';


import "./item.css";



const Item = ({ product }) => {

    return (
        <>

            <div className="container">
                <div className="card"  >
                    <div className="card-image" >
                        <img src={product.image} alt="foto"></img>
                    </div>
                    <div className="card-content">
                        <span className="card-title">{product.name} </span>
                        <p>{product.description}</p>
                    </div>
                    <div className="card-action" style={estilos.estilosDiv}>
                        <Link to={`/detalles/${product.id}`} ><Button size='md'
                            height='48px'
                            width='200px'
                            border='2px'
                            borderColor='blue.700'
                            _focus={{
                                backgroundColor: "#587e9b",
                            }}
                        >
                            <Text fontSize='1xl' color="black"> Ver Detalles  {<SearchIcon />} </Text>

                        </Button> </Link>
                    </div>
                </div>
            </div>

        </>
    )

}
const estilos = {
    estilosDiv: {
        textAlign: "center",
    },

}



export { Item }