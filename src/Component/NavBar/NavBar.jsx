import './NavBar.css';

import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


const NavBar = () => {

  const state = useSelector((state) => state.handleCart)

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-1" to="/">
            Falcon's Shop
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
                <button className="btn">
                    <NavLink to="/login" className="btn btn-outline-dark">
                       <i className="fNavLink fa fa-user me-1"></i> Login</NavLink>
                </button>
                <button className="btn">
                    <NavLink to="/register" className="btn btn-outline-dark ms-2">
                       <i className="fNavLink fa fa-user-plus me-1"></i> Register</NavLink>
                </button>
                <button className="btn">
                    <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                       <i className="fNavLink fa-solid fa-cart-shoppin me-1"></i> Cart({state.length})</NavLink>
                </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
