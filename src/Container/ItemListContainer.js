import React from "react";
import { Text } from "@chakra-ui/react";
import { ItemCount } from "../Components/ItemCount";
import { useToast } from "@chakra-ui/react";

const ItemListContainer = ({ greeting }) => {
    const toast = useToast();

    const onAdd = (contador) => {
        toast({
            title: `Añadiste ${contador} bolsas de hielo `,
            description:"Nos comunicaremos contigo en 15 min aprox",
            status: "success",
            duration: 2000,
            isClosable: true,
            position: 'top-right',
        });
    };

    return (
        <>
            <div style={style.estiloDiv}>
                <Text fontSize="3xl">{greeting}</Text>
            </div>
            <ItemCount initial={1} stock={6} onAdd={onAdd} />
        </>
    );
};

const style = {
    estiloDiv: {
        display: "flex",
        justifyContent: "center",
    },
};
export default ItemListContainer;
