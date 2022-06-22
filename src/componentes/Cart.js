import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
import CarritoVacio from "./CarritoVacio";
import { Link } from "react-router-dom";
import borrar from 'bootstrap-icons/icons/trash-fill.svg'


const Cart = () => {
  const {carrito, emptyCart, costoTotalItem, quantityCart} = useCart()
  
  return (
    <>
          <h2 className='tituloMiCarrito'>Mi Carrito</h2>
          {!carrito.length ? (
            <CarritoVacio></CarritoVacio>
          ): (
          <div>
          {carrito.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

            <div>
            <img onClick={()=>{emptyCart()}} className='imagenBorrar' src={borrar} alt="imagen Borrar"></img>
            <button onClick={()=>{emptyCart()}} type="button" className="btn btn-dark">
            Vaciar Carrito
              </button>
              
              <div>
                <div>
                    <p>Cantidad de items: {quantityCart()}</p>
                </div>
                <div>
                    <p>Total Compra: ${costoTotalItem()}</p>
                </div>
                {
                  <Link to='/checkout'>
                    <div className="d-grid gap-2 col-6 mx-auto">
                      <button className="btn btn-success btnFinalizarCompra" type="button" style={{textDecoration:'none'}}>Finalizar Compra</button>
                      </div>
                    </Link>
                }
              </div>
            </div>   
        </div>
     )} 
     </>
     );
      };
  

export default Cart;


