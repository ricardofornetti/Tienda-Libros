import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logoLibreria from '../imagenes/logoLibreria.png';
import CartWidget from './CartWidget';


const Navbar = () => {
    return (
      /* Fragment */
      <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
          <div className="container-fluid">
            <a className="navbar-brand" href="./index.js">
              <img className="imagenLogo" src={logoLibreria} alt="logo Libreria"></img>
            </a>
            <button
              className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" href="./index.js">Inicio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">libros</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">musica</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">peliculas</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">pasatiempos</a>
                </li>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Titulo, Autor, ISBN" aria-label="Search"/>
                  <button className="btn btn-outline-dark" type="submit">Buscar</button>
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

