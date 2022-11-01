import React, {  useState } from "react";
import { Text, Button } from '@chakra-ui/react'
import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';
import { useCartContext } from "../../../Context/CartContext";
import Swal from 'sweetalert2'
const Formulario = () => {
    const { cart, precioTotal, clear } = useCartContext();
    const [comprador, setComprador] = useState({});
    const order = {
        comprador: comprador,
        items: cart.map((product) => ({ id: product.id, name: product.name, cantidad: product.cantidad })),
        total: precioTotal(),
        date: serverTimestamp()
    }
    const entradaInfo = (e) => {
        setComprador({
            ...comprador,
            [e.target.name]: e.target.value,
        });
    };
    const handleClick = () => {
        function guardarDb (){
            const db = getFirestore();
            const ordersCollection = collection(db, "orders");
            addDoc(ordersCollection, order)
                .then(({ id }) => Swal.fire(
                    'Gracias por tu Compra',
                    `Su orden de compra es: ${id}`,
                    'success',
                    )) 
        } 
        comprador.nombre && comprador.telefono && comprador.email ?  guardarDb() : Swal.fire(
            'Error',
            "Complete el formulario",
            'error',
            )  ;
    }
    return (
        <>
            <Text>Completa con sus datos para generar la orden de compra</Text>
            <div style={style.estilosFormulario} className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">account_circle</i>
                            <input onChange={entradaInfo} name="nombre"  id="icon_prefix" type="text" className="validate"></input>
                            <label className="active" >Nombre</label>
                        </div>
                        <div className="input-field col s6">
                            <i className="material-icons prefix">phone</i>
                            <input onChange={entradaInfo} name="telefono"  id="icon_telephone" type="number" className="validate "></input>
                            <label className="active" >Telefono</label>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input onChange={entradaInfo} name="email" id="email" type="email" className="validate"  ></input>
                                <label className="active" >Email</label>
                                <span className="helper-text" data-error="wrong" data-success="right">No olvide guardar su orden de compra</span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <section style={style.estilosTitulo}>
                <Text fontSize='2xl'>
                    El total es de: $ {precioTotal()}
                </Text>
            </section>
            <section style={style.estilosBotones}>
                <Button style={style.estilosBotones} onClick={handleClick} colorScheme='blue'>Generar Orden</Button>
                <Button onClick={clear} colorScheme="red">Limpiar carro</Button>
            </section>
        </>
    )
}
const style = {
    estilosBotones: {
        marginRight: "10px",

    },
    estilosTitulo: {
        textAlign: "center",
        width: "100%",
        marginBottom: "10px",
    },
    estilosFormulario: {
        backgroundColor: "white",
        width: "90%",
        margin: "10px auto",
        borderWidth: "thick",
        borderRadius: "5px",
    },
}
export default Formulario