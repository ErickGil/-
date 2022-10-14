import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import ItemCart from './ItemCart/ItemCart';
import { Text, Button } from '@chakra-ui/react'
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import Error from "../../assets/img/error.png"

export const Cart = () => {
    const { cart, precioTotal } = useCartContext();
    
    const order = {
        buyer: {
            name: "faker",
            email: "faker@gmail.com",
            phone: "123-456-1234",
            address: "papufaker"
        },
        items: cart.map((product) => ({ id: product.id , name:product.name, cantidad: product.cantidad })),
        total : precioTotal(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection,order)
            .then(({id}) => console.log(id))
    }
        return (
            <>
                {cart.length === 0 ? <div style={style.estilosDivIma }>
                    <img src={Error} alt="foto404" />
                    <Link to="/sitio-react/" >
                        <Button style={style.estilosBotones} size='lg' colorScheme='blue' variant='outline'>
                            Agregar Productos
                        </Button>
                    </Link>
                </div> :
                    <>
                        {<div style={style.estilosDiv}>
                            {cart.map((product) => {
                                return <ItemCart key={product.id} product={product}></ItemCart>
                            })}
                            <Text style={style.estilosLetras} fontSize='3xl'>
                                Total: $ {precioTotal()}
                            </Text>
                            <div  style={style.estiloCompra}  ><Button  onClick={handleClick} colorScheme='blue'>Orden de Compra</Button></div> 
                        </div>
                        } </>}
            </>

        )
}
const style = {
    estilosDivIma :{
        display: "flex",
        marginTop: "100px",
        flexDirection: "column",
        alignItems: "center",
    },
    estilosDiv: {
        marginTop: "100px",
    },
    estilosLetras:{
        textAlign: "center",
    },
    estilosBotones:{
        marginBottom: "5px",
    },
    estiloCompra:{
        textAlign: "center",
    }
}
export default Cart;