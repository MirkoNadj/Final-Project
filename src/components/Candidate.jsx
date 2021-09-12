import React, { useEffect, useState } from "react";
import {useLocation} from "react-router";
import './Candidate.css'

//import { getReportsData } from "../service/getData";

export const Candidate = () => {

  const location = useLocation();
  const candidate = location.state;

  const dateOfBirth = (bDay) => {
    let date = new Date (bDay);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return `${day}.${month}.${year}`
  }

  const [data, setData] = useState([]);

  useEffect(() => {
    //getReportsData().then(user =>{ return(setData(user))})
  }, []);

  return (
    // <div className="container row page-candidate">
    //   <h1>YOU ARE ON THE CANDIDATE PAGE</h1>
    // </div>
    <div className="page page-candidate" style={{ padding: "40px" }}>
      <div className="container candidate-top">
        <div className="row">
          <div className="col-sm-12 col-md-3">
            <img src="./default-user.jpg" className="candidate-image" alt="image of candidate" />
          </div>
          <div className="col-sm-12 col-md-5">
            <h5>Name:{candidate.name}</h5>
            <h5>E-mail:{candidate.email}</h5>
          </div>
          <div className="col-sm-12 col-md-4">
            <h5>Date of birth: {dateOfBirth(candidate.birthday)}</h5>
            <h5>Education: {candidate.education}</h5>
          </div>
        </div>
      </div>
      <div className="candidate-reports">
        <h4>Reports</h4>
      </div>
    </div>
  );
};
