/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { FaSearch } from 'react-icons/fa';


function Header(props) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="header-container d-flex justify-content-between">
      <div className="header">
        <Link to="/" className='logout-btn'>Home</Link>

        <input
          type="text"
          placeholder="Search Products"
          className="search"
          value={props && props.search}
          onChange={(e) => props.handlesearch && props.handlesearch(e.target.value)}
        />

        <button className="search-btn" onClick={() => props.handleClick && props.handleClick()}>
          <FaSearch />
        </button>
      </div>

      <div>

            {!!localStorage.getItem('token') && 
             <Link to="/add-product" >
               <button className="logout-btn"> SELL YOUR PRODUCTS
               </button>
              </Link>}

              {!!localStorage.getItem('token') && 
             <Link to="/liked-products" >
               <button className="logout-btn">Cart
               </button>
              </Link>}

        {!localStorage.getItem('token') ? (
          <Link to="/login" className="logout-btn">Login</Link>
        ) : (
          <button onClick={handleLogout} className="logout-btn">
            LOGOUT
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
