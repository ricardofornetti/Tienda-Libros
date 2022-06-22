import React from 'react'
import { Link } from 'react-router-dom';
import arrowLeft from 'bootstrap-icons/icons/arrow-left-circle-fill.svg'
import carritovacio from '../imagenes/carritovacio.png';


const CarritoVacio = () => {
  return (
    <>
      <div>
        <img className="imagenCarritoVacio" src={carritovacio} alt="logo Libreria"></img>
      </div>
      <div className="items-center p-4 tracking-wider uppercase text-black-500 font-shadows">
        <p className="textCarritoVacio">El carrito esta vacio!</p>
        <p className="textCarritoVacio">No tienes articulos en el carrito</p>

        <img className="imagenFlecha" src={arrowLeft} alt="imagen flecha"></img>
        <Link to="/" style={{ textDecoration: "none" }}>
          <button type="button" className="btn btn-dark">Volver al Inicio...</button>
        </Link>
      </div>
    </>
  );
  
}

export default CarritoVacio


