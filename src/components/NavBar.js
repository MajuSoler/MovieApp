import React from "react";
import {Link, NavLink} from "react-router-dom"

export default function NavBar () {
    return (
        <div>
            <Link style={{marginRight:'10px'}} to="/" exact> Home</Link>
            <Link style={{marginRight:'10px'}} to="/aboutus" exact> About Us</Link>
            <Link style={{marginRight:'10px'}} to="time" exact> Oppening hours</Link>
        
        </div>
    )
}