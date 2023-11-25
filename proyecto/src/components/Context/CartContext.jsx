import React, { useState, useContext, createContext} from 'react';

const CartContext = createContext('');



const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const agregarProduct = (product, cantidad) => {
    
    if (isInCart(product.id)) {
      setCart(
        cart.map((item) => {
          return item.id === product.id
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item;
        })
      );
    } else {
      setCart([...cart, { ...product, cantidad }]);
    }
  };

  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.cantidad * act.price, 0);
  };

  const totalProducts = () =>
    cart.reduce(
      (acumulador, productoActual) => acumulador + productoActual.cantidad,
      0
    );

  const clearCart = () => setCart([]);

  const isInCart = (id) =>
    cart.find((item) => item.id === id) ? true : false;

  const removeProduct = (id) =>
    setCart(cart.filter((item) => item.id !== id));

  return (
    <CartContext.Provider
      value={{
        clearCart,
        isInCart,
        removeProduct,
        agregarProduct,
        totalPrice,
        totalProducts,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
export const useCartContext = () => useContext(CartContext);