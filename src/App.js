import React from "react";
import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from "./Container/ItemListContainer/ItemListContainer"
import { ChakraProvider, Divider  } from '@chakra-ui/react'
import "materialize-css/dist/css/materialize.min.css";
import ItemDetailContainer from "./Container/ItemDetailContainer/ItemDetailContainer";




const App = () =>{

  const mensaje = "Nos diferenciamos por atención personalizada y un producto de calidad."

  return (
    <>
    <ChakraProvider>
        <NavBar/>
        <ItemListContainer greeting = {mensaje} />
        <Divider />
        <ItemDetailContainer/>
    </ChakraProvider>
    </>
    
  )
}

export default App;
