import React from "react";
import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from "./Container/ItemListContainer/ItemListContainer"
import { ChakraProvider,   } from '@chakra-ui/react'
import "materialize-css/dist/css/materialize.min.css";
import ItemDetailContainer from "./Container/ItemDetailContainer/ItemDetailContainer";
import { Routes,Route,BrowserRouter  } from "react-router-dom";
import { Cart } from "./Container/CartView/Cart";





const App = () =>{

  const mensaje = "Nos diferenciamos por atención personalizada y un producto de calidad."

  return (
    <>
    <ChakraProvider>
        <BrowserRouter>
          <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting = {mensaje} />}/>
          <Route path="/carrito" element= {<Cart/>}/>
          <Route path="/categoria/:idCategoria"  element={<ItemListContainer greeting = {mensaje} />} />
          <Route path = "/detalles/:id" element={<ItemDetailContainer/>}/>
        </Routes>
        </BrowserRouter>
        
    </ChakraProvider>
    </>
    
  )
}

export default App;
