import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  const {
    id,
    titulo,
    
    img,
   
  } = producto;

  return (
    <>
      <div className="card mb-3" style={{ width: "16rem" }}>
      <Link to={`/item/${id}`} style={{ textDecoration: "none" }}>
            <h5 className="card-textTitulo">{titulo}</h5>
          </Link>
        <Link to={`/item/${id}`}><img src={img} className="imagenLibro img-fluid rounded-start"alt="imagen libro"/></Link>
        
        
      </div>
    </>
  );
};

export default Item;
