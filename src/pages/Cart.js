import { useContext } from 'react'
import { Context } from "../Context"
import toast, { Toaster } from 'react-hot-toast';

import './Cart.css'
import 'bootstrap/dist/css/bootstrap.min.css'
function Cart() {

    const { cart, removeProduct, updateQuantity, clearCart } = useContext(Context)
    let total = 0
    cart.forEach((product) => {
        return total += product.price * product.qty
    })




    return (
        <div className='mydiv'>
            <div className="CartContainer">
                <Toaster
                    position="top-right"
                    reverseOrder={false}
                />
                <div className="Header mt-5">
                    <h3 className="Heading">Shopping Cart</h3>
                    <h5 className="Action" onClick={() => {
                        clearCart();
                        toast("cart cleared!");
                    }}>Remove all</h5>
                </div>

                {/* Single Item */}
                {cart?.map((product) => {
                    return (
                        <div key={product.id} className="Cart-Items mt-3">
                            <div className="image-box">
                                <img src={product.image} id='imgg' height="120px" alt={product.descripation} />
                            </div>
                            <div className="about">
                                <h1 className="title">{product.title}</h1>
                            </div>
                            <div className="counter">
                                <div className="btn" onClick={() => updateQuantity(product.id, 1)}>+</div>
                                <div className="count">&nbsp; {product.qty} &nbsp;</div>
                                <div className="btn" onClick={() => updateQuantity(product.id, 2)}>-</div>
                            </div>
                            <div className="prices">
                                <div className="amount">₹{product.price}</div>
                                <div className="save"><u>Save for later</u></div>
                                <div onClick={() => {
                                    removeProduct(product.id);
                                    toast("Item Removed from cart!");
                                }} className="remove"><u>Remove</u></div>
                            </div>
                        </div>
                    )
                })}



                <div className="checkout mb-5">
                    <div className="total">
                        <div>
                            <div className="Subtotal">Sub-Total</div>
                            <div className="items">{cart.length} items</div>
                        </div>
                        <div className="total-amount">₹{total}</div>
                    </div>
                    <button className="button">Checkout</button></div>
            </div></div>
    )
}

export default Cart