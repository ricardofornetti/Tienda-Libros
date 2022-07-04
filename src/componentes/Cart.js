import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
import CarritoVacio from "./CarritoVacio";
import { Link } from "react-router-dom";




const Cart = () => {
  const { carrito, costoTotalItem, quantityCart, impuestos, sumaTotal } =
    useCart();

  return (
    <>
      <h2 className="tituloMiCarrito">Mi Carrito</h2>
      {!carrito.length ? (
        <CarritoVacio></CarritoVacio>
      ) : (
        <div>
          {carrito.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="cartItem">
            <div className="div1"></div>
            <div className="div2">
            <p className="tituloCart"><strong>Resumen</strong></p>
              <p className="articuloCart">Items: {quantityCart()}</p>
              <p className="articuloCart">Subtotal: $ {costoTotalItem()}</p>
              <p className="articuloCart">IVA: $ {impuestos()}</p>

              <p className="articuloCart">
                <strong>Total: $ {sumaTotal()}</strong>
              </p>
              <Link to="/checkout" style={{ textDecoration: "none" }}>
                <div className="d-grid gap-2 col-6 mx-auto">
                  <button
                    className="btn btn-dark btnFinalizarCompra"
                    type="button"
                  >
                    Finalizar Compra
                  </button>
                </div>
              </Link>
            </div>
            <div className="div3">
              

              
            </div>
          </div>
        </div>
      )}
    </>
  );
};
  

export default Cart;


