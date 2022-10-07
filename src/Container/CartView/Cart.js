import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import ItemCart from './ItemCart/ItemCart';
import { Text, Button } from '@chakra-ui/react'
import Error from "../../assets/img/error.png"

export const Cart = () => {
    const { cart, precioTotal } = useCartContext();

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
                    </div>
                    } </>}
        </>

    )
}
const style = {
    estilosDivIma :{
        display: "flex",
        marginTop: "50px",
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
    }
}
export default Cart;