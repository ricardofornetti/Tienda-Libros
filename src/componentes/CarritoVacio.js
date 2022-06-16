import React from 'react'
import { Link } from 'react-router-dom';
import cartIcon from 'bootstrap-icons/icons/cart3.svg'
import arrowLeft from 'bootstrap-icons/icons/arrow-left-circle-fill.svg'
import carritovacio from '../imagenes/carritovacio.png';


const CarritoVacio = () => {
  return (
    
        <div className="flex flex-col items-center justify-center max-w-full p-6 mx-auto lg:max-w-7xl lg:items-star">
            <div>
                
                <img className="imagenCarritoVacio" src={carritovacio} alt="logo Libreria"></img>
                
            </div>
            <div className="items-center p-4 tracking-wider uppercase text-black-500 font-shadows">
                <p className='textCarritoVacio'>El carrito esta vacio!</p>
                <p className='textCarritoVacio'>No tienes articulos en el carrito</p>
                
              <Link to='/' className='flex flex-row items-ri pt-4' style={{textDecoration:'none'}}>
              <img className='imagenFlecha' src={arrowLeft} alt="imagen flecha"></img>
                Volver al Inicio...</Link>
            </div>
        </div>
      );
  
}

export default CarritoVacio


