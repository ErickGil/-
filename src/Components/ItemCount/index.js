import React from "react";
import { useState } from "react";
import { Text, Button, HStack, Container } from "@chakra-ui/react";





const ItemCount = ({initial, stock, onAdd }) => {

    const [contador, setContador] = useState(initial);

    const sumar = () => contador < stock && setContador(contador + 1);

    const restar = () => contador > initial  && setContador(contador -1);

    

    


    const alerta = () => {
        onAdd(contador);
    }
    return(
        <>  
        
            <Container d="flex"  alignItems="center"     >
                <HStack p="10px" justifyContent="center">
                    <Button disabled={contador <= 1} onClick={restar}>-</Button>
                    <Text>{contador}</Text>
                    <Button disabled={contador === stock} onClick={sumar}>+</Button>
                    <Button onClick = {alerta} >Agregar al carrito</Button>
                </HStack>
                
            </Container>
        </>
    )
}

export {ItemCount}