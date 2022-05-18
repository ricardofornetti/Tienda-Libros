import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import cartIcon from 'bootstrap-icons/icons/cart3.svg'

const CartWidget = () => {
    return (

    /* Fragment */
        <>
        <img className='imagenCarrito' src={cartIcon} alt="imagen carrito"/>       
        <span className=" numberCarrito translate-middle badge rounded-pill bg-danger">
            4+
            <span class="visually-hidden">unread messages</span>
        </span> 
        </>
  /*Cierro Fragment */
    );
}

export default CartWidget;
