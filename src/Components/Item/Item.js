import React from 'react';
import "materialize-css/dist/css/materialize.min.css";
import { useToast,Text } from "@chakra-ui/react";
import { ItemCount } from "../ItemCount";
import "./item.css";



const Item = ({ product }) => {
    const toast = useToast();
    const onAdd = (contador) => {
        toast({
            title: `Añadiste ${contador}  ${product.name} `,
            description:"Nos comunicaremos contigo en 15 min aprox",
            status: "success",
            duration: 2000,
            isClosable: true,
            position: 'top-right',
        });
    };

    return (
        <>
            
                <div className="container">
                    <div className="card"  >
                        <div className="card-image" >
                            <img  src= {product.image} alt="foto"></img>
                        </div>
                        <div className="card-content">
                            <span className="card-title">{product.name} </span>
                            <p>{product.description}</p>
                        </div>
                        <div className="card-action">
                            <Text textAlign={[  'center' ]}>Precio : ${product.price}  Stock disponible: {product.stock} </Text>
                            <ItemCount initial={1} stock={6} onAdd={onAdd} className="botones" />
                        </div>
                    </div>
                </div>
            
        </>
    )

}


export { Item }