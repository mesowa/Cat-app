import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => (
  <div className="navbar-expand-lg bg-dark bg-gradient">
    <nav className="navbar-bar d-flex align-items-end">
      <div className="navbar-item mr-auto p-2">
        <Link to="/">
            🏠
        </Link>
      </div>
      <div className="navbar-item p-2">
        <Link to="/FelineFilter">
            Feline Filter
        </Link>
      </div>
    </nav>
  </div> 
)


export default Nav 