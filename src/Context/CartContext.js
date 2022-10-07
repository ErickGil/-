import React, {createContext,useState,useContext}  from 'react';   

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);
const CartProvider = ( {children} ) => {

    const [cart, setCart] = useState([])

    const addItem = (item, cantidad) => {
        if (existItem(item.id)) {
            setCart(cart.map (product => {
                return product.id === item.id ? {...product, cantidad: product.cantidad + cantidad } : product
            } ) )
        }else{
            setCart([...cart,{...item, cantidad}]);
        }
    };
    const precioTotal = () => {
        return cart.reduce ((prev,act) => prev + act.cantidad * act.price, 0);
    }
    const productsTotal = () => cart.reduce ((acumulador, productoActual) => acumulador + productoActual.cantidad, 0);

    const existItem = (id) => cart.some((producto) => producto.id === id) ;

    const removeItem = (id) => {
        const arrayFiltrado = cart.filter((producto) => {
            return producto.id !== id
        });
        setCart(arrayFiltrado);
    };

    const clear = () => {
        setCart([])
    };

        return (
            <>
                <CartContext.Provider value={{cart, removeItem, clear, addItem, precioTotal, productsTotal} }> {children} </CartContext.Provider>
            </>
        )
}

export default CartProvider;
