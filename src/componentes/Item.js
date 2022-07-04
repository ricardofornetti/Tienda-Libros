import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  const {id, img, } = producto;

  return (
    <div>
       <div className="card mb-3" style={{ width: "15rem" }}>
      <Link to={`/item/${id}`} style={{ textDecoration: "none" }}></Link>
      <Link to={`/item/${id}`}><img src={img} className="imagenLibro img-fluid rounded-start"alt="imagen libro"/></Link>
      <div>
      <Link to={`/item/${id}`}><button type="button" className="btn btn-dark btnDetalles">Detalles</button></Link>
      </div>
    </div>
    </div>
  );
};

export default Item;



 