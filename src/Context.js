import { createContext, useState } from "react"
export const Context = createContext()
export const ContextProvider = ({ children }) => {


    // Active Cart
    const [cart, setCart] = useState([])

    // Functions
    const addProduct = (product) => {

        const exist = cart.find((item) => item.id === product.id)
        if (exist) {
            setCart(cart.map((item) => item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item))
            return
        } else {

            product.qty = 1
            setCart(prev => [...prev, product])
        }

    }
    const updateQuantity = (id, opr) => {
        const exist = cart.find((item) => item.id === id)
        if (exist.qty === 1 && opr === 2) return removeProduct(id);
        if (opr === 1) {
            setCart(cart.map((item) => item.id === id ? { ...exist, qty: exist.qty + 1 } : item))
            return
        } else {
            setCart(cart.map((item) => item.id === id ? { ...exist, qty: exist.qty - 1 } : item))
        }
    }
    const removeProduct = (id) => setCart(prev => prev.filter(product => product.id !== id))
    const clearCart = () => setCart([])


    return (
        <Context.Provider value={{ clearCart, addProduct, removeProduct, updateQuantity, cart }}>
            {children}
        </Context.Provider>
    )
}
