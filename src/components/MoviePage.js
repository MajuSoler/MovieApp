import { useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

//import MovieItem from "../components/MovieItem";


export default function MoviePage ({}) {
    const {imdb_id} = useParams();
    console.log("this is the object ready",imdb_id);
    
    const [movieData, setMovieData] = useState (null);

    //console.log("this is use state',useState");
    const url =  `https://omdbapi.com/?apikey=76fdd746&i=${imdb_id}`

    useEffect (() => {
        console.log("this is use effect") 
    
        async function fetchData () {
            console.log('this is fetch data');
            // you can wait here
            const response = await axios.get(url);
            console.log("this is response", response.data);
            setMovieData(response.data)
        }
        fetchData();
    }, [imdb_id]);

    return (
       <div>
           {movieData ? (
               <div>
                   <h1> {movieData.Title} </h1>
                   <img src={movieData.Poster} alt=" " />
               </div>
           ) : (
            <p>Loading....</p>  
           )}
        </div>
    )
}
