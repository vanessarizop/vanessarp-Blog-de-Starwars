// Import necessary components from react-router-dom and other parts of the application.
import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect } from "react";
import { ContactCardPlanet } from "./ContactCardPlanet";

export const Planets = () => {

  const { theId } = useParams();
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    async function obtenerPlanets() {
      try {
         if (!theId) return;
      const res = await fetch(`https://www.swapi.tech/api/planets/${theId}`);
      const datos = await res.json();

        if (datos?.result) {
            console.log(datos);
          dispatch({ 
            type: "obtenerPlanets", 
            payload: [datos.result.properties] 
          });
        }
    
      } catch (error) {
        console.error("Hubo un error:", error);
      }
    }
   
      obtenerPlanets();
    
  }, [theId, dispatch]);



  return (
     <div className="container-fluid bg-dark p-5" >
      <h1 className="text-danger p-2">Planets</h1>
    <div className="horizontal-scroll-container overflow-auto pb-3" >
   <div className="d-flex  gap-2">
        {store.planets?.map((planeta,index) => {
            return ( <ContactCardPlanet key={planeta.uid||index} planeta={planeta} /> )
 })}</div>
    
    </div>
    <br/>
      <Link to="/">
        <button className="btn btn-primary p-2">Back home</button>
      </Link></div> 
  );
}
