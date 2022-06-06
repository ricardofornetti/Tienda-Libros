import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ItemCount = ({ stock, onAdd }) => {
  const [contador, setContador] = useState(0); // agrego un estado que setea el estado inicial

  //SUMAR PRODUCTOS AL CARRITO
  const sumarProdructo = () => {
    if (contador < stock) {
      //funcion donde se va incrementando el estado inicial y no superara el stock
      setContador(contador + 1);
    }
  };

  //RESTAR PRODUCTOS AL CARRITO

  const restarProducto = () => {
    // se va restando 1
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  /*
  const onAdd = () => {

    alert("AGREGASTE : " + contador + " UNIDADES AL CARRITO");

}
*/
  return (
    <div>
      <button
        onClick={restarProducto}
        type="button btnRestar"
        className="btn btn-primary"
      >
        -
      </button>
      <button type="button" className="btn btn-primary btnContador">
        {contador}
      </button>
      <button
        onClick={sumarProdructo}
        type="button btnSumar"
        className="btn btn-primary"
      >
        +
      </button>
      {stock ? (
        <button
          type="button"
          className="btn btn-secondary btnComprar"
          onClick={() => onAdd(contador)}
        >
          Comprar
        </button>
      ) : (
        <button type="button" className="btn btn-secondary btnComprar">
          Comprar
        </button>
      )}
    </div>
  );
};

export default ItemCount;
