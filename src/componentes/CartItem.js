import React from 'react'
import { useCart } from "../context/CartContext";

const CartItem = ({item}) => {
    const { remove } = useCart()
    const { titulo, cantidad, precio, id, img,} = item;

  return (
    <div>
        <div className="tituloCart">Producto: {titulo}</div>
        <img className="imagenCart" src={img} alt="imagen Producto en carrito"></img>
        <div>Precio Unitario$ {precio}</div>
        <div>Cantidad : {cantidad} unidades</div>
        <div className='text-gray-700  md:text-lg sm:text-sm font-amastic'>
            Subtotal ${cantidad * precio}
        </div>
      <button onClick={()=>{remove(id)}} type="button" className="btn btn-warning">ELIMINAR PRODUCTO</button>
    </div>
  )
}

export default CartItem;

