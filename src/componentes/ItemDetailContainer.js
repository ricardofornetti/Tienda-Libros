import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import {getData} from '../utils/product';

const ItemDetailContainer = () => {
  const[productoPuntual, setProductoPuntual] = useState({})
  const [cargando, setCargando] = useState(false)

  useEffect(()=>{
    setCargando(true)
    getData
    .then((res) => setProductoPuntual(res[4]) )
    .catch((error) => console.log(error))
    .finally(()=> setCargando(false))
  }, [])

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
