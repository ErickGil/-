import React from "react";
import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from "../src/Container/ItemListContainer"




const App = () =>{

  const mensaje = "Proximamente... Los Productos que Deseas"

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting = {mensaje} />
    </>
    
  )
}

export default App;
