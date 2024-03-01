import { createContext, useState, useContext } from "react";

const cartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart,product]);
  };
  const removeCart = (productId) => {
    setCart(cart.filter((e) => e.id !== productId));
  };

  return (
    <cartContext.Provider value={{cart,addToCart, removeCart }}>
      {children}
    </cartContext.Provider>
  );
};

 export const useCart = () => {
  return useContext(cartContext);
};