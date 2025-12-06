// Import necessary components from react-router-dom and other parts of the application.
import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect } from "react";
import { ContactCardVehicles } from "./ContactCardVehicles";

export const Vehicles = () => {

  const { theId } = useParams();
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    async function obtenerVehicles() {
      try {
         if (!theId) return;
      const res = await fetch(`https://www.swapi.tech/api/vehicles/${theId}`);
      const datos = await res.json();
       if (datos?.result) {
            console.log(datos);
          dispatch({ 
            type: "obtenervehicle", 
            payload: [datos.result.properties] 
          });
        }
    
      } catch (error) {
        console.error("Hubo un error:", error);
      }
    }
   
       obtenerVehicles();
    
  }, [theId, dispatch]);



  return (
         <div className="container-fluid bg-dark p-5" >
          <h1 className="text-danger p-2">Vehicles</h1>
    <div className="horizontal-scroll-container" style={{ overflowX: 'scroll', overflowY: 'hidden',  whiteSpace: 'nowrap', paddingBottom: '20px'}}>
   <div className="d-flex  gap-2">
        {store.vehicles?.map((vehiculo,index) => {
            return ( <ContactCardVehicles key={vehiculo.uid||index} vehiculo={vehiculo} /> )
 })}</div>
   
    </div> <br/>
      <Link to="/">
        <button className="btn btn-primary p-2">Back home</button>
      </Link></div> 
  );
}