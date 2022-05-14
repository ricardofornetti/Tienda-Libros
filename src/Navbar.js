import 'bootstrap/dist/css/bootstrap.min.css';
import libreria from './imagenes/libreria.jpg'


const Navbar = () => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-black">
          <div className="container-fluid">
            <a className="navbar-brand" href="./index.js">
              <img className="imagen-logo" src={libreria} alt="logo Libreria"></img>
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
                  <a className="nav-link active" href="#">LIBROS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">MUSICA</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">PELICULAS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">PASATIEMPOS</a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Titulo, Autor, ISBN" aria-label="Search"></input>
                <button className="btn btn-outline-success" type="submit">Buscar</button>
             </form>
            </div>
          </div>
        </nav>
    </div>
    );
}

export default Navbar;

