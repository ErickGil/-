import React,{useState,useEffect} from "react";
import { products } from "../../assets/productos";
import {Progress } from "@chakra-ui/react";
import ItemDetail from "./ItemDetail/ItemDetail"
import { customFetch } from "../../utils/customFetch";
import { useParams } from "react-router-dom";


    const ItemDetailContainer = () => {
        
        const [item, setItem] = useState({} )
        const [loading, setLoading] = useState (true)
        const {id} = useParams ();
    
        useEffect(() => {
            customFetch(products, parseInt(id)) 
            .then((res) => {
                setLoading(false)
                setItem(res)
                } )
        },[id])


        return (
            <>
            {
            loading ? 
            <Progress size='xs' isIndeterminate />
            :
                <ItemDetail producto ={item} />
            }
            </>
        )
    }

    export default ItemDetailContainer;