// Import necessary hooks and components from react-router-dom and other libraries.
import { Link, useParams } from "react-router-dom";  // To use link for navigation and useParams to get URL parameters
import PropTypes from "prop-types";  // To define prop types for this component
import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Import a custom hook for accessing the global state


export const SingleCardPlanets = props => {
  let [data, setData] = useState({ name: "", rotation_period: "", orbital_period: "", diameter: "",climate: "", gravity: "",terrain: "", surface_water: "", population: "" });
  // Access the global state using the custom hook.
  const { store } = useGlobalReducer();
  const [error, setError] = useState(null);
  const { theId } = useParams();
  const imageUrl = `https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/planets/${theId}.jpg`;


  useEffect(() => {
    const singlePlanets  = store.planets .find( (plant) => plant.uid === theId);
    
    if (singlePlanets ){

setData({
  name: singlePlanets.name,
  rotation_period: singlePlanets.rotation_period,
  diameter: singlePlanets.diameter,
  climate: singlePlanets.climate,
  gravity: singlePlanets.gravity,
 terrain:singlePlanets.terrain,
  surface_water: singlePlanets.surface_water,
 population: singlePlanets.population,
 orbital_period:singlePlanets.orbital_period
});
setError(null);
    } else {

      setError(`Contacto con ID ${theId} no encontrado .`);

      setData({  name: "", rotation_period: "", orbital_period: "", diameter: "",climate: "", gravity: "",terrain: "", surface_water: "", population: ""  });
    }
  }, [theId, store.character]);



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

      <div className="p-2 flex-fill">
  <p className="fw-bold text-danger mb-1">Name</p>
  <p className="text-dark">{data.name}</p>
</div>

<div className="p-2 flex-fill">
  <p className="fw-bold text-danger mb-1">Population</p>
  <p className="text-dark">{data.population}</p>
</div>

<div className="p-2 flex-fill">
  <p className="fw-bold text-danger mb-1">Rotation Period</p>
  <p className="text-dark">{data.rotation_period}</p>
</div>

<div className="p-2 flex-fill">
  <p className="fw-bold text-danger mb-1">Orbital Period</p>
  <p className="text-dark">{data.orbital_period}</p>
</div>

<div className="p-2 flex-fill">
  <p className="fw-bold text-danger mb-1">Diameter</p>
  <p className="text-dark">{data.diameter}</p>
</div>

<div className="p-2 flex-fill">
  <p className="fw-bold text-danger mb-1">Climate</p>
  <p className="text-dark">{data.climate}</p>
</div>

<div className="p-2 flex-fill">
  <p className="fw-bold text-danger mb-1">Gravity</p>
  <p className="text-dark">{data.gravity}</p>
</div>

<div className="p-2 flex-fill">
  <p className="fw-bold text-danger mb-1">Terrain</p>
  <p className="text-dark">{data.terrain}</p>
</div>

<div className="p-2 flex-fill">
  <p className="fw-bold text-danger mb-1">Surface Water</p>
  <p className="text-dark">{data.surface_water}</p>
</div>

        </div>
<div className="d-flex gap-2 ml-4  ">
          <Link to="/planets">
            <button type="button" className="btn btn-outline-secondary mt-3">
              Back Planets
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



SingleCardPlanets.propTypes = {
  match: PropTypes.object
}