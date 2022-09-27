import React from "react";
import { Text,SkeletonCircle, SkeletonText,Box } from "@chakra-ui/react";
import {products} from "../../assets/productos";
import { customFetch } from "../../utils/customFetch";
import { useState, useEffect} from "react";
import { ItemList } from "../../Components/ItemList";
import { useParams } from "react-router-dom";



const ItemListContainer = ({ greeting }) => {

    let {idCategoria} = useParams();
    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState (true)

    useEffect(() => {
        customFetch(products)
            .then(res => {
                const result = res.filter(products => products.category === idCategoria);
                idCategoria ? setListProducts(result) : setListProducts(res);
                setLoading(false)
            } )
},[idCategoria])

        
    

    return (
        <>
            <div style={style.estiloDiv}>
                <Text fontSize="3xl">{greeting}</Text>
            </div>
            {
            loading ? 
            <Box padding='6' boxShadow='lg' bg='white' height='600px'>
            <SkeletonCircle size='12' />
            <SkeletonText mt='4' noOfLines={10} spacing='6' />
            </Box>
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
