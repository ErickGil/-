import React from "react";
import { useCartContext } from "../../../Context/CartContext";
import "./itemCart.css";
import { Button, Text } from "@chakra-ui/react";

const ItemCart = ({ product }) => {
    const { removeItem } = useCartContext();
    return (
        <>
            <div className="itemCart z-depth-5">
                <img src={product.image} alt={product.name} />
                <div className="itemCartDiv">
                    <section className="titulo">
                        <Text fontSize="3xl"> {product.name} </Text>
                        <hr className="divisor" />
                    </section>
                    <section className="resto">
                        <Text fontSize="2xl"> {product.cantidad} Unidad </Text>
                        <Text fontSize="md">Precio Unidad : {product.price} </Text>
                        <Text fontSize="2xl">
                            SubTotal: $ {product.cantidad * product.price}{" "}
                        </Text>
                    </section>
                    <section className="boton">
                        <Button colorScheme="red" onClick={() => removeItem(product.id)}>
                            Eliminar
                        </Button>
                    </section>
                </div>
            </div>
        </>
    );
};
export default ItemCart;
