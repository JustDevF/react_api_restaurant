import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        {/*Lien dans le composant*/}
        <Link to="/">
          <img src={logo} alt="cocktail db logo" className="logo"></img>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/about">
              A-propos de nous
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar