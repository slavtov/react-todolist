import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = props => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <Link to="/" className="navbar-brand">
                <img 
                    src={props.logo} 
                    width="30" 
                    height="30" 
                    className="d-inline-block align-top" 
                    alt="Logo"/> React Blog
            </Link>
            <button 
                className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarText" 
                aria-controls="navbarText" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink exact to="/" className="nav-link">Main</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/todolist" className="nav-link">TodoList</NavLink>
                    </li>
                </ul>
                <span className="navbar-text">
                    Navbar text with an inline element
                </span>
            </div>
        </div>
    </nav>
)

export default Navbar