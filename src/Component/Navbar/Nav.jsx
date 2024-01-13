import React, { useState } from 'react'
import "./Navbar.scss";
import { Link } from "react-router-dom";


const Nav = ({setPanigation}) => {
  
  return (
    <nav className="navbar">
      <div className="navbar__items">
        <ul className="navbar__list">
          <li>
            <Link className="navbar__link" to="/" onClick={()=>setPanigation(1)}>Users</Link>
          </li>
          <li>
            <Link to="/photos" className="navbar__link"  onClick={()=>setPanigation(1)}>Photos</Link>
          </li>
          <li>
            <Link className="navbar__link" to="/albums" onClick={()=>setPanigation(1)}>Albums</Link>
          </li>
          <li>
            <Link className="navbar__link" to="/posts" onClick={()=>setPanigation(1)}>Posts</Link>
          </li>
          <li>
            <Link className="navbar__link" to="/comments" onClick={()=>setPanigation(1)}>Comments</Link>
          </li>
          <li>
            <Link className="navbar__link" to="/todos" onClick={()=>setPanigation(1)}>Todos</Link>
          </li>
          <li>
            <Link className="navbar__link" to="/product" onClick={()=>setPanigation(1)}>Products</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
