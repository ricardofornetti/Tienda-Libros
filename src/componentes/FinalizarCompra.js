import React from "react";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import arrowLeft from 'bootstrap-icons/icons/arrow-left-circle-fill.svg'


const FinalizarCompra = () => {
  const {carrito, emptyCart, costoTotalItem, quantityCart,} = useCart();

  const [idCompra, setIdCompra] = useState("");

  const [modal, setModal] = useState(false);
  const [buyer, setBuyer] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
  });

  const orderDate = new Date().toLocaleDateString();

  const handleSubmitChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const orderHandler = () => {
    const order = {
      buyer,
      item: carrito,
      price: costoTotalItem(),
      date: orderDate,
    };

    saveToFirestore(order);
  };

  const saveToFirestore = (order) => {
    const db = getFirestore();
    const orderCollection = collection(db, "order");

    addDoc(orderCollection, order).then((data) => {
      setIdCompra(data.id);
    });
  };

  return (
    <>
    <h2 className="titulo">resumen de compra</h2>
    <h4 className="tituloSecundario">Estos son los productos en tu carrito</h4>
    
      <table className="table table-hover table-dark table-sm caption-top bordered">
        <label></label>
        <thead>
          <tr>
            <th>Cantidad de Articulos</th>
            <th></th>
            <th>{quantityCart()}</th>
          </tr>
        </thead>
        <tbody>
          
            
          
          <tr>
            <th>Total</th>
            <td></td>
            <td>${costoTotalItem()}</td>
          </tr>
        </tbody>
      </table>

      <form>
        <h4> Datos de facturacion</h4>
        <div className="col-auto">
          <label className="visually-hidden">Nombre</label>
          <input
            className="form-control form-control-sm"
            id="name"
            type="text"
            name="name"
            required
            onChange={handleSubmitChange}
            placeholder="Ingrese Nombre"
          />
        </div>
        <div className="col-auto">
          <label className="visually-hidden">Apellido</label>
          <input
            className="form-control col-auto"
            id="surname"
            type="text"
            name="lastname"
            required
            onChange={handleSubmitChange}
            placeholder="Ingrese Apellido"
          />
        </div>
        <div className="col-auto">
          <label className="visually-hidden">Telefono</label>
          <input
            id="phone"
            type="phone"
            name="phone"
            required
            onChange={handleSubmitChange}
            placeholder="Ingrese num. telefono"
          />
        </div>
        <div className="col-auto">
          <label className="visually-hidden">Username</label>
          <div className="input-group">
            <div className="input-group-text">@</div>
            <input
              id="email"
              type="email"
              name="email"
              required
              onChange={handleSubmitChange}
              placeholder="e-mail"
            />
          </div>
        </div>
      </form>

      <div>
        {buyer.name && buyer.lastname && buyer.phone && buyer.email ? (
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => {
              orderHandler();
              setModal(true);
            }}
          >
            Realizar Compra
          </button>
        ) : (
          <input
            className="btn btn-dark"
            type="submit"
            value="Completr Datos"
          />
        )}
      </div>

      {/* Contenedor modal final */}
      <div className={`${modal ? "flex" : "hidden"}`}>
        <h2> ¡Muchas gracias por tu compra {buyer.name.toUpperCase()} </h2>
        <p>
          Te enviaremos un e-mail a {buyer.email.toLowerCase()} con tu orden de
          compra ID: {idCompra}.
        </p>

        <img className="imagenFlecha" src={arrowLeft} alt="imagen flecha"></img>
        <Link to="/" style={{ textDecoration: "none" }}>
          <button onClick={emptyCart} type="button" className="btn btn-dark btnVolverFinCompra">Volver al Inicio...</button>
        </Link>
        
      </div>
    </>
  );
};

export default FinalizarCompra;


/*

*/








      















