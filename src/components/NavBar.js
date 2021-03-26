import React from "react";
import {Link, NavLink} from "react-router-dom"

export default function NavBar () {
    return (
        <div>
            {/* <Link style={{marginRight:'10px',marginTop:'50px'}} to="/"exact > Home</Link> */}
            {/* <Link style={{marginRight:'10px',marginTop:'50px'}} to="/aboutus" exact> About Us</Link> */}
            <Link style={{marginRight:'10px',marginTop:'50px'}} to="/discovermovies" exact> Discover Movies</Link>
            {/* <Link style={{marginRight:'10px',marginTop:'50px'}} to="/discovermovies/:imdb_id" exact> Specific Movie</Link> */}
        </div>
    )
}