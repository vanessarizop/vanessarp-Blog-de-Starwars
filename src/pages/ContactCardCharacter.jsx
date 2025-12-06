
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import PropTypes from "prop-types";
import { use } from "react";

const API_URL = "https://www.swapi.tech/api/people/";

export const ContactCardCharacter = ({ persona }) => {
  const imageUrl = `https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/people/${persona.uid}.jpg`;
  const { theId } = useParams();
  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate();

  const toggleFavorite = () => {
    const isFav = store.favorites.some(fav => fav.uid === persona.uid);

    if (isFav) {
        dispatch({ type: "remove_favorite", payload: persona });
    } else {
        dispatch({ type: "add_favorite", payload: persona });
    }
};


  return (
    <div className="container">
    <div className="col-12 col-md-4 mx-auto"> 

       <div className="card d-inline-flex mx-auto" style={{ width: "20rem" }}> 
        <img className="card-img-top " src={imageUrl} alt="Card image cap" />
        <div className="card-body mt-0">
          <h5 className=" card-title card-title fw-bold mb-3">{persona.name}</h5>
          <div className="card-text">Gender:{persona.gender}</div>
          <p className="card-text">Height:{persona.height}</p>
        </div>
<div className="d-flex justify-content-between align-items-center  p-3 gap-2">
        <button className="btn btn btn btn-primary" onClick={() => navigate(`/singlecardcharacter/${persona.uid}`)} title="Ver detalles">
          Learn More!
        </button>
      <button className="btn bg-transparent border-1 text-danger" onClick={toggleFavorite} >
     <i className={`fa-solid fa-heart ${store.favorites.some(fav => fav.uid === persona.uid) ? "text-danger" : "text-secondary"}`}></i>
       </button>
      </div>
      </div>
      
      </div>
      
     </div>
  )
}
ContactCardCharacter.propTypes = {
  persona: PropTypes.object.isRequired,

}

