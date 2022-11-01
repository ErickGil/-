import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import ItemCart from "./ItemCart/ItemCart";
import { Text, Button } from "@chakra-ui/react";
import Error from "../../assets/img/error.png";
import Formulario from "./Formulario/Formulario";

export const Cart = () => {
    const { cart } = useCartContext();

    return (
        <>
            {cart.length === 0 ? (
                <div style={style.estilosDivIma}>
                    <img src={Error} alt="foto404" />
                    <Link to="/sitio-react/">
                        <Button
                            style={style.estilosBotonCart}
                            size="lg"
                            colorScheme="blue"
                            variant="outline"
                        >
                            Agregar Productos
                        </Button>
                    </Link>
                </div>
            ) : (
                <>
                    {
                        <div style={style.estilosDiv}>
                            <div>
                                {cart.map((product) => {
                                    return (
                                        <ItemCart key={product.id} product={product}></ItemCart>
                                    );
                                })}
                            </div>
                            <div style={style.estiloCompra}>
                                <Text fontSize="3xl">Resumen de Compra</Text>
                                <hr style={style.estiloDivisor} />
                                <section>
                                    <Formulario />
                                </section>
                            </div>
                        </div>
                    }{" "}
                </>
            )}
        </>
    );
};
const style = {
    estilosDivIma: {
        display: "flex",
        marginTop: "100px",
        flexDirection: "column",
        alignItems: "center",
    },
    estilosDiv: {
        marginTop: "150px",
        marginBottom: "20px",
        width: "100%",
        height: "auto",
        display: "flex",
        justifyContent: "space-evenly",
    },

    estilosBotonCart: {
        marginBottom: "5px",
    },
    estiloCompra: {
        textAlign: "center",
        border: "ridge",
        borderColor: "white",
        height: "450px",
        width: "400px",
        boxShadow: "0.3em 0.3em 1em rgba(0,0,0,0.8)",
        backgroundColor: "aliceblue",
        borderRadius: "5px",
    },
    estiloDivisor: {
        width: "80%",
        margin: "auto",
        borderColor: "cadetblue",
    },
};
export default Cart;
