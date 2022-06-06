import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const test = useContext(CartContext);

  return (
    <div>
      {test.compra.length === 0 ? (
        <p>Carrito vacio</p>
      ) : (
        test.compra.map((item) => <p>{test.titulo}</p>)
      )}
    </div>
  );
};

export default Cart;
