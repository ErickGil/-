import React from "react";

export const CartWidget = () => {
    return (
        <>
            <i style={style.estilosIcono} className="medium material-icons">shopping_cart</i>
        </>
    );
};
const style = {
    estilosIcono:{
        fontSize: "35px",
    }
}

export default CartWidget;
