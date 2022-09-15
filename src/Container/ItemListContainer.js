import React from "react";
import { Text,Spinner } from "@chakra-ui/react";
import {products} from "../assets/productos";
import { customFetch } from "../utils/customFetch";
import { useState, useEffect} from "react";
import { ItemList } from "../Components/ItemList";


const ItemListContainer = ({ greeting }) => {
    
    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState (true)

    useEffect(() => {
        customFetch(products)
            .then(res => {
                setLoading(false)
                setListProducts(res)
            } )
},[])


    

    return (
        <>
            <div style={style.estiloDiv}>
                <Text fontSize="3xl">{greeting}</Text>
            </div>
            {
            loading ? 
                <Spinner  thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
                ml="50%" /> 
            :
                <div style={style.estiloItems}><ItemList listProducts={listProducts} /></div> 
            }
        </>
    );
};

const style = {
    estiloDiv: {
        display: "flex",
        justifyContent: "center",
        paddingBottom: "50px",
        paddingTop: "100px",
        paddingLeft: "20px",
        backgroundColor: "#F3EED9"
        
    },
    estilosSpinner: {
        
    },
    estiloItems:{
        display:"flex",
            flexFlow:"row wrap",
            
    }
};
export default ItemListContainer;
