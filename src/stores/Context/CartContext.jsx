
import { useContext } from "react";
import { createContext, useState } from "react";


const CartContext= createContext()

  export const CartProvider=({children})=>{
   const [cartItems, setCartItems]= useState([])
   const [wishItems, setWishItems]= useState([])

   const addToCart=(item)=>{
    setCartItems([...cartItems,item])
   }

   const removeFromCart=(item)=>{
    setCartItems(cartItems.filter((a)=>a!==item))
   }
   const addToWishlist=(item)=>{
    setWishItems([...wishItems,item])
   }

   const removeFromWishlist=(item)=>{
    setWishItems(wishItems.filter((a)=>a!==item))
   }

   const clearCart = () => {
    setCartItems([]);
  }
   
  /*need to render this provider in index.js file too.*/  

   return(
    <CartContext.Provider value={{cartItems,addToCart,removeFromCart,wishItems,addToWishlist,removeFromWishlist,clearCart}}>
      {children}
    </CartContext.Provider>
   )
 }
/*custom hook to use anywhere in project, 
we have to pass our created context into useContext()hook */
 export const useCart=()=>{
  return useContext(CartContext)
 }