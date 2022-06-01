import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import {getData} from '../utils/product';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const[productoPuntual, setProductoPuntual] = useState({})
  const [cargando, setCargando] = useState(false)
  const {id} = useParams();

  useEffect(()=>{
    setCargando(true)
    getData
    .then((res) => setProductoPuntual(res.find((prod) => prod.id === (id))))
    .catch((error) => console.log(error))
    .finally(()=> setCargando(false))
  }, []);

  return (
    <>
      <div>
        {cargando ? 
        <button className="btn btn-dark" type="button" disabled>
          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          Cargando...
        </button> : <ItemDetail item={productoPuntual}/>}

        
      </div>
    </>
  )
}

export default ItemDetailContainer
