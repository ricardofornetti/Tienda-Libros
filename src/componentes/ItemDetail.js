import React from 'react'
import ItemCount from './ItemCount'


const ItemDetail = ({item}) => {




  return (
    <>
      <div className="card mb-3" style={{width:'18rem', margin:'.5rem'}}>
        <img src={item.img} className="imagenLibro img-fluid rounded-start" alt="imagen libro"/>
        <div className="card-body">
          <h5 className="card-titulo">{item.titulo}</h5>
          <div className="card-text"><small className="text-reseña">{item.descripcion}</small></div>
          <ul className="list-group list-group-flush">
            <li className="card-textIsbn">isbn: {item.isbn}</li>
            <li className="card-textEditorial">Editorial: {item.editorial}</li>          
            <li li className="card-precio">{item.precio} </li>          
            <li className="card-textItemCount"><ItemCount stock={item.stock} /></li>
            <li className="card-textStock">Stock: {item.stock} unidades</li>
          </ul>
        </div>
      </div>


      </>
  )
}

export default ItemDetail;

