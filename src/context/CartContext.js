import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext(); // creando el contexto

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  //funcion para agregar productos al carrito
  const addToCart = (item) =>{

    //si el producto existe en el carrito sumo cantidades
    const ItemInCart = carrito.find((itemIn) => itemIn.id === item.id)
    if(ItemInCart){
      const NewCart = carrito.map((ItemExists) => {
        if(ItemExists.id === item.id){
          return {...ItemExists, cantidad: ItemExists.cantidad + item.cantidad} //sumo cantidades
        }else{
          return ItemExists
        }
      })
      setCarrito(NewCart)
    }else{
      setCarrito([...carrito, item])
    }
  }
  const isInCart = (id) => {
    return carrito.some(prod => prod.id === id)
  }

  //funcion vaciar carrito
  const emptyCart = () =>{
    setCarrito([])
  }

  //funcion borrar un producto del carrito
  const remove = (id) => {
    setCarrito(carrito.filter((prod) => prod.id !== id))
  }

  //funcion cantidad de items en el carrito
  const quantityCart = () =>{
    return carrito.reduce((acc, prod) => acc += prod.cantidad, 0)
  }
  //funcion precio total x item
  const costoTotalItem = () =>{
    return carrito.reduce((acc, prod) => acc +=prod.cantidad * prod.precio, 0)
  }

  //funcion IVA
  const impuestos = () =>{
    return costoTotalItem() * 0.21;
  }

  //funcion IVA
  const sumaTotal = () =>{
    return costoTotalItem() * 1.21;
  }

  




  return (
    <CartContext.Provider value={{ 
      carrito, 
      addToCart, 
      isInCart, 
      emptyCart, 
      remove, 
      quantityCart, 
      costoTotalItem,
      impuestos,
      sumaTotal
      }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext)

