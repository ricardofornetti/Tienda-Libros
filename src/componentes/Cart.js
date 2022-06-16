import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
import CarritoVacio from "./CarritoVacio";
import { Link } from "react-router-dom";


const Cart = () => {
  const {carrito, remove, emptyCart, costoTotalItem, precioPorProducto,  totalPrice,quantityCart} = useCart()
  
  return (
    <>
          <h2 className='self-center p-6 leading-tight tracking-wider text-center text-gray-800 uppercase md:text-2xl sm:text-xl font-amastic'>Mi Carrito</h2>
    
          {!carrito.length ? (
            <CarritoVacio></CarritoVacio>
          ): (
    
          <div>
          
         
          {carrito.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          
            <div>
            <button onClick={()=>{emptyCart()}} type="button" className="btn btn-dark">VACIAR CARRITO</button>
              
              <div>
                <div>
                    <p>Cantidad de items: {quantityCart()}</p>
                </div>
                <div>
                    <p>Total Compra: ${costoTotalItem()}</p>
                </div>
                
                {
                  /*
                  <Link to='/checkout' className='px-4 py-2 text-lg tracking-widest text-center text-white duration-200 bg-red-600 rounded-lg hover:bg-red-400 transition-color focus:outline-none font-shadows'>Finalizar Compra </Link>
                   */
                }
                
              </div>
            </div>   
        </div>
     )} </>
     );
      };
  

export default Cart;



/*
<div>
      {!carrito.length ? (
      <div>Carrito vacio</div>
      ):(
        carrito.map((item) => 
          <div key={item.id}>
            
            <img className="imagenCart" src={item.img} alt="imagen Producto en carrito"></img>
            <div className="tituloCart">Producto: {item.titulo}</div>
            <div>Precio: $ {item.precio}</div>
            <div>Cantidad : {item.cantidad} unidades</div>
            <button onClick={()=>{remove(item.id)}} type="button" className="btn btn-warning">ELIMINAR PRODUCTO</button>
            <div>Precio x Item : {precioPorProducto()}</div>
            <div>Costo Total: {costoTotalItem()}</div>
            <div>Total Price: {totalPrice()}</div>
          </div>
          )
      )}
      
    </div>
*/
/*
<>
  <h2 className='self-center p-6 leading-tight tracking-wider text-center text-gray-800 uppercase md:text-2xl sm:text-xl font-amastic'>Mi Carrito</h2>
  {!carrito.length ? (
      <div>Carrito vacio</div>
      :(
        {carrito.map((item) => (
          <CartItem key={item.id} item={item}></CartItem>
          ))}
       
        
        
        </>  
    
    )}  
  );
  
};
*/