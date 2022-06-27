import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
import CarritoVacio from "./CarritoVacio";
import { Link } from "react-router-dom";




const Cart = () => {
  const {carrito, costoTotalItem, quantityCart, impuestos, sumaTotal} = useCart()
  
  return (
    <>
      <h2 className="tituloMiCarrito">Mi Carrito</h2>
      {!carrito.length ? (
        <CarritoVacio></CarritoVacio>
      ) : (
        <div>
          {carrito.map((item) => (
            <CartItem key={item.id} item={item}  />
          ))}
              <div className="cartItem">
        <div className="div1"></div>
        <div className="div2 border"></div>
        <div className="div3 border"> 
          <p className="resumenCart"><strong>Resumen</strong></p>
          <p>Items: {quantityCart()}</p>
          <p>Subtotal: $ {costoTotalItem()}</p>
          <p>IVA: $ {impuestos()}</p>
          
            <p><strong>Total: $ {sumaTotal()}</strong></p>

            <Link to='/checkout' style={{textDecoration:'none'}}>
              <div className="d-grid gap-2 col-6 mx-auto">
              <button className="btn btn-dark btnFinalizarCompra" type="button" >Finalizar Compra</button>
              </div>
            </Link>
          
        </div> 
      </div> 
          
        </div>
      )}
    </>
  );
      };
  

export default Cart;


/*
<div>
            <img onClick={()=>{emptyCart()}} className='imagenBorrar' src={borrar} alt="imagen Borrar"></img>
            <button onClick={()=>{emptyCart()}} type="button" className="btn btn-dark">Vaciar Carrito</button>
              
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

            
            

            <div>
            <p className="resumenCart">Resumen</p>
            <p>Cantidad de items: {quantityCart()}</p>
          </div>

          <Link to="/checkout" style={{ textDecoration: "none" }}>
            <div className="d-grid gap-2 col-6 mx-auto">
              <button className="btn btn-dark btnFinalizarCompra" type="button">
                Finalizar Compra
              </button>
            </div>
          </Link>
*/