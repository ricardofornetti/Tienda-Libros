import React, { createContext, useState } from "react";

export const CartContext = createContext(); // creando el contexto

const CartContextProvide = ({ children }) => {
  const [compra, setCompra] = useState([]);

  const addItem = (item, cantidad) => {
    const found = compra.find((el) => el.id == item.id);

    const encontrarDuplicado = (found, compra) => {
      compra.forEach((element) => {
        if (found.id === element.id) {
          return (element.quantity = cantidad + element.quantity);
        }
      });
    };
    if (found) {
      encontrarDuplicado(found, compra);
    } else {
      setCompra([...compra, item]);
    }
  };

  return (
    <CartContext.Provider value={{ compra, addItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvide;
