import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import db from '../utils/firebaseConfig'
import { collection, getDocs, query, where, getFirestore, orderBy } from "firebase/firestore";



const ItemListConteiner = () => {
  const [listaProductos, setListaProductos] = useState([]);
  const [cargando, setCargando] = useState(false);
  const { id } = useParams();
  
  useEffect(() => {
    const db = getFirestore();
    const firebaseFetch = async () => {
      setCargando(true);
      const myItem = id
        ? query(collection(db, "products"), where("category", "==", id))
        :query(collection (db, 'products'), orderBy('titulo'))

        const querySnapshot = await getDocs(myItem)
        setListaProductos(
            querySnapshot.docs.map((item) => {
                return { ...item.data(), id: item.id }
                
            })
        )  
        setCargando(false)    
      };
    firebaseFetch ();
  }, [id]);

  return (
    <>
      <div>
        
        {cargando ? (
          <button className="btn btn-dark" type="button" disabled>
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Cargando...
          </button>
        ) : (
          <ItemList listaProductos={listaProductos} />
        )}
      </div>
    </>
  );
};

export default ItemListConteiner;


