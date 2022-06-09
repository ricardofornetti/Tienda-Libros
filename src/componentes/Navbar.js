import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logoLibreria from '../imagenes/logoLibreria.png';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      /* Fragment */
      <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
          <div className="container-fluid">
            <a className="navbar-brand">
              <Link to ='/' className='linkImg'> {/*Linkeo al brand */}
              <img className="imagenLogo" src={logoLibreria} alt="logo Libreria"></img>
              </Link>
            </a>
            <button
              className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to ='/' style={{textDecoration:'none'}}> {/*Linkeo al brand */}
                    <a className="nav-link active">Inicio</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/category/01'style={{textDecoration:'none'}}>
                    <a className="nav-link active" >libros</a>
                  </Link>  
                </li>
                <li className="nav-item">
                  <Link to='/category/02'style={{textDecoration:'none'}}>
                  <a className="nav-link active" >musica</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/category/03'style={{textDecoration:'none'}}>
                    <a className="nav-link active" >peliculas</a>
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

