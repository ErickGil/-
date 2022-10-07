import React from "react";
import { useCartContext } from "../../../Context/CartContext";
import "./itemCart.css"
import { Button,Text  } from '@chakra-ui/react'

const ItemCart = ({ product }) => {
    const { removeItem } = useCartContext();
    return (
        <>
            <div className="itemCart z-depth-5" >
                <img src={product.image} alt={product.name} />
                <div>
                <Text fontSize='md'>Producto: {product.name} </Text>
                <Text fontSize='md'>Cantidad: {product.cantidad} </Text>
                <Text fontSize='md'>Precio Unidad : {product.price} </Text>
                <Text fontSize='md'>SubTotal: $ {product.cantidad * product.price} </Text>
                    <Button colorScheme='red' onClick={() => removeItem(product.id) } >Eliminar</Button>
                </div>
            </div>
        </>
    )
}
export default ItemCart
