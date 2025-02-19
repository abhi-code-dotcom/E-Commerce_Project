//its like a global store

import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/cartReducer';

const CartContext = createContext();


const getLocalCartData = () => {
  let localCartData = localStorage.getItem("myCart");
  if (localCartData == []) {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
};
const initialState = {
   // cart: [],
    cart : getLocalCartData(),
    total_item: "",
    total_price: "",
    shipping_fee: 5000,
};

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    const addToCart = (id, color, amount, product) => {
      dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
    };

    const removeItem =(id) =>{
        dispatch({ type:"REMOVE_ITEM", payload : id })
    };

    // clear cart
    const clearCart =()=>{
        dispatch({ type:"CLEAR_CART"})
    }

    // for increment the products
    const setIncrement = (id) =>{
        dispatch({ type: "SET_INCREAMENT", payload: id})
    }

    // for decreament
    const setDecrease = (id) =>{
        dispatch({type:"SET_DECREMENT", payload: id})
    }

    // add data in localstorage
    useEffect(()=>{
        // dispatch({ type:"CART_TOTAL_ITEM"})
        // dispatch({type:"CART_TOTAL_PRICE"})
        dispatch({type:"CART_ITEM_PRICE_TOTAL"})
        localStorage.setItem("myCart",JSON.stringify(state.cart))
    },[state.cart])

    return( <CartContext.Provider value={{...state,addToCart,removeItem,clearCart,setIncrement,setDecrease}}>
        {children}
       
    </CartContext.Provider>
    );
};

const useCartContext = () =>{
    return useContext(CartContext);
};

export { CartProvider, useCartContext }