import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <nav className="navbar">
            <h2>MyApp</h2>
            <div>
                <Link to="/" className="nav-link">User List</Link>
                <Link to="/register" className="nav-link">Register User</Link>
            </div>
        </nav>
    );
}

export default Navbar;
