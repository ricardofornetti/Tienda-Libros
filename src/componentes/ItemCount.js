import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const ItemCount = ({stock}) => {
  const[contador, setContador]=useState(0)

  //SUMAR PRODUCTOS AL CARRITO
  const sumarProdructo = () =>{
    if(contador < stock){
      setContador(contador + 1)
    }
  }

  //RESTAR PRODUCTOS AL CARRITO

  const restarProducto = () =>{
    if(contador > 0){
      setContador(contador - 1)
    }
  }

  return (

    <div>
    <div className="btn-group" role="group" aria-label="Basic outlined example">
      <button onClick={restarProducto} type="button" className="btn btn-primary">-</button>
      <button type="button" className="btn btn-primary">{contador}</button>            
      <button onClick={sumarProdructo} type="button" className="btn btn-primary">+</button>
      
    </div>
    </div>    
  );
}

export default ItemCount;


/*
<div>
        <button onClick={sumar}>+</button>
        <span>{contador}</span>
        <button onClick={restar}>-</button>
    </div>
*/