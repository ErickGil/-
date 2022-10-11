import React,{useState,useEffect} from "react";
import { doc, getDoc } from "firebase/firestore";
import {Progress } from "@chakra-ui/react";
import ItemDetail from "./ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config";


    const ItemDetailContainer = () => {
        
        const [item, setItem] = useState({} )
        const [loading, setLoading] = useState (true)
        const {detalleId} = useParams ();
    
        useEffect(() => {
            const queryDoc = doc(db,"products",detalleId);
            getDoc(queryDoc)
                .then((res) => {
                    setItem({id:res.id, ...res.data()})
                    setLoading(false)
                } )
        },[detalleId])


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