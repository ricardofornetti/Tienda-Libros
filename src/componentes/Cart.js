import { useCart } from "../context/CartContext";


const Cart = () => {
  const {carrito, remove, emptyCart } = useCart()
  
 
  return (
    <div>
      {!carrito.length ? (
        <button>Carrito vacio</button>
      ) : (
        carrito.map((item) => 
        
          <div>
          <div>Titulo: {item.titulo}</div>
          <img className="imagenCart" src={item.img} />
          <div>Precio: $ {item.precio}</div>
          <div>Cantidad : {item.cantidad} unidades</div>
          <button onClick={()=>{remove(item.id)}} type="button" class="btn btn-warning">ELIMINAR PRODUCTO</button>
          <button onClick={()=>{emptyCart()}} type="button" class="btn btn-dark">VACIAR CARRITO</button>
          </div>
          
          )
      )}
    </div>
  );
};

export default Cart;




/*
<div>
      {!carrito.length ? (
        <button>Carrito vacio</button>
      ) : (
        carrito.map((item) => <div ><img className="imagenCart" src={item.img} />
<p>{item.name}</p>
<button onClick={()=>{deleteItem(item.id)}}>borraritem</button>
</div>)
      )}
    </div>
  );
};

 */