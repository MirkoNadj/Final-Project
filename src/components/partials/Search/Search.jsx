import React from "react";
import { useLocation } from "react-router";
import "./Search.css";

export const Search = ({ title, search, setSearch }) => {
    const location = useLocation()
    console.log('Search location',location)
    const updateSearch = (e) => {
        setSearch(e.target.value);
    }
    return (
      <nav className="searchbar navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand">{title}</span>
        <form className="form-inline my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search..."
            onChange={updateSearch}
            value={search}
          />
        </form>
      </nav>
    );
};
