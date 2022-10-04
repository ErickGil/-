import {  useToast } from "@chakra-ui/react";
import React, {useState} from "react";
import { ItemCount } from "../../../Components/ItemCount";
import ItemCompra from "../../../Components/ItemCompra/ItemCompra";
import "./estilosDetail.css"
import { useCartContext } from "../../../Context/CartContext";

const ItemDetail = ({ producto }) => {
    const [agregar, setAgregar] = useState(true)
    const {addItem} = useCartContext();
    const toast = useToast();
    const onAdd = (contador) => {
        setAgregar(false)
        addItem(producto, contador);
        toast({
            title: `Añadiste ${contador}  ${producto.name} `,
            description: "Nos comunicaremos contigo en 15 min aprox",
            status: "success",
            duration: 2000,
            isClosable: true,
            position: "top-right",
        });
    };

    return (
        <>
            <div className="wrapper">
                <div className="product-img">
                    <img src={producto.image}  height="420" width="327" alt="s" />
                </div>
                <div className="product-info">
                    <div className="product-text">
                        <h1>{producto.name} </h1>
                        <h2>preguntar precio por mayor</h2>
                        <p>Harvest Vases are a reinterpretation of peeled fruits and vegetables as functional objects. The surfaces appear to be sliced and pulled aside, allowing room for growth. </p>
                    </div>
                    <div className="product-price-btn">
                        <p>Stock Disponible : {producto.stock} </p>
                        <p><span>$</span>{producto.price}</p>
                        {
                                agregar ?
                                <ItemCount
                                initial={1}
                                stock={producto.stock}
                                onAdd={onAdd}
                                className="botones"
                            />:
                                <ItemCompra/>
                                }

                    </div>
                </div>
            </div>

        </>
    )
};




export default ItemDetail;
