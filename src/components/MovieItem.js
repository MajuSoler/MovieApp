import { useParams} from "react-router-dom";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
export default function MovieItem ({movie}){
    return (
    <div style={{
        width: "25%",
        padding: "10px",
        boxSizing: "border-box",
      }}>
         <Link to={`/discovermovies/${movie.imdbID}`}>
      <strong >{ movie.Title}</strong> 
      ({movie.imdbID})
      <img
        src={movie.Poster}
        alt={movie.Title}
        style={{
          display: "block",
          maxWidth: "100%",
        }}
      />
      </Link>
    </div>)
}

