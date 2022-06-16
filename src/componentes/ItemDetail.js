import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";


const ItemDetail = ({ item }) => {
  const {id, titulo, autor, img, precio, stock} = item
  const [contador, setContador] = useState(0);
  const [itemCount, setItemCount] = useState(false);

  const {addToCart} = useCart()

  const onAdd = () => {
    const itemCart ={
      id,
      titulo,
      autor,
      img,
      precio,
      stock,
      cantidad : contador
    }
    alert("AGREGASTE : " + contador + " UNIDADES AL CARRITO");
    setItemCount(true);

    // agrego el producto seleccionado al carrito
    addToCart(itemCart);
  };

  return (
    <div>
      <div className="card mb-3 cardItemDetail" style={{ width: "68rem" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={item.img} className="imagenLibro img-fluid rounded-start" alt="imagen libro"/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-textTituloDetail">{item.titulo}</h5>
              <div className="card-textDescripcion">
                <small className="textReseña">{item.descripcion}</small>
              </div>
              <ul className="list-group list-group-flush">
                <li className="card-textAutorDetail">autor: {item.autor}</li>
                <li className="card-textIsbnDetail">isbn: {item.isbn}</li>
                <li className="card-textEditorialDetail">Editorial: {item.editorial}</li>
                <li className="card-precioDetail">$ {item.precio},00</li>
                
                {!itemCount ? (
                  <ItemCount
                    stock={item.stock}
                    onAdd={onAdd}
                    initial={itemCount}
                    contador={contador}
                    setContador={setContador}
                  />
                ) : (
                  <Link to="/cart">
                    <button type="button" className="btn btn-secondary btnChekOut">Ir a Carrito</button>
                  </Link>
                )}
                <li className="card-textStockDetail">Stock: {item.stock} unidades</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemDetail; 


