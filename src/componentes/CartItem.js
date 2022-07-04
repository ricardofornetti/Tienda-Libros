import React from 'react'
import { useCart } from "../context/CartContext";
import borrar from 'bootstrap-icons/icons/trash-fill.svg'
import agregar from 'bootstrap-icons/icons/plus-square-fill.svg'
import { Link } from 'react-router-dom';


const CartItem = ({item}) => {
    const { remove, emptyCart} = useCart()
    const { titulo, precio, id, img, cantidad} = item;

  return (
    <>
       <div className="cartItem">
        <div className="div1">
          <div><img className="imagenCart" src={img} alt="imagen Producto en carrito"></img></div>
        </div>
        <div className="div2">
          <div className='tituloCartItem'>{titulo}</div>
          <p className='descripcionCartItem'>Precio unitario: $ {precio}</p>
          <p className='descripcionCartItem'>Cantidad: {cantidad} unidades</p>
          <p className='descripcionCartItem'>Subtotal: $ {cantidad * precio}</p>

          <img onClick={()=>{remove(id)}} className='imagenBorrarCartItem' src={borrar} alt="imagen Borrar"></img>
          <button onClick={()=>{remove(id)}} type="button" className="btn btn-dark btnCartItem btn-sm">Eliminar Producto</button>

          <img onClick={()=>{emptyCart()}} className='imagenBorrarCartItem1' src={borrar} alt="imagen Borrar"></img>
          <button onClick={()=>{emptyCart()}} type="button" className="btn btn-dark btnCartItem btn-sm">Vaciar Carrito</button>

          <Link to="/"><img className='imagenBorrarCartItem1' src={agregar} alt="imagen Borrar"></img></Link>
          
          <Link to="/"><button type="button" className="btn btn-dark btnCartItem btn-sm">Agregar Producto</button></Link>   
        </div>
        <div className="div3"></div> 
      </div> 
    </>
  )
}

export default CartItem;


