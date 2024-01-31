import React, { useContext } from "react";
import { Link } from 'react-router-dom'

import UserContext from '../context/UserContext'

const Header = () => {
  const { userInfo, updateUserInfo } = useContext(UserContext);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/mylinks/">
                  My Links
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                {userInfo.username ? (
                  <>Hello { userInfo?.username } ! 
                  <Link className="nav-link" to='/logout/'>Logout</Link>
                  </>
                      
                ) : (
                    <Link className="nav-link" to='/login/'>Login</Link>
                ) }
                
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
