import React from "react";
import { useCartContext } from "../../Context/CartContext";

export const CartWidget = () => {
    const {cart} = useCartContext ();
    return (
        <>  
            <div style={style.estilosDiv}>
                <i style={style.estilosIcono} className="medium material-icons">shopping_cart</i>
                <span>
                    {cart.length}
                </span>
            </div>
        </>
    );
};
const style = {
    estilosDiv:{
        display: "flex",
    },
    estilosIcono:{
        fontSize: "35px",
    }
}

export default CartWidget;
