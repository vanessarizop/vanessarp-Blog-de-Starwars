// Import necessary hooks and components from react-router-dom and other libraries.
import { Link, useParams } from "react-router-dom";  // To use link for navigation and useParams to get URL parameters
import PropTypes from "prop-types";  // To define prop types for this component
import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Import a custom hook for accessing the global state


export const SingleCardVehicles = props => {
  let [data, setData] = useState({  name:"", model:"", manufacturer:"", cost_in_credits:"", length:"", max_atmosphering_speed:"", crew:"", passengers:"", cargo_capacity:"", consumables:"", vehicle_class:"" });
  // Access the global state using the custom hook.
  const { store } = useGlobalReducer();
  const [error, setError] = useState(null);
  const { theId } = useParams();
  const imageUrl = `https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/vehicles/${theId}.jpg`;


  useEffect(() => {
    const singleVehicles  = store.vehicles.find((veh) => veh.uid === theId);
    
    if (singleVehicles ){

setData({
  name: singleVehicles.name,
  model: singleVehicles.model,
  manufacturer: singleVehicles.manufacturer,
  cost_in_credits: singleVehicles.cost_in_credits,
  length: singleVehicles.length,
  max_atmosphering_speed: singleVehicles.max_atmosphering_speed,
  crew: singleVehicles.crew,
  passengers: singleVehicles.passengers,
  cargo_capacity: singleVehicles.cargo_capacity,
  consumables: singleVehicles.consumables,
  vehicle_class: singleVehicles.vehicle_class
});
setError(null);
    } else {

      setError(`Contacto con ID ${theId} no encontrado .`);

      setData({  name:"", model:"", manufacturer:"", cost_in_credits:"", length:"", max_atmosphering_speed:"", crew:"", passengers:"", cargo_capacity:"", consumables:"", vehicle_class:""  });
    }
  }, [theId, store.vehicles]);



  return (
   <div className="container p-2">
  <div className="row g-0 align-items-start">
   
    <div className="col-md-4" style={{padding: "10px" }}>
      <img src={imageUrl} className="img-fluid rounded" style={{ width: "100%", height: "auto" }}/>
    </div>

<div className="col-md-8" style={{  padding: "30px" }}>
      <h1 className="card-title text-center">{data.name}</h1>
      <br/>
      <h5 className="card-text text-center">Star Wars is a renowned science fiction franchise that has captivated audiences since its inception in 1977. Created by George Lucas, it features an expansive universe filled with diverse characters, intricate storylines, and themes of good versus evil. The saga encompasses multiple films, television series, books, and comics, establishing a rich mythology that continues to evolve. Its cultural impact is profound, influencing not only the film industry but also popular culture at large, making it a significant part of modern storytelling.</h5>
      </div>
   
</div>
<hr className="my-4 border border-danger border-2 opacity-100" />
<div className="d-flex justify-content-between text-center mb-5">
 
      <div className="d-flex flex-wrap">
    <div className="p-3 flex-fill">
        <p className="fw-bold text-danger mb-1">Name</p>
        <p className="text-dark">{data.name}</p>
    </div>

    <div className="p-3 flex-fill">
        <p className="fw-bold text-danger mb-1">Model</p>
        <p className="text-dark">{data.model}</p>
    </div>

    <div className="p-3 flex-fill">
        <p className="fw-bold text-danger mb-1">Manufacturer</p>
        <p className="text-dark">{data.manufacturer}</p>
    </div>

    <div className="p-3 flex-fill">
        <p className="fw-bold text-danger mb-1">Length</p>
        <p className="text-dark">{data.length}</p>
    </div>

    <div className="p-3 flex-fill">
        <p className="fw-bold text-danger mb-1">Max atmosphering speed</p>
        <p className="text-dark">{data.max_atmosphering_speed}</p>
    </div>

    <div className="p-3 flex-fill">
        <p className="fw-bold text-danger mb-1">Crew</p>
        <p className="text-dark">{data.crew}</p>
    </div>

    <div className="p-3 flex-fill">
        <p className="fw-bold text-danger mb-1">Passengers</p>
        <p className="text-dark">{data.passengers}</p>
    </div>

    <div className="p-3 flex-fill">
        <p className="fw-bold text-danger mb-1">Cargo capacity</p>
        <p className="text-dark">{data.cargo_capacity}</p>
    </div>

    <div className="p-3 flex-fill">
        <p className="fw-bold text-danger mb-1">Consumables</p>
        <p className="text-dark">{data.consumables}</p>
    </div>

    <div className="p-3 flex-fill">
        <p className="fw-bold text-danger mb-1">Vehicle class</p>
        <p className="text-dark">{data.vehicle_class}</p>
    </div>
</div>

      </div>
       <div className="d-flex gap-2 ml-4  ">
          <Link to="/vehicles">
            <button type="button" className="btn btn-outline-secondary mt-3">
              Back Vehicles
            </button>
          </Link>

          <Link to="/">
            <button type="button" className="btn btn-outline-secondary mt-3">
              Back home
            </button>
          </Link>
        </div>
    </div>
  );
};


SingleCardVehicles.propTypes = {
  match: PropTypes.object
}