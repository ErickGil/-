import React from "react";
import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from "./Container/ItemListContainer/ItemListContainer"
import { ChakraProvider,   } from '@chakra-ui/react'
import "materialize-css/dist/css/materialize.min.css";
import ItemDetailContainer from "./Container/ItemDetailContainer/ItemDetailContainer";
import { Routes,Route,BrowserRouter  } from "react-router-dom";
import { Cart } from "./Container/CartView/Cart";
import CartProvider from "./Context/CartContext";





const App = () =>{

  const mensaje = "Nos diferenciamos por atención personalizada y un producto de calidad."

  return (
    <>
    <ChakraProvider>
        <BrowserRouter>
          <CartProvider >
            <NavBar/>
            <Routes>
              <Route path="/sitio-react/" element={<ItemListContainer greeting = {mensaje} />}/>
              <Route path="/carrito" element= {<Cart/>}/>
              <Route path="/categoria/:idCategoria"  element={<ItemListContainer greeting = {mensaje} />} />
              <Route path = "/detalles/:detalleId" element={<ItemDetailContainer/>}/>
            </Routes>
          </CartProvider>
        </BrowserRouter>
        
    </ChakraProvider>
    </>
    
  )
}

export default App;
