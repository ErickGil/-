import React from "react";


const ItemListContainer = ({greeting}) => {
    return (
        <>
            <div style ={style.estiloDiv} ><h1>{greeting}</h1></div>
        </>
    )
    }

    const style = {
        estiloDiv : {
            display : "flex",
            justifyContent: "center",
        }
    }
export default ItemListContainer;