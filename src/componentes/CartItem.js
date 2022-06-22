import React from 'react'
import { useCart } from "../context/CartContext";
import borrar from 'bootstrap-icons/icons/trash-fill.svg'

const CartItem = ({item}) => {
    const { remove } = useCart()
    const { titulo, cantidad, precio, id, img,} = item;

  return (
    <>
        <div className="tituloCart">Producto: {titulo}</div>
        <img className="imagenCart" src={img} alt="imagen Producto en carrito"></img>
        <div>Precio Unitario$ {precio}</div>
        <div>Cantidad : {cantidad} unidades</div>
        <div className='text-gray-700  md:text-lg sm:text-sm font-amastic'>
            Subtotal ${cantidad * precio}
        </div>
        <img onClick={()=>{remove(id)}} className='imagenBorrar' src={borrar} alt="imagen Borrar"></img>
        <button onClick={()=>{remove(id)}} type="button" className="btn btn-warning">ELIMINAR PRODUCTO</button>
    </>
  )
}

export default CartItem;

