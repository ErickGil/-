import React from "react";
import { Text,SkeletonCircle, SkeletonText,Box } from "@chakra-ui/react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useState, useEffect} from "react";
import { ItemList } from "../../Components/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config";



const ItemListContainer = ({ greeting }) => {

    const {idCategoria} = useParams();
    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState (true)

    useEffect(() => {
        const queryCollection= collection(db, 'products');
        if (idCategoria){
            const queryFilter = query(queryCollection, where("category", "==",idCategoria))
            getDocs(queryFilter)
                .then( res => setListProducts(res.docs.map(product => ({id:product.id, ...product.data()})) ))
        }else{
            getDocs(queryCollection)
                .then( res => setListProducts(res.docs.map(product => ({id:product.id, ...product.data()})) ))
            }
            setLoading(false)
            }, [idCategoria])

        
    

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
