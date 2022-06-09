import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  const {
    id,
    titulo,
    autor,
    isbn,
    editorial,
    descripcion,
    img,
    precio,
    category,
    stock,
  } = producto;

  return (
    <>
      <div className="card mb-3" style={{ width: "16rem" }}>
        <Link to={`/item/${id}`}>
          <img
            src={img}
            className="imagenLibro img-fluid rounded-start"
            alt="imagen libro"
          />
        </Link>
        <div className="card-body">
          <Link to={`/item/${id}`} style={{ textDecoration: "none" }}>
            <h5 className="card-textTitulo">{titulo}</h5>
          </Link>

          <ul className="list-group list-group-flush">
            <li className="card-textAutor">autor: {autor}</li>
            <li className="card-textIsbn">isbn: {isbn}</li>
            <li className="card-textEditorial">Editorial: {editorial}</li>
            <li className="card-textStock">Stock: {stock} unidades</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Item;
