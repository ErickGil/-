import { Text,Heading,useToast,} from "@chakra-ui/react";
import React from "react"; 
import { ItemCount } from "../../../Components/ItemCount"; 

const ItemDetail = ({producto}) => {
    const toast = useToast();
    const onAdd = (contador) => {
        toast({
            title: `Añadiste ${contador}  ${producto.name} `,
            description:"Nos comunicaremos contigo en 15 min aprox",
            status: "success",
            duration: 2000,
            isClosable: true,
            position: 'top-right',
        });
    };



    return(
        <>
            <div style={estilos.container}>
                <img style={estilos.img} src={producto.image} alt="foto" />
                <div style={estilos.Infocontainer} >
                    <Heading mb={4}>{producto.name} </Heading>
                    <Text fontSize='3xl'>Precio ${producto.price} </Text>
                    <Text fontSize='2xl'>Descripcion : {producto.description} </Text>
                    <Text fontSize='2xl'>Consultar por sabores de temporada </Text>
                    <Text fontSize='2xl'>Stock : {producto.stock} </Text>
                    <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} className="botones" />
                </div>
            </div>
        </>
    )
}
const estilos = {
    container:{
        display: 'flex',
        flexDirection: 'row',
        alingItems:'center',
        width: '80%',
        marginLeft: "auto",
        marginRight: "auto",
        color:"black"
    },
    Infocontainer: {
        display: 'flex',
        flexDirection: 'column',
        alingItems:'center',
        padding: '50px',
        
    },
    img: {
        width: '40%',
    
    }

}

export default ItemDetail