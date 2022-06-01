import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import ItemList from './ItemList';
import { getData } from '../utils/product';
import { useParams } from 'react-router-dom';



const ItemListConteiner = ({saludo}) => {

  const [listaProductos, setListaProductos]=useState([])
  const [cargando, setCargando] = useState(false)
  const {id} = useParams();


  useEffect(()=>{
    setCargando(true)
    getData

    //if (id === undefined) return prod;
    //return prod.category == (id)
    
    .then((res) => setListaProductos(res.filter((prod) => prod.category == (id))))
    .catch((error) => console.log(error))
    .finally(()=> setCargando(false))
  }, [id])


  



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


