import axios from "axios";
import React, { useState } from "react";
import MovieItem from "../components/MovieItem";
import MoviePage from "../components/MoviePage";

export default function DiscoverMovies() {
  const [searchText, setSearchText] = useState("");
  const [state, setState] = useState({ status: "idle" });

  const search = async () => {
    if (searchText === "") {
      setState({ status: "idle" });
      return;
    }
    setState({ status: "searching" });

    const queryParam = encodeURIComponent(searchText);

    const response = await axios.get(
      `http://www.omdbapi.com/?s=${queryParam}&apikey=76fdd746`
    );
    console.log("Search movie for:", response);
    setState({ status: "done", data: response.data.Search });
  };
  //console.log("this is the state",state)
  return (
    <div>
      <h1>Discover some Movies!</h1>
      <p>
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={search}>Search</button>
      </p>
      <p>{state.status === "idle" && <p>Write a title and press Search</p>}</p>
      <p>{state.status === "searching" && <p>Loading...</p>}</p>
      <p>
        {state.status === "done" && (
          <div>
            <h2>Search results</h2>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                margin: "0 -10px",
              }}
            >
              {state.data.map((movie) => (
                <MovieItem key={movie.imdbID} movie={movie} />
              ))}
            </div>
          </div>
        )}
      </p>
    </div>
  );
}
