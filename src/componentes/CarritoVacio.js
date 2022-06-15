import React from 'react'
import { Link } from 'react-router-dom';

const CarritoVacio = () => {
  return (
    
        <div className="flex flex-col items-center justify-center max-w-full p-6 mx-auto lg:max-w-7xl lg:items-star">
            
            <div className="items-center p-4 tracking-wider uppercase text-black-500 font-shadows">
                <p className='textCarritoVacio'>El carrito esta vacio!</p>
                <p className='textCarritoVacio'>No tienes articulos en el carrito</p>
                
              <Link to='/' className='flex flex-row items-center pt-4'>Volver al Inicio...</Link>
            </div>
        </div>
      );
  
}

export default CarritoVacio


