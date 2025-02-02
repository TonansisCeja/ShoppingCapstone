import React from "react";
import "./NavBar.css";
import { Link, useNavigate } from "react-router-dom";

const NavBar = ({ token, setToken }) => {
  //create logout button. when clicked set to null
  const navigate = useNavigate();
  const handleLogout = () => {
    setToken(null);

    //navigate back to login path
    navigate("/login");
  };
  return (
    <nav className="navbar-container">
      <div>
        <h1>My Shop</h1>
      </div>
      <div className="links">
        <Link className="nav-link" to="/">
          All Products
        </Link>
        {/* if there's a token(user logged in ) then display 
        logout button otherwise they should be able to log in page*/}
        {token ? (
          <>
            <Link className="nav-link" to="/cart">
              cart
            </Link>
            <button className="logOut-button" onClick={handleLogout}>
              Log Out
            </button>
          </>
        ) : (
          <Link to="/login" className="nav-link">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
