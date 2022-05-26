import React from 'react'
import ItemCount from './ItemCount'
import 'bootstrap/dist/css/bootstrap.min.css';

/*
<div classNameNameName="card" style={{width:'18rem', margin:'.5rem'}}>
            <img  classNameNameName="card-img-top imagenLibro"/>
            <div classNameNameName="card-body">            
                <label classNameNameName="card-text">Titulo:</label>
                <label>{name}</label>
                <label classNameNameName="card-text">Autor:</label><br></br>
                <label>{autor}</label><br></br>
                <label classNameNameName="card-text">isbn:</label><br></br>
                <label>{isbn}</label><br></br>
                <label classNameNameName="card-text">Reseña:</label><br></br>
                <label>{description}</label>
                <label classNameNameName="card-text">Precio:  {precio}</label><br></br>
                <label classNameNameName="card-text">Stock: {stock}</label>
            </div>
            <ItemCount stock={stock} />
        </div>
 */


const Item = ({producto}) => {
    const{name, autor, isbn, Editorial,  description, img, precio, stock} = producto

    return (
      <>
      <div className="card mb-3" style={{'max-width': '950px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={img} className="imagenLibro img-fluid rounded-start" alt="imagen libro"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-autor">Autor : {autor}</p>
        <p className="card-text">Cant:<ItemCount stock={stock} /></p>
        <p className="card-precio">{precio} </p>
        <p className="card-text">ISBN:{isbn}</p>
        <p className="card-text"><small className="text-reseña">{description}</small></p>
        <p className="card-text">Editorial: {Editorial}</p>        
        <p className="card-text">Stock: {stock}</p>   
        
      </div>
    </div>
  </div>
  
</div>
      </>
      
);
}

export default Item




