import React from 'react';
import logo from '../../assets/quadbtech-task.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid container">
                   <img src={logo} alt="" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                               <Link to='/shows' className="nav-link" href="#">Shows</Link>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;