import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const ItemDetail = ({ item }) => {
  const test = useContext(CartContext);

  const [itemCount, setItemCount] = useState(0);

  const onAdd = (cantidad) => {
    alert("AGREGASTE : " + cantidad + " UNIDADES AL CARRITO");
    setItemCount(cantidad);

    // agrego el producto seleccionado al carrito
    test.addItem(item, cantidad);
  };

  return (
    <div>
      <div className="card mb-3 cardItemDetail" style={{ width: "68rem" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={item.img}
              className="imagenLibro img-fluid rounded-start"
              alt="imagen libro"
            />
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
                <li className="card-textEditorialDetail">
                  Editorial: {item.editorial}
                </li>
                <li li className="card-precioDetail">
                  {item.precio}{" "}
                </li>
                {/*<li className="card-textItemCount"><ItemCount stock={item.stock} /></li> */}
                {itemCount === 0 ? (
                  <ItemCount
                    stock={item.stock}
                    onAdd={onAdd}
                    initial={itemCount}
                  />
                ) : (
                  <Link to="/cart">
                    <button
                      type="button"
                      className="btn btn-secondary btnChekOut"
                    >
                      CheckOut
                    </button>
                  </Link>
                )}
                <li className="card-textStockDetail">
                  Stock: {item.stock} unidades
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemDetail; 


