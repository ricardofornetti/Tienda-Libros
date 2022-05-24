import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import ItemList from './ItemList';
import { getData } from '../utils/product';


const ItemListConteiner = ({saludo}) => {

  const [listaProductos, setListaProductos]=useState([])
  const [cargando, setCargando] = useState(false)


  useEffect(()=>{
    setCargando(true)
    getData
    .then((res)=>setListaProductos(res) )
    .catch((error) => console.log(error))
    .finally(()=> setCargando(false))
  }, [])


  return (
    <>
      <div>
        <h3 className='saludo'>{saludo}</h3>
        {cargando ? 
        <button className="btn btn-dark" type="button" disabled>
          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          Cargando...
        </button> : <ItemList listaProductos={listaProductos}/>}
      </div>
    </>
  );
}

export default ItemListConteiner;


