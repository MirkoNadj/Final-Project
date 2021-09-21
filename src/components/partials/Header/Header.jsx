import React from 'react';
import { Link, useLocation } from "react-router-dom";
import './Header.css';

export const Header = ({setToken, token}) => {
  const location = useLocation();
  const logout = () => {
    setToken("");
  };
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          Interview Reports
        </a>
        <ul className="navbar-nav ">
          {token.length > 10 && location.pathname === "/reports" && location.pathname !== "/create" && (
            <li className="nav-item">
              <Link className="btn btn-light mr-2" to="/create">
                Create Report
              </Link>
            </li>
          )}
          {token.length > 10 && location.pathname !== "/" && (
            <li className="nav-item">
              <Link className="btn btn-light mr-2" to="/">
                Candidates
              </Link>
            </li>
          )}
          {token.length > 10 && location.pathname !== "/reports" && (
            <li>
              <Link className="btn btn-light mr-2" to="/reports">
                Reports
              </Link>
            </li>
          )}
          {token.length > 10 && (
            <li className="nav-item">
              <button className="btn btn-dark" type="button" onClick={logout}>
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav>
    );
}