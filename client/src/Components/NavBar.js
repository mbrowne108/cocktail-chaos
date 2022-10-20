import React from 'react';
import { NavLink } from "react-router-dom";

function NavBar({ handleLogoutClick }) {
  return (
    <nav className='btn-group d-flex'>
      <NavLink className="btn btn-primary" to="/" >Cocktail Recipes</NavLink>
      <NavLink className="btn btn-primary" to="/cabinet" >Liquor Cabinet</NavLink>
    </nav>
  );
}

export default NavBar;