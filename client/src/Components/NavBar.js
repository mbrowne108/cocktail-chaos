import React from 'react';
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className='btn-group btn-group-lg d-flex' role="group">
      <NavLink className="btn btn-outline-primary" to="/cocktails" >Cocktail Recipes</NavLink>
      <NavLink className="btn btn-outline-primary" to="/ingredients" >Liquor Cabinet</NavLink>
    </nav>
  );
}

export default NavBar;