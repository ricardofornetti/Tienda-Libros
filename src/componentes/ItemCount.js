
import "bootstrap/dist/css/bootstrap.min.css";


const ItemCount = ({ stock, onAdd, contador, setContador }) => {
  
 


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

  
  return (
    <div>
      <button onClick={restarProducto} type="button btnRestar" className="btn btn-primary">-</button>
      <button type="button" className="btn btn-primary btnContador">{contador}</button>
      <button onClick={sumarProdructo} type="button btnSumar" className="btn btn-primary">+</button>
      {stock ? (
        <button  type="button" className="btn btn-dark btnComprar" onClick={onAdd}>Agregar a Carrito</button>
      ) : (
        <button type="button" className="btn btn-dark btnComprar">Comprar</button>
      )}
    </div>
  );
};

export default ItemCount;
