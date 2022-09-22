import React,{useState,useEffect} from "react";
import { products } from "../../assets/productos";
import {Progress } from "@chakra-ui/react";
import ItemDetail from "./ItemDetail/ItemDetail"
    const ItemDetailContainer = () => {
        
        const [item, setItem] = useState([])
        const [loading, setLoading] = useState (true)
    
        useEffect(() => {
            new Promise((resolve, reject) => {
                setTimeout(() =>{
                    resolve(products)
                },2000)
            })
            .then((res) => {
                setLoading(false)
                setItem(res[2])
                } )
        },[])


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