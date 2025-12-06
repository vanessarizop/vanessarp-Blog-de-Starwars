// Import necessary components from react-router-dom and other parts of the application.
import { Link, useParams } from "react-router-dom";

import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect } from "react";
import { ContactCardCharacter } from "./ContactCardCharacter";

export const Character = () => {

  const { theId } = useParams();
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    async function obtenerPersonajes() {
      try {
         if (!theId) return;
      const res = await fetch(`https://www.swapi.tech/api/people/${theId}`);
      const datos = await res.json();

        if (datos?.result) {
            console.log(datos);
          dispatch({ 
            type: "obtenercharacter", 
            payload: [datos.result.properties] 
          });
        }
    
      } catch (error) {
        console.error("Hubo un error:", error);
      }
    }
   
      obtenerPersonajes();
    
  }, [theId, dispatch]);



  return (
    <div className="container-fluid  p-5 bg-dark fondo img-fluid w-100" >
    <h1 className="text-danger p-2">Characters</h1>
  
 <div className="horizontal-scroll-container overflow-auto  m-0 pb-3" >

<div className="d-flex  gap-2">
  
        {store.character?.map((persona,index) => {
            return ( <ContactCardCharacter key={persona.uid||index} persona={persona} /> )
 })}</div>
    
   
    </div>   <br />
      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link></div>
  );
}
