// Import necessary hooks and components from react-router-dom and other libraries.
import { Link, useParams } from "react-router-dom";  // To use link for navigation and useParams to get URL parameters
import PropTypes from "prop-types";  // To define prop types for this component
import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Import a custom hook for accessing the global state


export const SingleCardCharacter = props => {
  let [data, setData] = useState({ name: "", gender: "", height: "", skin_color: "", hair_color: "", eye_color: "",  birth_year:"" });
  // Access the global state using the custom hook.
  const { store } = useGlobalReducer();
  const [error, setError] = useState(null);
  const { theId } = useParams();
  const imageUrl = `https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/people/${theId}.jpg`;


  useEffect(() => {
    const singleCharacter = store.character.find( (chart) => chart.uid === theId);
    
    if (singleCharacter ){
 
setData({
  name: singleCharacter.name,
  gender: singleCharacter.gender,
  height: singleCharacter.height,
  skin_color: singleCharacter.skin_color,
  hair_color: singleCharacter.hair_color,
  eye_color: singleCharacter.eye_color,
   birth_year:singleCharacter.birth_year,
});
setError(null);
    } else {

      setError(`Contacto con ID ${theId} no encontrado en el store.`);

      setData({ name: "", gender: "", height: "", skin_color: "", hair_color: "", eye_color: "" });
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
          <p className="fw-bold text-danger mb-1">Birth Year</p>
          <p className="text-dark">{data.birth_year}</p>
        </div>

    
        <div className="p-2 flex-fill">
          <p className="fw-bold text-danger mb-1">Gender</p>
          <p className="text-dark">{data.gender}</p>
        </div>

        <div className="p-2 flex-fill">
          <p className="fw-bold text-danger mb-1">Height</p>
          <p className="text-dark">{data.height}</p>
        </div>

      
        <div className="p-2 flex-fill">
          <p className="fw-bold text-danger mb-1">Skin Color</p>
          <p className="text-dark">{data.skin_color}</p>
        </div>
        
   
        <div className="p-2 flex-fill">
          <p className="fw-bold text-danger mb-1">Eye Color</p>
          <p className="text-dark">{data.eye_color}</p>
        </div>
        
      </div>
       <div className="d-flex gap-2 ml-4  ">
          <Link to="/people">
            <button type="button" className="btn btn-outline-secondary mt-3">
              Back Character
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


SingleCardCharacter.propTypes = {
  match: PropTypes.object
}