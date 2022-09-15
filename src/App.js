import React from "react";
import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from "../src/Container/ItemListContainer"
import { ChakraProvider } from '@chakra-ui/react'
import "materialize-css/dist/css/materialize.min.css";




const App = () =>{

  const mensaje = "Nos diferenciamos por atención personalizada y un producto de calidad."

  return (
    <>
    <ChakraProvider>
        <NavBar/>
        <ItemListContainer greeting = {mensaje} />
    </ChakraProvider>
    </>
    
  )
}

export default App;
