import { useCart } from "../context/CartContext";


const Cart = () => {
  const {carrito, remove, emptyCart, costoTotalItem} = useCart()
  
 
  return (
    <div>
      {!carrito.length ? (
        <div>Carrito vacio</div>
      ) : (
        carrito.map((item) => 
          <div key={item.id}>
            
            <img className="imagenCart" src={item.img} alt="imagen Producto en carrito"></img>
            <div className="tituloCart">Producto: {item.titulo}</div>
            <div>Precio: $ {item.precio}</div>
            <div>Cantidad : {item.cantidad} unidades</div>
            <button onClick={()=>{remove(item.id)}} type="button" className="btn btn-warning">ELIMINAR PRODUCTO</button>
            <button onClick={()=>{emptyCart()}} type="button" className="btn btn-dark">VACIAR CARRITO</button>
            <div>Costo Total: {costoTotalItem()}</div>
          </div>
          )
      )}
    </div>
  );
};

export default Cart;



