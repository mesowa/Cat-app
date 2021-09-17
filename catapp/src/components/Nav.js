import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => (
  <div className="navbar-expand-lg bg-dark bg-gradient">
    <nav className="navbar-bar d-flex justify-content-end">
      <div className="navbar-item mr-auto p-2">
        <Link to="/">
            🏠
        </Link>
      </div>
      <div className="navbar-item2 d-flex justify-content-end p-2">
        <Link to="/FelineFilter">
            Feline Filter
        </Link>
      </div>
      <div className="navbar-item2 d-flex justify-content-end p-2">
        <Link to='/random'>CatRando-3000™</Link>
      </div>
    </nav>
  </div> 
)


export default Nav 