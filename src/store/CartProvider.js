import {useReducer} from "react"
import CartContext from "./cart-context";

const defaultcartState={
    items:[],
    totalAmount:0
}
const cartReducer=(state,action)=>{
return defaultcartState;
}
const CartProvider=(props)=>{
 const[cartState,dispatchCartAction]= useReducer(cartReducer,defaultcartState)
    const addItemToCart=(item)=>{
        dispatchCartAction({
            type:`ADD`,
            item:item
        })
    }
    const removeItemToCart=(id)=>{}
    const cartContext={
        items:[],
        totlaAmount:0,
        addItem:addItemToCart,
        removeItem:removeItemToCart
    }
return <CartContext.Provider value={cartContext}>
    {props.children}
</CartContext.Provider>
}

export default CartProvider;