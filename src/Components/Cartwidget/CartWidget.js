import React from "react";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
export const CartWidget = () => {
    return (
        <>
            <ShoppingCartCheckoutIcon style={style.carroEstilo} />,
        </>
    );
};

const style = {
    carroEstilo: {
        alignSelf: "center",
    },
};

export default CartWidget;
