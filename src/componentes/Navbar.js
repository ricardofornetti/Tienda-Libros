import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import libreria from '../imagenes/libreria.jpg';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      /* Fragment */
      <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
          <div className="container-fluid">
            <label className="navbar-brand">
              <Link to ='/' className='linkImg'> {/*Linkeo al brand */}
              <img className="imagenLogo" src={libreria} alt="logo Libreria"></img>
              </Link>
            </label>
            <button
              className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to ='/'style={{textDecoration:'none'}}> {/*Linkeo al brand */}
                    <label className="nav-link active">Inicio</label>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/category/1'style={{textDecoration:'none'}}>
                    <label className="nav-link active" >libros</label>
                  </Link>  
                </li>
                <li className="nav-item">
                  <Link to='/category/3'style={{textDecoration:'none'}}>
                    <label className="nav-link active" >peliculas</label>
                  </Link>
                </li>
                <form className="d-flex" role="search">
                  <input className="form-control me-2 formBuscar" type="search" placeholder="Titulo, Autor, ISBN" aria-label="Search"/>
                  <button className="btn btn-outline-dark btnBuscar">Buscar</button>
                </form>
              </ul>              
            </div>
            <CartWidget/> 
          </div>          
          <div>
            
          </div>          
        </nav>
    </div>
    
  </>
  /*Cierro Fragment */
    );
}

export default Navbar;

