import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import db from '../utils/firebaseConfig'
import { collection, getDocs, query, where} from "firebase/firestore";



const ItemListConteiner = () => {
  const [listaProductos, setListaProductos] = useState([]);
  const [cargando, setCargando] = useState(false);
  const { id } = useParams();

  
  
 
    
    const firebaseFetch = async () => {
      let productCollection;
      if (!id) {
        productCollection = query(collection(db, "products"));
      } else {
        productCollection = query(
          collection(db, "products"),
          where("category", "==", Number(id))
        );
      }
      const querySnapshot = await getDocs(productCollection);
      const dataFirebase = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return dataFirebase;
    };

    useEffect(() => {
      setCargando(true);
      firebaseFetch()
        .then((res) => setListaProductos(res))
        .catch((error) => console.log(error))
        .finally(() => setCargando(false));
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


