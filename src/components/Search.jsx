import React from "react";
import "./Search.css";

export const Search = ({ search, setSearch }) => {

    const updateSearch = (e) => {
        setSearch(e.target.value);
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
            Candidates
            </a>

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
