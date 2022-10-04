import React from "react";
import { Link } from "react-router-dom";

const ItemCompra = () =>{

    return(
        <>
        <Link style={style.estiloBoton} to={"/carrito"} className="waves-effect waves-light btn "><i className="material-icons left">monetization_on</i>Finalizar compra</Link>
        </>
    )
}
const style = {
    estiloBoton:{
        margin:"0 0 0 38px",
    }
}
export default ItemCompra